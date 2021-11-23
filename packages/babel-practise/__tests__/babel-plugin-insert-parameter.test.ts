import { BabelPluginInsertParameters } from '../src'
import { transformFileSync } from '@babel/core'
import path from 'path'

describe('@babel/plugin-insert-parameter', () => {
  it('should file transformed right', () => {
    const result = transformFileSync(path.resolve(__dirname, './input/test.js'), {
      plugins: [BabelPluginInsertParameters],
      filename: 'test.js',
      parserOpts: {
        sourceType: 'unambiguous',

        plugins: ['jsx'],
      },
    })
    expect(result?.code).toMatchSnapshot()
  })
})
