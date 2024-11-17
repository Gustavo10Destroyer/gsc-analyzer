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

export const EqualEqual = createToken({
  name: "EqualEqual",
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

export const BXor = createToken({
  name: "BXor",
  pattern: /\^/,
  categories: BitwiseOperator
});

export const BNot = createToken({
  name: "BNot",
  pattern: /~/,
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

// Example of a path: maps\mp\zombies\_zm_perks
export const PathLiteral = createToken({
  name: "PathLiteral",
  pattern: /[a-zA-Z0-9_]+\\(?:[a-zA-Z0-9_]+\\)*[a-zA-Z0-9_]+/
})
// ----------------

// --- Arithmetic operators ---
export const ArithmeticOperator = createToken({
  name: "ArithmeticOperator",
  pattern: Lexer.NA
});

export const Add = createToken({
  name: "Add",
  pattern: /\+/,
  categories: ArithmeticOperator
});

export const Subtract = createToken({
  name: "Subtract",
  pattern: /\-/,
  categories: ArithmeticOperator
});

export const Multiply = createToken({
  name: "Multiply",
  pattern: /\*/,
  categories: ArithmeticOperator
});

export const Divide = createToken({
  name: "Divide",
  pattern: /\//,
  categories: ArithmeticOperator
});

export const Modulo = createToken({
  name: "Modulo",
  pattern: /%/,
  categories: ArithmeticOperator
});

export const Increment = createToken({
  name: "Increment",
  pattern: /\+\+/,
  categories: ArithmeticOperator
});

export const Decrement = createToken({
  name: "Decrement",
  pattern: /--/,
  categories: ArithmeticOperator
});
// ----------------------------

// --- Assignment operators ---
export const AssignmentOperator = createToken({
  name: "AssignmentOperator",
  pattern: Lexer.NA
});

export const Assign = createToken({
  name: "Assign",
  pattern: /=/,
  categories: AssignmentOperator
});

export const AddAssign = createToken({
  name: "AddAssign",
  pattern: /\+=/,
  categories: AssignmentOperator
});

export const SubtractAssign = createToken({
  name: "SubtractAssign",
  pattern: /-=/,
  categories: AssignmentOperator
});

export const MultiplyAssign = createToken({
  name: "MultiplyAssign",
  pattern: /\*=/,
  categories: AssignmentOperator
});

export const DivideAssign = createToken({
  name: "DivideAssign",
  pattern: /\*=/,
  categories: AssignmentOperator
});

export const ModuloAssign = createToken({
  name: "ModuloAssign",
  pattern: /%=/,
  categories: AssignmentOperator
});

export const BAndAssign = createToken({
  name: "BAndAssign",
  pattern: /&=/,
  categories: AssignmentOperator
});

export const BOrAssign = createToken({
  name: "BOrAssign",
  pattern: /\|=/,
  categories: AssignmentOperator
});

export const BXorAssign = createToken({
  name: "BXorAssign",
  pattern: /\^=/,
  categories: AssignmentOperator
});

export const BNotAssign = createToken({
  name: "BNotAssign",
  pattern: /~=/,
  categories: AssignmentOperator
});

export const LeftShiftAssign = createToken({
  name: "LeftShiftAssign",
  pattern: /<<=/,
  categories: AssignmentOperator
});

export const RightShiftAssign = createToken({
  name: "RightShiftAssign",
  pattern: />>=/,
  categories: AssignmentOperator
});
// ----------------------------

// --- Comments ---
export const Comment = createToken({
  name: "Comment",
  pattern: Lexer.NA
});

export const LineComment = createToken({
  name: "LineComment",
  pattern: /\/\/.*/,
  categories: Comment
});

export const BlockComment = createToken({
  name: "BlockComment",
  pattern: /\/\*[\s\S]*?\*\//,
  categories: Comment
});
// ---------------

// --- Directives ---
export const Directive = createToken({
  name: "Directive",
  pattern: Lexer.NA
});

export const Include = createToken({
  name: "Include",
  pattern: /#include/,
  categories: Directive
});

export const Define = createToken({
  name: "Define",
  pattern: /#define/,
  categories: Directive
});
// ------------------

export const Identifier = createToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/
});

export const allTokens = [
  WhiteSpace,
  Comment,
  LineComment,
  BlockComment,
  Directive,
  Include,
  Define,
  PathLiteral,
  EqualEqual,
  NotEqual,
  Not,
  And,
  Or,
  BAndAssign,
  BOrAssign,
  BXorAssign,
  BNotAssign,
  LeftShiftAssign,
  RightShiftAssign,
  LeftShift,
  RightShift,
  LessThanEq,
  GreaterThanEq,
  LessThan,
  GreaterThan,
  BAnd,
  BOr,
  BXor,
  BNot,
  AddAssign,
  Assign,
  Add,
  Increment,
  Decrement,
  Subtract,
  Multiply,
  Divide,
  Modulo,
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
  ArithmeticOperator,
  AssignmentOperator,
  Statement,
  Delimiter,
  NumberLiteral,
  StringLiteral,
  Identifier
];