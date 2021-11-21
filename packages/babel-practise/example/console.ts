import insertParametersPlugin from '../src/babel-plugin-insert-parameters'
import { transformFile } from '@babel/core'
import path from 'path'
import fs from 'fs'

transformFile(
  path.resolve(__dirname, 'test.js'),
  {
    plugins: [insertParametersPlugin],
    filename: 'test.js',
    parserOpts: {
      sourceType: 'unambiguous',
      plugins: ['jsx'],
    },
  },
  (err, result: babel.BabelFileResult | null) => {
    if (err) {
      throw err
    } else {
      const { code } = result!
      fs.writeFile(path.resolve(__dirname, 'test.transform.js'), code || '', (err) => {
        if (err) {
          throw err
        }
      })
    }
  }
)
