import { parse } from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";
import { isIdentifier, isMemberExpression, numericLiteral } from "@babel/types";

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
`;
const ast = parse(sourceCode, {
  plugins: ["jsx"],
  sourceType: "unambiguous",
});
// requrement 1

if (ast) {
  traverse(ast, {
    CallExpression: (path, state) => {
      const callee = path.node.callee;
      const loc = path.node.loc;
      /**solution 1 */
      if (
        isMemberExpression(callee) &&
        isIdentifier(callee.object) &&
        callee.object.name === "console" &&
        isIdentifier(callee.property) &&
        ["log", "error", "debug", "info"].includes(callee.property.name)
      ) {
        path.node.arguments.push(
          numericLiteral(loc?.start.line || 0),
          numericLiteral(loc?.start.column || 0)
        );
      }
      /**solution 2 */
      // if (targetCalleeName.includes(generate(callee).code)) {
      //   path.node.arguments.push(numericLiteral(loc?.start.line || 0), numericLiteral(loc?.start.column || 0))
      // }
      /**solution 3 */
      // console.log(path.get('callee').toString()) console.log console.info console.debug console.error
    },
  });
  const { code } = generate(ast);
}
