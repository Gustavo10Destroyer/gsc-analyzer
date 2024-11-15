import { Lexer, createToken } from "chevrotain";

export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: Lexer.SKIPPED
});

// --- Logic Operators ---
export const LogicOperator = createToken({
  name: "LogicOperator",
  pattern: Lexer.NA
});

export const LessThan = createToken({
  name: "LessThan",
  pattern: /</,
  categories: LogicOperator
});

export const LessThanEq = createToken({
  name: "LessThanEq",
  pattern: /<=/,
  categories: LogicOperator
});

export const GreaterThan = createToken({
  name: "GreaterThan",
  pattern: />/,
  categories: LogicOperator
});

export const GreaterThanEq = createToken({
  name: "GreaterThanEq",
  pattern: />=/,
  categories: LogicOperator
});

export const Not = createToken({
  name: "Not",
  pattern: /!/,
  categories: LogicOperator
});

export const Equal = createToken({
  name: "Equal",
  pattern: /==/,
  categories: LogicOperator
});

export const NotEqual = createToken({
  name: "NotEqual",
  pattern: /!=/,
  categories: LogicOperator
});

export const And = createToken({
  name: "And",
  pattern: /&&/,
  categories: LogicOperator
});

export const Or = createToken({
  name: "Or",
  pattern: /\|\|/,
  categories: LogicOperator
});
// -----------------------

// --- Bitwise operators ---
export const BitwiseOperator = createToken({
  name: "BitwiseOperator",
  pattern: Lexer.NA
});

export const LeftShift = createToken({
  name: "LeftShift",
  pattern: /<</,
  categories: BitwiseOperator
});

export const RightShift = createToken({
  name: "RightShift",
  pattern: />>/,
  categories: BitwiseOperator
});

export const BAnd = createToken({
  name: "BAnd",
  pattern: /&/,
  categories: BitwiseOperator
});

export const BOr = createToken({
  name: "BOr",
  pattern: /\|/,
  categories: BitwiseOperator
});
// -------------------------

// --- Statements ---
export const Statement = createToken({
  name: "Statement",
  pattern: Lexer.NA
});

export const IfStatement = createToken({
  name: "IfStatement",
  pattern: /if/,
  categories: Statement
});

export const ElseStatement = createToken({
  name: "ElseStatement",
  pattern: /else/,
  categories: Statement
});

export const SwitchStatement = createToken({
  name: "SwitchStatement",
  pattern: /switch/,
  categories: Statement
});

export const CaseStatement = createToken({
  name: "CaseStatement",
  pattern: /case/,
  categories: Statement
});

export const BreakStatement = createToken({
  name: "BreakStatement",
  pattern: /break/,
  categories: Statement
});

export const ReturnStatement = createToken({
  name: "ReturnStatement",
  pattern: /return/,
  categories: Statement
});

export const DoStatement = createToken({
  name: "DoStatement",
  pattern: /do/,
  categories: Statement
});

export const WhileStatement = createToken({
  name: "WhileStatement",
  pattern: /while/,
  categories: Statement
});

export const ThreadStatement = createToken({
  name: "ThreadStatement",
  pattern: /thread/,
  categories: Statement
});
// ------------------

// --- Delimiters ---
export const Delimiter = createToken({
  name: "Delimiter",
  pattern: Lexer.NA
});

export const LParen = createToken({
  name: "LParen",
  pattern: /\(/,
  categories: Delimiter
});

export const RParen = createToken({
  name: "RParen",
  pattern: /\)/,
  categories: Delimiter
});

export const LSquare = createToken({
  name: "LSquare",
  pattern: /\[/,
  categories: Delimiter
});

export const RSquare = createToken({
  name: "RSquare",
  pattern: /\]/,
  categories: Delimiter
});

export const LBrace = createToken({
  name: "LBrace",
  pattern: /{/,
  categories: Delimiter
});

export const RBrace = createToken({
  name: "RBrace",
  pattern: /}/,
  categories: Delimiter
});

export const Dot = createToken({
  name: "Dot",
  pattern: /\./,
  categories: Delimiter
});

export const Comma = createToken({
  name: "Comma",
  pattern: /,/,
  categories: Delimiter
});

export const Semicolon = createToken({
  name: "Semicolon",
  pattern: /;/,
  categories: Delimiter
});
// ------------------

// --- Literals ---
export const NumberLiteral = createToken({
  name: "NumberLiteral",
  pattern: Lexer.NA
});

export const Float = createToken({
  name: "Float",
  pattern: /\d+\.\d+/,
  categories: NumberLiteral
});

export const Integer = createToken({
  name: "Integer",
  pattern: /\d+/,
  categories: NumberLiteral
});

export const StringLiteral = createToken({
  name: "StringLiteral",
  pattern: /"[^"]*"/
});
// ----------------

export const allTokens = [
  WhiteSpace,
  LeftShift,
  RightShift,
  LessThanEq,
  GreaterThanEq,
  LessThan,
  GreaterThan,
  Equal,
  NotEqual,
  Not,
  And,
  Or,
  BAnd,
  BOr,
  IfStatement,
  ElseStatement,
  SwitchStatement,
  CaseStatement,
  BreakStatement,
  ReturnStatement,
  DoStatement,
  WhileStatement,
  ThreadStatement,
  LParen,
  RParen,
  LSquare,
  RSquare,
  LBrace,
  RBrace,
  Dot,
  Comma,
  Semicolon,
  Float,
  Integer,
  LogicOperator,
  BitwiseOperator,
  Statement,
  Delimiter,
  NumberLiteral,
  StringLiteral
];