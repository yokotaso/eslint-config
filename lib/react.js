module.exports = {
  plugins: ["react"],
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // =======
    // Error
    // =======
    // This rules is in ESLint core
    "jsx-quotes": "error",

    // react/display-name
    "react/no-access-state-in-setstate": "error",
    // react/no-children-prop
    // react/no-danger-with-children
    // react/no-deprecated
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    // react/no-direct-mutation-state
    // react/no-find-dom-node
    // react/no-is-mounted
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-redundant-should-component-update": "error",
    // react/no-render-return-value
    "react/no-typos": "error",
    // react/no-string-refs
    "react/no-this-in-sfc": "error",
    // react/no-unescaped-entities
    // react/no-unknown-property
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true }
    ],
    // react/prop-types too strict?
    // react/react-in-jsx-scope
    // react/require-render-return
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    "react/jsx-filename-extension": "error",
    // react/jsx-key
    // react/jsx-no-duplicate-props
    // react/jsx-no-target-blank
    // react/jsx-no-undef
    // react/jsx-uses-react
    // react/jsx-uses-vars

    // =======
    // Warn
    // =======
    "react/no-unused-state": "warn",
    "react/self-closing-comp": "warn",
    "react/sort-comp": [
      "warn",
      {
        order: [
          "type-annotations",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],

    "react/jsx-boolean-value": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-equals-spacing": "warn",
    "react/jsx-first-prop-new-line": "warn",
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-max-props-per-line": ["warn", { when: "multiline" }],
    "react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" }
    ],
    "react/jsx-pascal-case": ["warn", { allowAllCaps: true }],
    "react/jsx-tag-spacing": [
      "warn",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never"
      }
    ],
    "react/jsx-wrap-multilines": "warn"

    // =======
    // None
    // =======
    // react/boolean-prop-naming
    // react/button-has-type
    // react/default-props-match-prop-types
    // react/destructuring-assignment
    // react/forbid-component-props
    // react/forbid-dom-props
    // react/forbid-elements
    // react/forbid-prop-types
    // react/forbid-foreign-prop-types
    // react/no-array-index-key
    // react/no-danger
    // react/no-set-state
    // react/no-unused-prop-types doesn't track destructuring and assignment props so we are disable this.
    // react/no-unused-prop-types
    // react/require-default-props
    // react/require-optimization
    // react/sort-prop-type

    // react/jsx-child-element-spacing
    // react/jsx-handler-names
    // react/jsx-max-depth
    // react/jsx-no-comment-textnodes
    // react/jsx-no-literals
    // react/jsx-one-expression-per-line
    // react/jsx-sort-default-props
    // react/jsx-sort-props
    // react/jsx-space-before-closing deprecated
  }
};
