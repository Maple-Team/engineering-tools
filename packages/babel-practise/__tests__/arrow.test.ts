import { es6to5, replaceOperator } from '../src'

describe('babel test cases', () => {
  describe('arrow fn transform to normal function', () => {
    it('should empty arrow fn can be transformd right', () => {
      const input = `
      const fn = () => 2
    `
      const output = es6to5(input)
      expect(output).toEqual(`"use strict";

var fn = function fn() {
  return 2;
};`)
    })
    it('should empty arrow fn with params can be transformd right', () => {
      const input = `
      const fn = (x, y) => x+y
    `
      const output = es6to5(input)
      expect(output).toEqual(`"use strict";

var fn = function fn(x, y) {
  return x + y;
};`)
    })
    it('should empty arrow fn with params and blockstatement can be transformd right', () => {
      const input = `
      const fn = (x, y) => {return x+y}
    `
      const output = es6to5(input)
      expect(output).toEqual(`"use strict";

var fn = function fn(x, y) {
  return x + y;
};`)
    })
    it('should return `undefined` when empty input', () => {
      expect(es6to5('')).toEqual(undefined)
    })
    it('should return `undefined` when null input', () => {
      expect(es6to5(null)).toEqual(undefined)
    })
    it('should return `undefined` when undefined input', () => {
      expect(es6to5(undefined)).toEqual(undefined)
    })
  })
  it('const declaration should transform to var right', () => {
    const input = 'let a = 2;'
    expect(es6to5(input)).toEqual(`"use strict";

var a = 2;`)
  })
  describe('replace operator method test', () => {
    it('+ operator to *', () => {
      const input = 'let a = 2+3'
      expect(es6to5(replaceOperator(input, '+', '*'))).toEqual(`"use strict";

var a = 2 * 3;`)
    })
  })
  describe('auto inject function and import if the function not be imported', () => {})
})
