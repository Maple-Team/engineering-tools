import { parse } from '@babel/parser'
import generate from '@babel/generator'
import traverse from '@babel/traverse'
import template from '@babel/template'
import {
  Identifier,
  isArrayExpression,
  isExpression,
  isIdentifier,
  isMemberExpression,
  stringLiteral,
  numericLiteral,
  isExpressionStatement,
  callExpression,
  arrayExpression,
} from '@babel/types'

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{ console.error(4) }</div>
        }
    }
`
const targetCalleeName = ['log', 'info', 'error', 'debug'].map((item) => `console.${item}`)
{
  const ast = parse(sourceCode, {
    plugins: ['jsx'],
    sourceType: 'unambiguous',
  })
  // requrement 1

  if (ast) {
    traverse(ast, {
      CallExpression: (path, state) => {
        const callee = path.node.callee
        const loc = path.node.loc
        /**solution 1 */
        if (
          isMemberExpression(callee) &&
          isIdentifier(callee.object) &&
          callee.object.name === 'console' &&
          isIdentifier(callee.property) &&
          ['log', 'error', 'debug', 'info'].includes(callee.property.name)
        ) {
          path.node.arguments.push(numericLiteral(loc?.start.line || 0), numericLiteral(loc?.start.column || 0))
        }
        /**solution 2 */
        // if (targetCalleeName.includes(generate(callee).code)) {
        //   path.node.arguments.push(numericLiteral(loc?.start.line || 0), numericLiteral(loc?.start.column || 0))
        // }
        /**solution 3 */
        // console.log(path.get('callee').toString()) console.log console.info console.debug console.error
      },
    })
    const { code } = generate(ast)
    console.log(code)
  }
}

{
  // requrement 2 同一行打印会影响原本的参数的展示, 因此改为在`console.xx`节点之前打印
  const ast = parse(sourceCode, {
    plugins: ['jsx'],
    sourceType: 'unambiguous',
  })
  traverse(ast, {
    CallExpression: (path) => {
      // @ts-ignore
      if (path.node.isNew) {
        //
        return
      }
      if (targetCalleeName.includes(generate(path.node.callee).code)) {
        const loc = path.node.loc
        const newNode = template.expression(`console.log("filename: (${loc?.start.line}, ${loc?.start.column})")`)()
        //@ts-ignore
        newNode.isNew = true // 跳过新节点处理的标记
        if (path.findParent((p) => p.isJSXElement())) {
          path.replaceWith(arrayExpression([newNode, path.node]))
          path.skip() // 跳过子节点处理
        } else {
          path.insertBefore(newNode)
        }
      }
    },
  })
  const { code } = generate(ast)
  console.log(code)
}
