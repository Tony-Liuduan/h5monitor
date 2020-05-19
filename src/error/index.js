/**
 * @fileoverview 错误监控脚本入口文件
 * @author liuduan
 * @Date 2020-05-17 15:25:10
 * @LastEditTime 2020-05-19 15:51:37
 */

module.exports = function (babel) {
    function replaceFuncBody(path) {
        const astTemplate = babel.template(`{
            try {
                FUNC_BODY
            } catch(ERROR_VARIABLE) {
                window.JSTracker.catch(ERROR_VARIABLE);
                throw ERROR_VARIABLE
            }
        }`);

        const newAst = astTemplate({
            FUNC_BODY: path.node.body.body,
            ERROR_VARIABLE: path.scope.generateUidIdentifier('e'),
        });

        path.get('body').replaceWith(newAst);
    }

    return {
        visitor: {
            Function(path, params) { // params 是插件传入参数
                replaceFuncBody(path);
            },
        },
    };
}
