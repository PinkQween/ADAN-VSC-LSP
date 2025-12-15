import { CompletionItem, CompletionItemKind } from "vscode-languageserver/node";

export const snippet_constants: CompletionItem[] = [
    {
        label: "true",
        kind: CompletionItemKind.Constant,
        detail: "Boolean true value.",
        documentation: "```adan\nmy_bool::bool = true;\n```",
    },
    {
        label: "false",
        kind: CompletionItemKind.Constant,
        detail: "Boolean false value.",
        documentation: "```adan\nmy_bool::bool = false;\n```",
    }
];