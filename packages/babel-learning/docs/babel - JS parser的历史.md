# JS parser 的历史

## `SpiderMonkey` 和 `estree` 标准

- 当时 Mozilla 在 MDN 上公布了 `SpiderMonkey`（c++ 写的 js 引擎）的 parser api 和 AST 标准，所以当时最早的 `JS parser` ---- [esprima](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjquery%2Fesprima) 就是基于 SpiderMonkey 的 AST 标准来实现的，后来形成了 [estree 标准](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Festree%2Festree)。 当时很多的前端领域的工具都基于 `esprima`
- 到了 2015 年之后，es 标准一年一个版本，而 `esprima` 的更新速度跟不上，它跟不上也就导致了依赖它的一系列工具都跟不上，所以 `eslint` 就 fork 了一份 `esprima`，做了一些扩展，来自己实现新语法的 parse，这就是 `espree`，它依然是 `estree` 标准的。

## `acorn`

后面出现了 `acorn`，也是 `estree` 标准的实现，但是他的速度比 `esprima` 快，而且支持插件，可以通过插件扩展语法支持。正是速度快加上支持插件让很多工具都转而使用 `acorn`。

`eslint` 的 `parser` ---- `espree` 本来是 fork 自 `esprima`，但后来 `espree 2.0` 基于 `acorn` 重新实现了，也使用 `acorn` 的插件机制来扩展语法。

`babel parser(babylon)` 也是基于 `acorn`，并且对 AST 节点和属性都做了扩展，也提供了一些支持 `typescript`、`jsx`、`flow` 的插件（就是我们可以在 `@babel/parser` 的 `plugins` 里面指定的那些）。

![js parser 之间的关系](../../../assets/images/9f30072e7a774fbf85539daedb8813ad_tplv-k3u1fbpfcp-watermark.awebp)

当然也不是所有的 `js parser` 都是 `estree` 标准的，比如 `terser`、`typescript` 等都有自己的 AST 标准。

## `babel parser` 对 `estree` AST 的扩展

`babel` 基于 `acorn` 插件对 `estree` AST 做了如下扩展

- 把 `Literal` 替换成了 `StringLiteral`、`NumericLiteral`、 `BigIntLiteral`、 `BooleanLiteral`、 `NullLiteral`、 `RegExpLiteral`
- 把 `Property` 替换成了 `ObjectProperty` 和 `ObjectMethod`
- 把 `MethodDefinition` 替换成了 `ClassMethod`
- `Program` 和 `BlockStatement` 支持了 `directives` 属性，也就是 `'use strict'` 等指令的解析，对应的 `ast` 是 `Directive` 和 `DirectiveLiteral`
- `ChainExpression` 替换为了 `ObjectMemberExpression` 和 `OptionalCallExpression`
- `ImportExpression` 替换为了 `CallExpression` 并且 `callee` 属性设置为 `Import`

这些可以在 [`babel parser`的文档](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser%23output) 里看到。

## `acorn`插件

> 给 `javascript` 一个关键字 `guang`，可以作为 `statement` 单独使用

### 分词(词法分析)

## Reference

- [links](https://github.com/acornjs/acorn#plugin-developments)
