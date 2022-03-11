import type { ParserInterface, Dom } from "./type";

//@https://cloud.tencent.com/developer/article/1602920
class Parser implements ParserInterface {
  source: string;
  pos: number;
  constructor(source: string) {
    this.source = source;
  }
  nextChar(): string {
    throw new Error("Method not implemented.");
  }
  startWith(str: string): boolean {
    throw new Error("Method not implemented.");
  }
  consumeWhile(cb: (str: string) => boolean): string {
    throw new Error("Method not implemented.");
  }
  consumeWhitespace(): boolean {
    throw new Error("Method not implemented.");
  }
  parseTagOrAttributeName(): string {
    throw new Error("Method not implemented.");
  }
  getNode(): Node {
    throw new Error("Method not implemented.");
  }
  getText(): Text {
    throw new Error("Method not implemented.");
  }
  getElement(): Element {
    throw new Error("Method not implemented.");
  }
  parseAttr(): Record<string, string> {
    throw new Error("Method not implemented.");
  }
  parseAttrValue(): string {
    throw new Error("Method not implemented.");
  }
  parseAttrbutes(): Record<string, string> {
    throw new Error("Method not implemented.");
  }
  parseNodes(): Node[] {
    throw new Error("Method not implemented.");
  }
  parse(souce: string): Node {
    throw new Error("Method not implemented.");
  }
  eof(): boolean {
    throw new Error("Method not implemented.");
  }
  consume(): string {
    throw new Error("Method not implemented.");
  }
}
class TextNode implements Dom.Text {
  nodeType: Dom.Text;
  children: Dom.Node[];
  toJSON(): string {
    return JSON.stringify(this);
  }
  constructor(){
    
  }
}
class CommentNode implements Dom.Comment {
  nodeType: Dom.Comment;
  children: Dom.Node[];
  toJSON(): string {
    return JSON.stringify(this);
  }
}
class ElementNode implements Dom.Element {
  tagName: string;
  attributes: Dom.AttributesMap;
  nodeType: Dom.Element;
  children: Dom.Node[];
  toJSON(): string {
    return JSON.stringify(this);
  }
}
