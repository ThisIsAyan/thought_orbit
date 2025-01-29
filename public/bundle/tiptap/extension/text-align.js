import {
  Extension
} from "../../chunk-K747EL3R.js";

// node_modules/@tiptap/extension-text-align/dist/index.js
var TextAlign = Extension.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (element) => {
              const alignment = element.style.textAlign;
              return this.options.alignments.includes(alignment) ? alignment : this.options.defaultAlignment;
            },
            renderHTML: (attributes) => {
              if (!attributes.textAlign) {
                return {};
              }
              return { style: `text-align: ${attributes.textAlign}` };
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (alignment) => ({ commands }) => {
        if (!this.options.alignments.includes(alignment)) {
          return false;
        }
        return this.options.types.map((type) => commands.updateAttributes(type, { textAlign: alignment })).every((response) => response);
      },
      unsetTextAlign: () => ({ commands }) => {
        return this.options.types.map((type) => commands.resetAttributes(type, "textAlign")).every((response) => response);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
});

// public/imports/tiptap/extension/text-align.js
var text_align_default = TextAlign;
export {
  text_align_default as default
};
