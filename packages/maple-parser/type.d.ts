interface MapleNode {
  children?: MapleNode[];
}
type NodeType = MapleText | MapleElement | MapleComment;

interface MapleElement extends MapleNode {
  tagName: string;
  attributes: AttributesMap;
  // new (tag: string, data: AttributesMap, children: Node[]): Element;
}
interface MapleText extends MapleNode {
  content: string;
  // new (content: string): Text;
}
interface MapleComment extends MapleNode {
  content: string;
  // new (content: string): Comment;
}

export interface ParserInterface {
  source: string[];
  pos: number;
  eof(): boolean;
  /**
   * 处理字符
   */
  consumeChar(): string;
  /**
   * 读取下一个char
   * @returns
   * @throws
   */
  nextChar(): string;
  startWith(str: string): boolean;
  consumeWhile(cb: (str: string) => boolean): string;
  consumeWhitespace(): string;
  parseTagOrAttributeName(): string;

  getText(): MapleText;
  getElement(): MapleElement;
  parseAttr(): Record<string, string>;
  parseAttrValue(): string;
  parseAttrbutes(): Record<string, string>[];
  parseNodes(): MapleNode[];
  parseNode(): MapleNode;
}
declare var ParserInterface: {
  new (source: string): ParserInterface;
};
