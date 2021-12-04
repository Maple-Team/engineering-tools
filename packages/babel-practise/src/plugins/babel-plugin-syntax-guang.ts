import { Parser, TokenType } from 'acorn'
// @babel/plugin-syntax-guang
const wordsRegexp = (words: string): RegExp => {
  return new RegExp(`^(?:${words.replace(/ /g, '|')})$`) // 非捕捉
}
const guangKeyword = function (ParserClass: typeof Parser) {
  return class extends ParserClass {
    //   static parse(this: typeof Parser, program: string) {
    //     let newKeyWords = `
    // break case catch try continue debugger default do else finally for function if return
    // switch throw var while with null true false instanceof typeof void delete new in
    // this const class extends export import super`
    //     newKeyWords += 'guang'
    //     this.keyword = new RegExp(`^(?:${newKeyWords.replace(/ /g, '|')})$`) // 非捕捉
    //     return super.parse(program)
    //   }
    rendToken(code){
      console
    }
  }
}
