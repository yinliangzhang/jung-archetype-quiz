# 荣格12原型人格测试

一个移动端优先的 H5 网页应用。用户打开链接后完成 24 道题，自动生成荣格 12 原型人格分析结果。

## 功能

- 首页：标题、副标题、开始测试按钮和说明文字
- 测试页：24 道题，每题 4 个选项
- 进度展示：第 X / 24 题
- 支持上一题、下一题
- 结果页：主人格、副人格、隐藏人格及得分
- 结果卡扣：用户填写昵称和手机号后查看完整报告
- 线索收集：部署到 Netlify 后，可在 Netlify Forms 后台查看昵称、手机号、访问IP和人格结果
- 12 种人格完整分析文案
- 分享按钮：复制可打开的结果链接，适合粘贴到微信发送
- 无需登录、无需后台、无需数据库
- 测试结果保存在用户当前浏览器本地
- 分享链接只包含人格结果，不包含昵称或手机号

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS

## 本地运行

先安装 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

然后打开：

```text
http://localhost:3000
```

## 项目结构

```text
app/
  page.tsx          首页
  quiz/page.tsx     测试页
  result/page.tsx   结果页
lib/
  archetypes.ts     12 种人格结果文案
  questions.ts      24 道测试题
  scoring.ts        计分、排序和本地存储键
netlify/functions/
  submit-lead.mjs   提交线索并记录访问IP
public/
  __forms.html       Netlify Forms 静态识别文件
```

## 部署建议

如果 Vercel 注册不了，可以优先使用 Netlify。

Netlify 部署时一般选择：

```text
Build command: npm run build
Publish directory: .next
Node version: 20
```

项目里已经包含 `netlify.toml`，正常情况下 Netlify 会自动读取这些设置。

更详细的新手步骤见：

[DEPLOY.md](./DEPLOY.md)

## 后续可扩展方向

- 增加姓名、手机号、微信号表单
- 将结果提交到数据库
- 接入 CRM
- 增加后台查看客户测试结果
- 增加结果海报生成
