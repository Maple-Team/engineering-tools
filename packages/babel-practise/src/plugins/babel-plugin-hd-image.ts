/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PluginObj, template } from '@babel/core'
import { accessSync, constants } from 'fs'

/**
 * 插件选项
 */
export interface PluginOptions {
  /**
   * alias @ 对应的实际value
   * 相对位置
   * TODO get alias value from webpack resolve alias?
   */
  alias: string
}
/**
 * 自动导入其他高清图(如果图片存在的话)
 */
export default (): PluginObj => {
  return {
    name: 'babel-plugin-hd-image',
    visitor: {
      ImportDeclaration(path, state) {
        //@ts-ignore
        if (path.node.isNew) {
          return
        }
        const source = path.node.source
        const identifier = path.node.specifiers.find((specifier) => specifier.type === 'ImportDefaultSpecifier')?.local
          .name
        let sourcePath: string = source.value
        if (source.value.endsWith('png')) {
          if (source.value.startsWith('@')) {
            const options = state.opts as PluginOptions
            sourcePath = source.value.replace('@', options.alias)
          }
          try {
            accessSync(sourcePath.replace('.png', '@2x.png'), constants.R_OK)
            const node2x = template.statement(
              `import ${identifier}2x from "${source.value.replace('.png', '@2x.png')}"`
            )()
            //@ts-ignore
            node2x.isNew = true // 跳过新节点处理的标记
            path.insertAfter(node2x)
          } catch (error) {
            console.error(error)
            path.skip() //  文件不存在不处理
          }
          try {
            accessSync(sourcePath.replace('.png', '@3x.png'), constants.R_OK)
            const node3x = template.statement(
              `import ${identifier}3x from "${source.value.replace('.png', '@3x.png')}"`
            )()
            //@ts-ignore
            node3x.isNew = true // 跳过新节点处理的标记
            path.insertAfter(node3x)
          } catch (error) {
            path.skip() //  文件不存在不处理
          }
        } else {
          path.skip()
        }
      },
    },
  }
}

// https://babeljs.io/docs/en/babel-helper-module-imports
// https://github.com/QuarkGluonPlasma/babel-plugin-exercize/blob/master/exercize-auto-track/src/plugin/auto-track-plugin.js
// https://github.com/PavelDymkov/babel-plugin-auto-import
// https://www.npmjs.com/package/dynamic-alias-resolve-plugin
// TODO: 1、重复导入问题
// https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/srcset
