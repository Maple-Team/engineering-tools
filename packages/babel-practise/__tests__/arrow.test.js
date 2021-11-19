"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('babel test cases', function () {
    describe('arrow fn transform to normal function', function () {
        it('should empty arrow fn can be transformd right', function () {
            var input = "\n      const fn = () => 2\n    ";
            var output = src_1.es6to5(input);
            expect(output).toEqual("\"use strict\";\n\nvar fn = function fn() {\n  return 2;\n};");
        });
        it('should empty arrow fn with params can be transformd right', function () {
            var input = "\n      const fn = (x, y) => x+y\n    ";
            var output = src_1.es6to5(input);
            expect(output).toEqual("\"use strict\";\n\nvar fn = function fn(x, y) {\n  return x + y;\n};");
        });
        it('should empty arrow fn with params and blockstatement can be transformd right', function () {
            var input = "\n      const fn = (x, y) => {return x+y}\n    ";
            var output = src_1.es6to5(input);
            expect(output).toEqual("\"use strict\";\n\nvar fn = function fn(x, y) {\n  return x + y;\n};");
        });
        it('should return `undefined` when empty input', function () {
            expect(src_1.es6to5('')).toEqual(undefined);
        });
        it('should return `undefined` when null input', function () {
            expect(src_1.es6to5(null)).toEqual(undefined);
        });
        it('should return `undefined` when undefined input', function () {
            expect(src_1.es6to5(undefined)).toEqual(undefined);
        });
    });
    it('const declaration should transform to var right', function () {
        var input = 'let a = 2;';
        expect(src_1.es6to5(input)).toEqual("\"use strict\";\n\nvar a = 2;");
    });
    describe('replace operator method test', function () {
        it('+ operator to *', function () {
            var input = 'let a = 2+3';
            expect(src_1.es6to5(src_1.replaceOperator(input, '+', '*'))).toEqual("\"use strict\";\n\nvar a = 2 * 3;");
        });
    });
    describe('auto inject function and import if the function not be imported', function () {
    });
});
