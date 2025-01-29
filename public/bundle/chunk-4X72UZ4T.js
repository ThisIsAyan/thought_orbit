import {
  Extension
} from "./chunk-K747EL3R.js";

// node_modules/@tiptap/extension-font-family/dist/index.js
var FontFamily = Extension.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (element) => element.style.fontFamily,
            renderHTML: (attributes) => {
              if (!attributes.fontFamily) {
                return {};
              }
              return {
                style: `font-family: ${attributes.fontFamily}`
              };
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (fontFamily) => ({ chain }) => {
        return chain().setMark("textStyle", { fontFamily }).run();
      },
      unsetFontFamily: () => ({ chain }) => {
        return chain().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run();
      }
    };
  }
});

export {
  FontFamily
};
