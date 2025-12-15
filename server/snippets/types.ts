import { CompletionItem, CompletionItemKind } from "vscode-languageserver/node";

export const snippet_types: CompletionItem[] = [
    {
        label: "int",
        kind: CompletionItemKind.Keyword,
        detail: "32 bit signed integer, ranging from -2,147,483,648 to 2,147,483,647.",
        documentation: "```adan\nmy_integer::int = 10;\n```",
    },
    {
        label: "float",
        kind: CompletionItemKind.Keyword,
        detail: "32 bit floating point number, ranging from approximately ±1.5e-45 to ±3.4e38.",
        documentation: "```adan\nmy_float::float = 3.14;\n```",
    },
    {
        label: "string",
        kind: CompletionItemKind.Keyword,
        detail: "A sequence of characters enclosed in double quotes.",
        documentation: "```adan\nmy_string::string = \"Hello, ADAN!\";\n```",
    },
    {
        label: "bool",
        kind: CompletionItemKind.Keyword,
        detail: "A boolean value representing true or false.",
        documentation: "```adan\nmy_bool::bool = true;\n```",
    },
    {
        label: "char",
        kind: CompletionItemKind.Keyword,
        detail: "A single character enclosed in single quotes.",
        documentation: "```adan\nmy_char::char = 'A';\n```",
    },
    {
        label: "void",
        kind: CompletionItemKind.Keyword,
        detail: "Indicates that a function does not return a value.",
        documentation: "```adan\nprogram::void my_function() {\n    // Function body\n}\n```",
    },
    {
        label: "null",
        kind: CompletionItemKind.Keyword,
        detail: "Represents a null value, indicating the absence of a value.",
        documentation: "```adan\nmy_null::null = null;\n```",
    }
];