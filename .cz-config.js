module.exports = {
  types: [
    { value: 'feature', name: 'feature:  增加新功能' },
    { value: 'wip', name: 'wip:      开发中' },
    { value: 'types', name: 'types:    类型定义文件更改' },
    { value: 'bug', name: 'bug:      测试反馈bug列表中的bug号' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    { value: 'perf', name: 'perf:     优化/性能提升' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'ui', name: 'ui:       更新UI' },
    { value: 'docs', name: 'docs:     文档变更/注释' },
    { value: 'merge', name: 'revert:   合并分支' },
    { value: 'revert', name: 'revert:   撤销修改' },
    { value: 'chore', name: 'chore:    依赖更新/脚手架配置修改等' },
    { value: 'workflow', name: 'workflow: 工作流改进' },
    { value: 'build', name: 'build:    打包' },
    { value: 'release', name: 'release:  发布' },
    { value: 'deploy', name: 'deploy:   部署' },
    { value: 'ci', name: 'ci:       持续集成' },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(跳过即可):',
    footer: '请输入要关闭的issue(跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72,
};
