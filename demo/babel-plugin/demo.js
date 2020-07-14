/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-07-14 13:53:59
 * @LastEditTime 2020-07-14 15:09:26
 */
var babel = require('@babel/core');
var generator = require('@babel/generator').default;
var t = babel.types;
const code = `import {uniq, extend, flatten, cloneDeep } from "lodash"`;
const visitor = {
    Identifier(path) {
        if (path.node.name == "uniq") {
            var newIdentifier = t.identifier('_uniq')  // 创建一个名叫_uniq的新identifier节点
            path.replaceWith(newIdentifier)  //把当前节点替换成新节点
        }
    },

    ImportDeclaration(path, _ref = { opts: {} }) {
        const specifiers = path.node.specifiers;
        const source = path.node.source;

        if (!t.isImportDefaultSpecifier(specifiers[0])) {
            var declarations = specifiers.map((specifier, i) => {         //遍历  uniq extend flatten cloneDeep
                return t.ImportDeclaration(                               //创建importImportDeclaration节点
                    [t.importDefaultSpecifier(specifier.local)],
                    t.StringLiteral(`${source.value}/${specifier.local.name}`)
                )
            })
            path.replaceWithMultiple(declarations)
        }
    }

}
const result = babel.transform(code, {
    plugins: [{
        visitor: visitor
    }]
});

// console.log(result);




const a = 1;
const x = t.VariableDeclaration(
    'const',
    [
        t.VariableDeclarator(
            t.Identifier('a'),
            t.NumericLiteral(1)
        )
    ]
)

console.log(generator(x));



var gen = babel.template(`var NAME = VALUE;`);
var ast = gen({
    NAME: t.Identifier('b'),
    VALUE: t.NumericLiteral(1)
});

console.log(generator(ast));