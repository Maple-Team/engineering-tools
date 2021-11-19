import { parse, TransformOptions } from '@babel/core'
import generate from '@babel/generator'
import traverse from '@babel/traverse'
import * as t from '@babel/types'

const options: TransformOptions = {
  ast: true,
  filename: 'babel.config.json',
  rootMode: 'root',
  presets: ['@babel/preset-env'],
}
/**
 * es6 downgrade to es5
 * @param code
 * @returns
 */
const es6to5 = (code: string | undefined | null) => {
  if (!code) return
  const ast = parse(code, options)
  if (!ast) return
  traverse(ast, {
    Program: (path) => {
      const { node } = path
      for (const directive of node.directives) {
        if (directive.value.value === 'use strict') return
      }
      path.unshiftContainer('directives', t.directive(t.directiveLiteral('use strict')))
    },
    VariableDeclaration: (path) => {
      const { node } = path
      if (node.kind === 'const' || node.kind === 'let') {
        path.node.kind = 'var'
      }
    },
    ArrowFunctionExpression: (path) => {
      let { params, body, generator, async } = path.node
      if (!t.isBlockStatement(body)) {
        const node = t.returnStatement(body)
        body = t.blockStatement([node])
      }

      path.replaceWith(t.functionExpression(t.identifier('fn'), params, body, generator, async))
    },
  })

  return generate(ast, {}, code).code
}
/**
 * es5 upgrade to es6
 * @param code
 */
const es5to6 = (code: string): string => {
  return ''
}
/**
 * 操作符替换
 * @param input
 * @param target
 * @param replace
 */
const replaceOperator = (input: string, target: string, replace: string): string => {
  const ast = parse(input, options)
  if (!ast) return ''
  traverse(ast, {
    BinaryExpression: (path) => {
      let { operator, left, right } = path.node
      if (operator === target) {
        // @ts-ignore
        path.replaceWith(t.binaryExpression(replace, left, right))
      }
      //@ts-ignore
      // path.node.operator = replace
    },
  })
  return generate(ast, {}, input).code
}
const autoInjected = (code: string | undefined | null): string => {
  if (!code) return ''
  const ast = parse(code, options)
  if (!ast) return ''
  traverse(ast, {
    //
    Program: {},
    // handle import
    ImportDeclaration: {},
    ImportDefaultSpecifier: {},
    ImportNamespaceSpecifier: {},
    // inject func
    FunctionDeclaration: {},
    ClassMethod: {},
    ArrowFunctionExpression: {},
    FunctionExpression: {},
  })
  return generate(ast, {}, code).code
}
export { es6to5, replaceOperator, autoInjected }
