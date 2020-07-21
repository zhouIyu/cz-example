module.exports = {
    types: [
        {
            value: '✨ feat',
            name: '✨ feat:      一个新的特性'
        },
        {
            value: '🐞 fix',
            name: '🐞 fix:       修复一个bug'
        },
        {
            value: '💪 WIP',
            name: '💪 WIP:       正在进行的工作'
        },
        {
            value: '📚 docs',
            name: '📚 docs:      仅更新了文档'
        },
        {
            value: '💅 style',
            name: '💅 style:     代码格式调整'
        },
        {
            value: '🛠  refactor',
            name: '🛠  refactor:  重构,既不修复错误也不添加功能的代码更改'
        },
        {
            value: '🏁  test',
            name: '🏁  test:      添加测试代码'
        },
        {
            value: '🗯  chore',
            name: '🗯  chore:     构建工具,脚手架等更改'
        },
        {
            value: '⏪  revert',
            name: '⏪  revert:    代码回退'
        }

    ],
    scopes: [],
    messages: {
        type: '选择一种你的提交类型',
        scope: '选择一个scope(可选)',
        subject: '短说明:\n',
        body: '长说明,使用"|"换行(可选):\n',
        breaking: '非兼容性说明(可选):\n',
        footer: '关联关闭的issue,例如:#1234(可选):\n',
        confirmCommit: '确定提交说明?'
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    subjectLimit: 100,
    skipQuestions: ['body', 'footer', 'breaking', 'scope']
};
