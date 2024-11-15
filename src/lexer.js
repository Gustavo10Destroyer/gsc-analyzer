import { Lexer } from "chevrotain";
import { allTokens } from "./tokens.js";

export default class LogicLexer extends Lexer {
  constructor() {
    super(allTokens);
  }
}