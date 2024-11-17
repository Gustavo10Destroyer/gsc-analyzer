import { Lexer } from "chevrotain";
import { allTokens } from "./tokens.js";

export default class GSCLexer extends Lexer {
  constructor() {
    super(allTokens);
  }
}