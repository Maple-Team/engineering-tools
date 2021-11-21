import generate from '@babel/generator'
import template from '@babel/template'
import { arrayExpression } from '@babel/types'

const targetCalleeName = ['log', 'info', 'error', 'debug'].map((item) => `console.${item}`)

export default (): babel.PluginObj => {
  return {
    name: '@babel/plugin-insert-parameters',
    visitor: {
      CallExpression: (path, state) => {
        // @ts-ignore
        if (path.node.isNew) {
          return
        }
        if (targetCalleeName.includes(generate(path.node.callee).code)) {
          const loc = path.node.loc
          const stringArr = state.filename?.split('/') || []
          const filename = stringArr[stringArr?.length - 1]
          const directory = stringArr[stringArr?.length - 2]
          const newNode = template.expression(
            `console.log("${directory}/${filename}: Ln ${loc?.start.line}, Col ${loc?.start.column})")`
          )()
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
    },
  }
}
