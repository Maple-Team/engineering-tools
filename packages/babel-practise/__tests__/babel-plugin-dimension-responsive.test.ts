import { BabelPluginDimensionResponsive } from '../src'
import type { PluginOptions } from '../src/plugins/babel-plugin-dimension-responsive'
import { transformFileSync } from '@babel/core'
import path from 'path'

describe('@babel/plugin-insert-parameter', () => {
  it('should file transformed right', () => {
    const options: PluginOptions = {
      filename: 'style.ts',
      minValue: 10,
      excludes: ['paddingTop'],
      transformfn: (value) => value + 10,
    }
    const result = transformFileSync(path.resolve(__dirname, './input/style.ts'), {
      plugins: [[BabelPluginDimensionResponsive, options]],
      parserOpts: {
        sourceType: 'unambiguous',
      },
    })
    expect(result?.code).toMatchSnapshot()
  })
})
