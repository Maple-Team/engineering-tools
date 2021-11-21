import { parse } from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";
import template from "@babel/template";
import { arrayExpression } from "@babel/types";

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
const targetCalleeName = ["log", "info", "error", "debug"].map(
  (item) => `console.${item}`
);

// requrement 2 同一行打印会影响原本的参数的展示, 因此改为在`console.xx`节点之前打印
const ast = parse(sourceCode, {
  plugins: ["jsx"],
  sourceType: "unambiguous",
});
traverse(ast, {
  CallExpression: (path) => {
    // @ts-ignore
    if (path.node.isNew) {
      //
      return;
    }
    if (targetCalleeName.includes(generate(path.node.callee).code)) {
      const loc = path.node.loc;
      const newNode = template.expression(
        `console.log("filename: (${loc?.start.line}, ${loc?.start.column})")`
      )();
      //@ts-ignore
      newNode.isNew = true; // 跳过新节点处理的标记
      if (path.findParent((p) => p.isJSXElement())) {
        path.replaceWith(arrayExpression([newNode, path.node]));
        path.skip(); // 跳过子节点处理
      } else {
        path.insertBefore(newNode);
      }
    }
  },
});
const { code } = generate(ast);
