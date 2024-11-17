import fs from "fs";
import GSCLexer from "./lexer.js";

const lexer = new GSCLexer();
fs.readFile(process.argv[2], "utf-8", (err, data) => {
  if(err) throw err;
  console.log(data);
  const tokens = lexer.tokenize(data).tokens.map((token) => (
    `${token.tokenType.name}: ${token.image}`
  ));
  console.log(tokens);
});