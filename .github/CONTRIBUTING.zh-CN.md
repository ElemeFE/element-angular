## Element UI 贡献指南

Hi! 首先感谢你使用 Element Angular, 它源自于 [Element UI](https://github.com/ElemeFE/element)。


### Issue 规范

- issue 仅用于提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。如果你在使用时产生了疑问，请到 Slack 里咨询。

- 在提交 issue 之前，请搜索相关内容是否已被提出。



### Pull Request 规范

- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以`[组件名]: 描述信息` 的形式填写，例如 `Button: fix xxx bug`。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 如果是修复 bug，请在 PR 中给出描述信息。

- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并。



### 开发

```bash

# fork && git clone
...
# dev
npm i && npm dev

# add example
npm run ex

```


### 代码规范
遵循 TSLint
