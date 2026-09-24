import type { XaliksConfigOptions } from "../config.js";
import type { Linter } from "eslint";

export const stylisticRules = (options: XaliksConfigOptions): Linter.RulesRecord => {
	return {
		"@stylistic/arrow-parens": "error",
		"@stylistic/arrow-spacing": "error",
		"@stylistic/block-spacing": "error",
		"@stylistic/brace-style": "error",
		"@stylistic/comma-dangle": ["error", "always-multiline"],
		"@stylistic/comma-spacing": "error",
		"@stylistic/comma-style": "error",
		"@stylistic/computed-property-spacing": "error",
		"@stylistic/curly-newline": ["error", { consistent: true }],
		"@stylistic/dot-location": ["error", "property"],
		"@stylistic/eol-last": ["error", "always"],
		"@stylistic/function-call-spacing": "error",
		"@stylistic/generator-star-spacing": "error",
		"@stylistic/implicit-arrow-linebreak": "error",
		"@stylistic/indent": ["error", "tab"],
		"@stylistic/indent-binary-ops": ["error", "tab"],
		// JSX пока игнорирую. потом сделаю
		"@stylistic/jsx-child-element-spacing": "off",
		"@stylistic/jsx-closing-bracket-location": "off",
		"@stylistic/jsx-closing-tag-location": "off",
		"@stylistic/jsx-curly-brace-presence": "off",
		"@stylistic/jsx-curly-newline": "off",
		"@stylistic/jsx-curly-spacing": "off",
		"@stylistic/jsx-equals-spacing": "off",
		"@stylistic/jsx-first-prop-new-line": "off",
		"@stylistic/jsx-function-call-newline": "off",
		"@stylistic/jsx-indent-props": "off",
		"@stylistic/jsx-max-props-per-line": "off",
		"@stylistic/jsx-newline": "off",
		"@stylistic/jsx-one-expression-per-line": "off",
		"@stylistic/jsx-pascal-case": "off",
		"@stylistic/exp-jsx-props-style": "off", // experimental
		"@stylistic/jsx-quotes": "off",
		"@stylistic/jsx-self-closing-comp": "off",
		"@stylistic/jsx-shorthand-boolean": "off",
		"@stylistic/jsx-shorthand-fragment": "off",
		"@stylistic/jsx-tag-spacing": "off",
		"@stylistic/jsx-wrap-multilines": "off",

		"@stylistic/key-spacing": "error",
		"@stylistic/keyword-spacing": "error",
		"@stylistic/line-comment-position": "off", // Без разницы где ставить комментарий
		"@stylistic/linebreak-style": ["error", "unix"],
		"@stylistic/lines-around-comment": "off", // Без разницы где ставить комментарий
		"@stylistic/lines-between-class-members": ["error", {
			enforce: [
				{ blankLine: "always", prev: "method", next: "method" },
				{ blankLine: "always", prev: "field", next: "method" },
				{ blankLine: "always", prev: "method", next: "field" },
			],
		}, { exceptAfterOverload: true }],
		"@stylistic/list-style": ["error", {
			empty: "never",
			overrides: {
				// Сбрасываем defaults
				"{}": "off",
				"[]": "off",
				"()": "off",
				"<>": "off",

				ArrayExpression: {}, // Создание массива                     a = [1, 2, 3] | function([1, 2, 3]),
				ArrayPattern: {}, // Извлечение из массива                   [a, b] = c | function([a, b]) => a + b,
				ArrowFunctionExpression: {}, // Параметры стрелоч. функции   (a, b) => a + b
				CallExpression: {}, // Вызов функции через ()                a(b, c)
				FunctionDeclaration: {}, // Создание именованной функции     function a(b, c)
				FunctionExpression: {}, // Создание анонимной функции        a = function(b, c)
				IfStatement: {}, // Условие в if                             if (a) 
				NewExpression: {}, // Создание через new                     new a(b, c)
				TSDeclareFunction: {}, // Оверлоад функции
				TSFunctionType: {}, // Тип стрелочной нотации                (a: B, c: D) => void
				TSTupleType: {}, // Тип кортежа. Массив фикс. длины          [a: B, c: D]
				TSTypeParameterDeclaration: {}, // Типов объявлений функций  type C<A, B>
				TSTypeParameterInstantiation: {}, // Типы параметров         a: Map<A, B>
				JSONArrayExpression: {}, //                                  "a": ["b", "c"]

				ExportNamedDeclaration: { singleLine: { spacing: "always" } }, // export { a, b, c }
				ImportDeclaration: { singleLine: { spacing: "always" } }, //      import { a, b, c }
				ImportAttributes: { singleLine: { spacing: "always" } }, //       import ... with { a, b, c }
				ObjectExpression: { singleLine: { spacing: "always" } }, //       a = { a, b, c }
				ObjectPattern: { singleLine: { spacing: "always" } }, //          { a, b, c } = d
				// [TODO]: ждем beta 7. multiline -> multiLine
				TSInterfaceBody: { singleLine: { spacing: "always", maxItems: 1 } }, // interface A { a } | interface A { a,\n b }
				// [TODO]: ждем beta 7. multiline -> multiLine
				TSEnumBody: { singleLine: { maxItems: 0 } }, //                   enum {\n a,\n b }
				TSTypeLiteral: { singleLine: { spacing: "always" } }, //          a: { b: B, c: D }
				JSONObjectExpression: { singleLine: { spacing: "always" } }, //   "a": { "b": "c" }
			},
		}],
		"@stylistic/max-len": ["error", {
			code: options.maxCodeLength,
			tabWidth: 1,
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
		}],
		"@stylistic/max-statements-per-line": ["error", { max: 1 }],
		"@stylistic/member-delimiter-style": ["error", {
			multiline: {
				delimiter: "semi",
				requireLast: true,
			},
			singleline: {
				delimiter: "semi",
				requireLast: false,
			},
		}],
		"@stylistic/multiline-comment-style": "off",
		"@stylistic/multiline-ternary": "off",
		"@stylistic/new-parens": "error",
		"@stylistic/newline-per-chained-call": "off",
		"@stylistic/no-confusing-arrow": "off",
		"@stylistic/no-extra-parens": ["error", "all", {
			returnAssign: false, // return (a = b)
			nestedBinaryExpressions: false, // (a || b) && c
			ternaryOperandBinaryExpressions: false, // (a && b) ? foo : bar;
			nestedConditionalExpressions: false, // (a ? b : c) ? d : e
			ignoredNodes: [
				"ArrowFunctionExpression[body.type=ConditionalExpression]", // x => (a ? b : c)
				"SpreadElement[argument.type=ConditionalExpression]", // ...(a ? [1, 2, 3] : []),
				"SpreadElement[argument.type=LogicalExpression]", // ...(isSummer && { watermelon: 30 }),
				"SpreadElement[argument.type=AwaitExpression]", // ...(await promiseArray)
			],
		}],
		"@stylistic/no-extra-semi": "error",
		"@stylistic/no-floating-decimal": "error",
		"@stylistic/no-mixed-operators": ["error", {
			groups: [["&&", "||", "?:"]],
			allowSamePrecedence: true,
		}],
		"@stylistic/no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"@stylistic/no-multi-spaces": "error", // Для некоторых проектов можно разрешать const a    = '' для красоты
		"@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
		"@stylistic/no-tabs": "off",
		"@stylistic/no-trailing-spaces": ["error", { ignoreComments: true }],
		"@stylistic/no-whitespace-before-property": "error",
		"@stylistic/nonblock-statement-body-position": "error",
		"@stylistic/one-var-declaration-per-line": "off",
		"@stylistic/operator-linebreak": ["error", "after", {
			overrides: {
				"?": "before",
				":": "before",
				"|": "before",
				"&": "before",
			},
		}],
		"@stylistic/padded-blocks": ["error", "never"],
		"@stylistic/padding-line-between-statements": "off", // Вообще шикарное правило, нужно долго настраивать, но мне лень
		"@stylistic/quote-props": ["error", "as-needed"],
		"@stylistic/quotes": ["error", "double"],
		"@stylistic/rest-spread-spacing": ["error", "never"],
		"@stylistic/semi": "error",
		"@stylistic/semi-spacing": "error",
		"@stylistic/semi-style": "error",
		"@stylistic/space-before-blocks": "error",
		"@stylistic/space-before-function-paren": ["error", {
			anonymous: "always", // function () {}
			named: "never", // function foo() {}
			asyncArrow: "always", // async () => {}
		}],
		"@stylistic/space-in-parens": ["error", "never"],
		"@stylistic/space-infix-ops": "error",
		"@stylistic/space-unary-ops": "error",
		"@stylistic/spaced-comment": "error",
		"@stylistic/switch-colon-spacing": "error",
		"@stylistic/template-curly-spacing": "error",
		"@stylistic/template-tag-spacing": ["error", "never"],
		"@stylistic/type-annotation-spacing": "error",
		"@stylistic/type-generic-spacing": ["error", { before: false, after: false }], // foo<T>()
		"@stylistic/type-named-tuple-spacing": "error",
		"@stylistic/wrap-iife": ["error", "inside"],
		"@stylistic/wrap-regex": "off",
		"@stylistic/yield-star-spacing": "error",
	};
};
