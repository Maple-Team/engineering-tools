import { parse } from '@babel/core'
import generate from '@babel/generator'
import traverse from '@babel/traverse'
import * as t from '@babel/types'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const data = [
  'initConfig',
  'getCurrentScript',
  'extractNodeName',
  'enumerable',
  'MAX_SEQUENCE_FULL_SIZE_BY_LENGTH',
  'MAX_TOTAL_FRAGMENT_LENGTH',
  'stop',
  'actions',
  'querySelectorAll',
  'inputInterValIds',
  'vedio',
  'calculateTotalLength',
  'MAX_TOTAL_LENGTH',
  'frames',
  'sequence',
  'prototype',
  'nodeId',
  'isCaseInsensitive',
  'toLowerCase',
  'attributeOldValues',
  'anyCharacterDataChanged',
  'getOldParent',
  'getIsReachable',
  'oldParentNode',
  'has',
  'getChanged',
  'length',
  'ENTERED',
  'push',
  'removed',
  'get',
  'ELEMENT_NODE',
  'mutations',
  'processChildlistChanges',
  'reparented',
  'characterData',
  'reordered',
  'replace',
  'attrValue',
  'class',
  'wasMatching',
  'qualifiers',
  'attrName',
  'match',
  'mozMatchesSelector',
  'split',
  'queries',
  'map',
  'characterDataOldValue',
  'observeOwnChanges',
  'parseElementFilter',
  'optionKeys',
  'funRemoved',
  'isSmallContent',
  'funContent',
  'default',
  'textContent',
  'parentNode',
  'show',
  'funLocalSelector',
  'previousSibling',
  'funId',
  'getInputType',
  'input',
  'getInput',
  'getVedio',
  'listeners',
  'scroll',
  'getAttribute',
  'innerWidth',
  'mousemoveSamplingFrequence',
  'type',
  'previousElementSibling',
  'slice',
  "this hasn't been initialised - super() hasn't been called",
  'target',
  ' listeners added. Use emitter.setMaxListeners() to increase limit',
  'warn',
  'defaultMaxListeners',
  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ',
  'error',
  'removeListener',
  'value',
  'setFrames',
  'getTime',
  'scrollX',
  'rootOpts',
  'selfSelector',
  'send',
  'charCodeAt',
  'decompress',
  'charAt',
  'pow',
  'val',
]
const ID: string = '_0x3324'
const version = '0.7.1'
;(async () => {
  const code = readFileSync(resolve(__dirname, `../input/fundebug.revideo.${version}.min.js`)).toString()
  const ast = parse(code, {
    filename: `fundebug.revideo.${version}.js`,
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
        let index = elements.findIndex((item) => item?.type === 'CallExpression')
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
    })
    const output = generate(
      ast,
      {
        /* options */
      },
      code
    )
    writeFileSync(resolve(__dirname, `../output/fundebug.revideo.${version}.js`), output.code)
  }
})()
