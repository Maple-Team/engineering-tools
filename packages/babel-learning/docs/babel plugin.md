# Babel Plugin Development

> WHAT
> HOW

## Introduction

Babel is a generic multi-purpose compiler for JavaScript. More than that it is a collection of modules that can be used for many different forms of **static analysis**.

> **Static analysis** is the process of analyzing code without executing it. (Analysis of code while executing it is known as dynamic analysis). The purpose of **static analysis** varies greatly. It can be used for **linting**, **compiling**, **code highlighting**, **code transformation**, **optimization**, **minification**, and much more.

## Basic

Babel is a **JavaScript compiler**, specifically a _source-to-source compiler_, often called a "**transpiler**". This means that you give Babel some JavaScript code, Babel modifies the code, and generates the new code back out.

babel plugin is a function

### ASTs

> Babel uses an AST modified from [ESTree](https://github.com/estree/estree), with the **core spec** located [here](https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md).
> Check out [AST Explorer](http://astexplorer.net/) to get a better sense of the AST nodes

#### 表现形式

tree structure or Javascript Object. each level has similar structure, also known as a **Node**

- Every Node has its type

### Stages of Babel

#### parse

The parse stage, takes code and outputs an AST. There are two phases of parsing in Babel: Lexical Analysis and Syntactic Analysis.

##### Lexical Analysis

Lexical Analysis will take a string of code and turn it into a stream of tokens.

##### Syntactic Analysis

**Syntactic Analysis** will take a stream of tokens and turn it into an AST representation. Using the information in the tokens, this phase will reformat them as an AST which represents the structure of the code in a way that makes it easier to work with.

#### transform

The transform stage takes an AST and **traverses** through it, _adding_, _updating_, and _removing nodes_ as it goes along. This is by far the **most complex part** of Babel or any compiler. This is _where plugins operate_ and so it will be the subject of most of this handbook. So we won't dive too deep right now.

#### generate

The code generation stage takes the final AST and turns it back into a string of code, also creating [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/).

Code generation is pretty simple: you traverse through the AST depth-first 深度优先策略, building a string that represents the transformed code.

### Traversal

When you want to transform an AST you have to [traverse the tree](https://en.wikipedia.org/wiki/Tree_traversal) recursively.

#### Vistors

When we talk about "going" to a node, we actually mean we are **visiting** them. The reason we use that term is because there is this concept of a [visitor](https://en.wikipedia.org/wiki/Visitor_pattern).

Visitors are a **pattern 访问者模式？** used in AST traversal across languages. Simply put they are an object with methods defined for accepting particular node types in a tree. That's a bit abstract so let's look at an example.

These calls are all on node **enter**. However there is also the possibility of calling a visitor method when on **exit**.

You can also use aliases as visitor nodes (as defined in [babel-types](https://github.com/babel/babel/tree/master/packages/babel-types/src/definitions)).
Example:

`Function` is an alias for `FunctionDeclaration`, `FunctionExpression`, `ArrowFunctionExpression`, `ObjectMethod` and `ClassMethod`.

#### paths

An AST generally has many Nodes, but how do Nodes relate to one another? We could have one giant mutable object that you manipulate and have full access to, or we can **simplify this with Paths**.

In a sense, paths are a **reactive** representation of a node's position in the tree and all sorts of information about the node. Whenever you call a method that modifies the tree, **this information is updated**. Babel manages all of this for you to make working with nodes easy and as stateless as possible.

> 新加的节点会被访问?

##### Paths in Visitors

When you have a visitor that has a `Identifier()` method, you're actually visiting the path instead of the node. This way you are mostly **working with the reactive representation of a node instead of the node itself**.

#### State

> ?如何使用

**State** is the enemy of AST transformation. State will bite you over and over again and your assumptions about state will almost always be proven wrong by some syntax that you didn't consider.

#### Scopes

> ?如何使用

Next let's introduce the concept of a [scope](<https://en.wikipedia.org/wiki/Scope_(computer_science)>). JavaScript has [lexical scoping](<https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping_vs._dynamic_scoping>), which is a tree structure where blocks create new scope.

##### Bindings

## API

### babel-parser

Started as a fork of Acorn, the Babel Parser is fast, simple to use, has plugin-based architecture for non-standard features (as well as future standards).

### babel-traverse

The Babel Traverse module maintains the overall tree state, and is responsible for replacing, removing, and adding nodes.

### babel-types

Babel Types is **a Lodash-esque utility library for AST nodes**. It contains methods for **building**, **validating**, and **converting AST nodes**. It's useful for cleaning up AST logic with well thought out utility methods.

<--TODO 很多内容-->

### babel-generator

Babel Generator is the code generator for Babel. It takes an AST and turns it into code with sourcemaps.

### babel-template

Babel Template is another tiny but incredibly useful module. It allows you to write strings of code with placeholders that you can use instead of manually building up a massive AST. In computer science, this capability is called quasiquotes.

## Writing your first Babel Plugin

## Reference

- [babel plugin-handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
