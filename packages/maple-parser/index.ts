import type {
  ParserInterface,
  MapleComment,
  MapleElement,
  MapleNode,
  MapleText,
} from "./type";
import assert from "assert";
import fs from "fs";

function* generator(str: string) {
  for (const iterator of str.split("")) {
    yield iterator;
  }
}
//@https://cloud.tencent.com/developer/article/1602920
/**
 * html字符串解析类
 * 解析思路：利用游标不停的向后移动来遍历每一个字符
 */
class Parser implements ParserInterface {
  source: string[];
  pos: number = 0;
  constructor(sour: string) {
    this.source = sour.split("");
  }

  nextChar(): string {
    try {
      console.log(this.source[this.pos + 1], this.pos, this.source.length);
      return this.source[this.pos + 1];
    } catch (error) {
      // NOTE: 数组越界
      throw error;
    }
  }
  consumeChar(): string {
    const str = this.source[this.pos];
    this.pos++;
    return str;
  }
  startWith(str: string): boolean {
    return this.source[this.pos].startsWith(str);
  }
  consumeWhile(cb: (str: string) => boolean): string {
    let result: string[] = [];
    while (!this.eof() && cb(this.nextChar())) {
      result.push(this.consumeChar());
    }
    return result.join("");
  }
  consumeWhitespace(): string {
    return this.consumeWhile((str: string) => str !== "");
  }
  parseTagOrAttributeName(): string {
    return this.consumeWhile((c: string) => /[a-zA-Z0-9]/.test(c));
  }
  parseNode(): MapleNode {
    if (this.nextChar() === "<") {
      return this.getElement();
    } else {
      return this.getText();
    }
  }
  getText(): MapleText {
    return new TextNode(this.consumeWhile((c) => c !== "<"));
  }
  getElement(): MapleElement {
    assert(this.consumeChar(), "<");
    const tagName = this.parseTagOrAttributeName();
    const attrs = this.parseAttrbutes();
    assert(this.consumeChar() === ">");
    const children = this.parseNodes();

    assert(this.consumeChar() === "<");
    assert(this.consumeChar() === "/");
    assert(this.parseTagOrAttributeName() === tagName);
    assert(this.consumeChar() === ">");

    return new ElementNode(tagName, attrs, children);
  }
  parseAttr(): Record<string, string> {
    const attrName = this.parseTagOrAttributeName();
    assert(this.consumeChar() === "=");
    const value = this.parseAttrValue();
    return { [attrName]: value };
  }
  parseAttrValue(): string {
    const openQuote = this.consumeChar();
    assert(openQuote === '"' || openQuote === "'");
    const value = this.consumeWhile((c) => c !== openQuote);
    assert(this.nextChar() === openQuote);
    return value;
  }
  parseAttrbutes(): Record<string, string>[] {
    let attributes: Record<string, string>[] = [];
    do {
      this.consumeWhitespace();
      const attrbute = this.parseAttr();
      attributes.push(attrbute);
    } while (this.nextChar() === ">");
    return attributes;
  }
  /**
   *
   * @returns
   */
  parseNodes(): MapleNode[] {
    const nodes: MapleNode[] = [];
    do {
      this.consumeWhitespace();
      nodes.push(this.parseNode());
    } while (
      !this.eof()
      // || this.startWith("</")
    );
    return nodes;
  }

  static parse(souce: string): MapleNode {
    const parser = new Parser(souce);

    const nodes = parser.parseNodes();
    if (nodes.length === 1) {
      return nodes[0];
    } else {
      return new ElementNode("html", [], nodes);
    }
  }
  eof(): boolean {
    return this.pos >= this.source.length;
  }
}
class TextNode implements MapleText {
  content: string;
  constructor(content: string) {
    this.content = content;
  }
}
//@ts-ignore
class CommentNode implements MapleComment {}
class ElementNode implements MapleElement {
  tagName: string;
  attributes: Record<string, string>[];
  children: MapleNode[];

  constructor(
    tagName: string,
    attributes: Record<string, string>[],
    children: MapleNode[]
  ) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = children;
  }
}
const content = fs.readFileSync("./example/text.html").toString();
const result = Parser.parse(content);
console.log(JSON.stringify(result));
