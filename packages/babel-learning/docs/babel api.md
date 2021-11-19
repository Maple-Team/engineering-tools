## Babel API

### @babel/parser

> 对源码进行 parse，可以通过 plugins、sourceType 等来指定 parse 语法

`babel parser` 叫 `babylon`，是基于 `acorn` 实现的，扩展了很多语法

> 后面重写了，基本上于 `acorn` 无关了

```ts
function parse(input: string, options?: ParserOptions): File;
function parseExpression(input: string, options?: ParserOptions): Expression;
```

#### Options

详细的 `options` 可以查看[文档](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser%23options)。其实主要分为两类，

##### parse 的内容是什么：

- `plugins`： 指定`jsx`、`typescript`、`flow` 等插件来解析对应的语法
- `allowXxx`： 指定一些语法是否允许，比如函数外的 `await`、没声明的 `export`等
- `sourceType`： 指定是否支持解析模块语法，有 `module`、`script`、`unambiguous` 3 个取值，`module` 是解析 `es module` 语法，`script` 则不解析 `es module` 语法，当作脚本执行，`unambiguous` 则是根据内容是否有 `import` 和 `export` 来确定是否解析 `es module` 语法。

##### 以什么方式 parse

- `strictMode` 是否是严格模式
- `startLine` 从源码哪一行开始 `parse`
- `errorRecovery` 出错时是否记录错误并继续往下 `parse`
- `tokens parse` 的时候是否保留 `token` 信息
- `ranges` 是否在 `ast` 节点中添加 `ranges` 属性

### @babel/traverse

> 通过 visitor 函数对遍历到的 ast 进行处理，分为 enter 和 exit 两个阶段，具体操作 AST 使用 path 的 api，还可以通过 state 来在遍历过程中传递一些数据

```ts
function traverse(parent, opts);
```

#### 遍历过程

`visitor` 对象的 `value` 是对象或者函数：

如果 `value` 为函数，那么就相当于是 `enter` 时调用的函数。
如果 `value` 为对象，则可以明确指定 `enter` 或者 `exit` 时的处理函数。

```js
// 函数会接收两个参数 path 和 state
visitor: {
    Identifier (path, state) {},
    StringLiteral: {
        /**
        * 在遍历当前节点的子节点前调用
        * @params path
        * @params state
        */
        enter (path, state) {},
        /**
        * 遍历完当前节点的子节点后调用
        * @params path
        * @params state
        */
        exit (path, state) {}
    }
}
// 进入 FunctionDeclaration 节点时调用
traverse(ast, {
  FunctionDeclaration: {
      enter(path, state) {}
  }
})

// 默认是进入节点时调用，和上面等价
traverse(ast, {
  FunctionDeclaration(path, state) {}
})

// 进入 FunctionDeclaration 和 VariableDeclaration 节点时调用
traverse(ast, {
  'FunctionDeclaration|VariableDeclaration'(path, state) {}
})

// 通过别名指定离开各种 Declaration 节点时调用
traverse(ast, {
  Declaration: {
      exit(path, state) {}
  }
})
```

具体的别名有哪些在[babel-types 的类型定义](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-types%2Fsrc%2Fast-types%2Fgenerated%2Findex.ts%23L2489-L2535)可以查。

#### path

![](../../../assets/images/538aefbdff92426c98c7f1da1feeb246_tplv-k3u1fbpfcp-watermark.awebp)
`path` 是遍历过程中的路径，会保留上下文信息，有很多属性和方法，比如:

##### 获取当前节点以及它的关联节点

- `path.node` 指向当前 `AST` 节点
- `path.get`、`path.set` 获取和设置当前节点属性的 `path`
- `path.parent` 指向父级 `AST` 节点
- `path.getSibling`、`path.getNextSibling`、`path.getPrevSibling` 获取兄弟节点
- `path.find` 从当前节点向上查找节点

##### 获取作用域的信息

- `path.scope`获取当前节点的作用域信息

##### 判断 AST 类型

- `path.isXxx` 判断当前节点是不是 `xx` 类型
- `path.assertXxx` 判断当前节点是不是 `xx` 类型，不是则抛出异常

##### 对 AST 进行增删改

- `path.insertBefore`、`path.insertAfter`插入节点
- `path.replaceWith`、`path.replaceWithMultiple`、`replaceWithSourceString`替换节点
- `path.remove`删除节点

##### 跳过一些遍历

- `path.skip`跳过当前节点的子节点的遍历
- `path.stop`结束后续遍历

#### state

> TODO 应用

参数 `state` 则是遍历过程中在不同节点之间传递数据的机制，插件会通过 `state` 传递 `options` 和 `file` 信息，我们也可以通过 `state` 存储一些遍历过程中的共享数据。

### @babel/types

> 用于创建、判断 AST 节点，提供了 xxx、isXxx、assertXxx 的 api

```js
t.ifStatement(test, consequent, alternate); //创建
t.isIfStatement(node, opts); // 判断
t.assertIfStatement(node, opts); // 判断
t.isIdentifier(node, { name: "paths" }); // 精确判断
```

所有的 `AST` 的 `build`、`assert` 的 `api` 可以在 [babel types](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-types%23api)文档中查。

### @babel/template

> 用于批量创建节点

```js
const ast = template(code, [opts])(args);
const ast = template.ast(code, [opts]);
const ast = template.program(code, [opts]);
```

### @babel/generator

> 打印 `AST` 成目标代码字符串，支持 `comments`、`minified`、`sourceMaps` 等选项。

```ts
function (ast: Object, opts: Object, code: string): {code, map}
// opts: { sourceMap: true } 开启生成sourcemap
```

### @babel/code-frame

> 当有错误信息要打印的时候，需要打印错误位置的代码，则可以使用这个库

```ts
const result = codeFrameColumns(rawLines, location, {
  /* options */
});
```

### @babel/core

`@babel/core`包则是基于它们完成整个编译流程，从源码到目标代码，生成`sourcemap`。

```js
transformSync(code, options); // => { code, map, ast }
transformFileSync(filename, options); // => { code, map, ast }
transformFromAstSync(parsedAst, sourceCode, options); // => { code, map, ast }
// options = { plugins:[], presets:[] }
// 还提供了异步的版本
```
