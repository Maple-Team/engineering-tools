import { parse } from '@babel/core'
import generate from '@babel/generator'
import traverse from '@babel/traverse'
import * as t from '@babel/types'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const data = [
  '__esModule',
  'addEventListener',
  '?event=',
  'call',
  'join',
  'lineNumber',
  'srcElement',
  'src',
  'previousSibling',
  'nodeName',
  'open',
  'target',
  'statusText',
  'XMLHttpRequest',
  'sendByFundebug',
  'stack',
  'host',
  'onpopstate',
  'location',
  'onhashchange',
  'apply',
  'silentConsole',
  'silent',
  'getAttribute',
  'apikey',
]
const ID: string = '_0x1038'

;(async () => {
  const code = readFileSync(resolve(__dirname, '../input/fundebug.2.5.0.min.js')).toString()
  const ast = parse(code, {
    filename: 'fundebug.2.5.0.js',
  })
  if (ast) {
    traverse(ast, {
      MemberExpression: (path) => {
        const property = path.node.property
        if (property.type === 'CallExpression') {
          if (property.callee.type === 'Identifier' && property.callee.name === ID) {
            const raw = property.arguments[0].extra?.rawValue
            // @ts-ignore
            const real = data[(raw -= 0)]
            // @ts-ignore
            path.node.property = t.stringLiteral(real)
          }
        }
      },
      ArrayExpression: (path) => {
        const elements = path.node.elements
        let _eles = elements.filter((item) => item?.type === 'CallExpression')
        if (_eles) {
          _eles.forEach((_ele) => {
            const index = elements.findIndex((item) => item === _ele)
            const _call = elements[index]
            if (_call && _call.type === 'CallExpression') {
              const name = ((_call as t.CallExpression).callee as t.Identifier).name
              let value = (_call.arguments[0] as t.StringLiteral)?.value

              if (name === ID) {
                //@ts-ignore
                const real = data[(value -= 0)]
                path.node.elements[index] = t.stringLiteral(real)
              }
            }
          })
        }
      },
      ObjectExpression: (path) => {
        const properties = path.node.properties
        const index = properties.findIndex(
          (p) => (((p as t.Property).value as t.CallExpression).callee as t.Identifier)?.name === ID
        )
        if (index !== -1) {
          const value = (((properties[index] as t.Property).value as t.CallExpression).arguments[0] as t.StringLiteral)
            .value
          //@ts-ignore
          const real = data[(value -= 0)]
          ;(path.node.properties[index] as t.Property).value = t.stringLiteral(real)
        }
      },
      BinaryExpression: (path) => {
        const rname = ((path.node.right as t.CallExpression).callee as t.Identifier)?.name
        if (rname === ID) {
          const value = ((path.node.right as t.CallExpression).arguments[0] as t.StringLiteral)?.value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.right = t.stringLiteral(real)
        }
        const lname = ((path.node.left as t.CallExpression).callee as t.Identifier)?.name
        if (lname === ID) {
          const value = ((path.node.left as t.CallExpression).arguments[0] as t.StringLiteral)?.value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.left = t.stringLiteral(real)
        }
      },
      ThrowStatement: (path) => {
        if ((path.node.argument as t.NewExpression).arguments) {
          const args = (path.node.argument as t.NewExpression).arguments[0] as t.CallExpression
          if ((args.callee as t.Identifier)?.name === ID) {
            const value = (args.arguments[0] as t.StringLiteral)?.value
            //@ts-ignore
            const real = data[(value -= 0)]
            ;(path.node.argument as t.NewExpression).arguments[0] = t.stringLiteral(real)
          }
        }
      },
      SwitchCase: (path) => {
        const name = ((path.node.test as t.CallExpression)?.callee as t.Identifier)?.name
        if (name === ID) {
          const value = ((path.node.test as t.CallExpression).arguments[0] as t.StringLiteral).value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.test = t.stringLiteral(real)
        }
      },
      SequenceExpression: (path) => {
        const index = path.node.expressions.findIndex((i) => i.type === 'CallExpression')
        const _ex = path.node.expressions[index]
        if (((_ex as t.CallExpression)?.callee as t.Identifier)?.name === ID) {
          const value = ((_ex as t.CallExpression).arguments[0] as t.StringLiteral).value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.expressions[index] = t.stringLiteral(real)
        }
      },
      CallExpression: (path) => {
        const index = path.node.arguments.findIndex((i) => i.type === 'CallExpression')
        const arg = path.node.arguments[index]
        if (((arg as t.CallExpression)?.callee as t.Identifier)?.name === ID) {
          const value = ((arg as t.CallExpression).arguments[0] as t.StringLiteral).value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.arguments[index] = t.stringLiteral(real)
        }
      },
      AssignmentExpression: (path) => {
        const right = path.node.right
        if (((right as t.CallExpression).callee as t.Identifier)?.name === ID) {
          const value = ((right as t.CallExpression).arguments[0] as t.StringLiteral).value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.right = t.stringLiteral(real)
        }
      },
      LogicalExpression: (path) => {
        const right = path.node.right
        if (((right as t.CallExpression)?.callee as t.Identifier)?.name === ID) {
          const value = ((right as t.CallExpression).arguments[0] as t.StringLiteral).value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.right = t.stringLiteral(real)
        }
      },
      ConditionalExpression: (path) => {
        const consequent = path.node.consequent as t.CallExpression
        if ((consequent?.callee as t.Identifier)?.name === ID) {
          const value = (consequent.arguments[0] as t.StringLiteral).value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.consequent = t.stringLiteral(real)
        }
        const alternate = path.node.alternate as t.CallExpression
        if ((alternate?.callee as t.Identifier)?.name === ID) {
          const value = (alternate.arguments[0] as t.StringLiteral).value
          //@ts-ignore
          const real = data[(value -= 0)]
          path.node.alternate = t.stringLiteral(real)
        }
      },
    })
    const output = generate(ast, {}, code)
    writeFileSync(resolve(__dirname, '../output/fundebug.2.5.0.js'), output.code)
  }
})()
