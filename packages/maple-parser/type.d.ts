export namespace Dom {
  interface Node {
    nodeType: NodeType;
    children: Node[];
    toJSON(): string;
  }
  type NodeType = Text | Element | Comment;
  type AttributesMap = Record<string, string>;

  interface Element extends Node {
    tagName: string;
    attributes: AttributesMap;
    new (tag: string, data: AttributesMap, children: Node[]): Element;
  }
  interface Text extends Node {
    new (content: string): Text;
  }
  interface Comment extends Node {
    new (content: string): Comment;
  }
}

export interface ParserInterface {
  source: string;
  pos: number;
  consume(): string;
  eof(): boolean;
  nextChar(): string;
  startWith(str: string): boolean;
  consumeWhile(cb: (str: string) => boolean): string;
  consumeWhitespace(): boolean;
  parseTagOrAttributeName(): string;
  getNode(): Node;
  getText(): Text;
  getElement(): Element;
  parseAttr(): Record<string, string>;
  parseAttrValue(): string;
  parseAttrbutes(): Record<string, string>;
  parseNodes(): Node[];
  parse(souce: string): Node;
}
declare var ParserInterface: {
  new (source: string): ParserInterface;
};
