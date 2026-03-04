const variable_syntax = [
  {
    name: "variable_declaration",
    pattern: /^(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(.+);?$/,
  },
  {
    name: "variable_assignment",
    pattern: /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(.+);?$/,
  },
];

const function_declaration_syntax = [
  {
    name: "function_declaration",
    pattern:
      /^function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*{([\s\S]*)}$/,
  },
  {
    name: "arrow_function",
    pattern:
      /^(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\(([^)]*)\)\s*=>\s*{([\s\S]*)};?$/,
  },
  {
    name: "method_declaration",
    pattern: /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*{([\s\S]*)}$/,
  },
];

const class_declaration_syntax = [
  {
    name: "class_declaration",
    pattern: /^class\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*{([\s\S]*)}$/,
  },
];

const import_syntax = [
  {
    name: "import_statement",
    pattern: /^import\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s+from\s+['"](.+)['"];?$/,
  },
  {
    name: "named_import_statement",
    pattern: /^import\s+{([^}]+)}\s+from\s+['"](.+)['"];?$/,
  },
  {
    name: "namespace_import_statement",
    pattern:
      /^import\s+\*\s+as\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s+from\s+['"](.+)['"];?$/,
  },
];

const export_syntax = [
  {
    name: "export_variable",
    pattern:
      /^export\s+(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(.+);?$/,
  },
  {
    name: "export_function",
    pattern:
      /^export\s+function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*{([\s\S]*)}$/,
  },
  {
    name: "export_class",
    pattern: /^export\s+class\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*{([\s\S]*)}$/,
  },
  {
    name: "export_named",
    pattern: /^export\s+{([^}]+)};?$/,
  },
];

export {
  variable_syntax,
  function_declaration_syntax,
  class_declaration_syntax,
  import_syntax,
  export_syntax,
};
