# 新手部署说明

这份说明适合没有代码基础的人。

## 你需要准备什么

你需要两个账号：

1. GitHub：用来存放项目代码
2. Netlify：用来生成可以发给别人的网页链接

如果你没有 GitHub，可以先注册：

```text
https://github.com
```

如果 Vercel 注册不了，可以注册 Netlify：

```text
https://www.netlify.com
```

## 第一步：上传到 GitHub

推荐方式：

1. 打开 GitHub
2. 点击右上角 `+`
3. 选择 `New repository`
4. Repository name 填：

```text
jung-archetype-quiz
```

5. 选择 `Public` 或 `Private`
6. 点击 `Create repository`
7. 按 GitHub 页面提示上传项目文件

注意：不要上传这些文件夹：

```text
node_modules
.next
```

它们很大，也不需要上传。项目里的 `.gitignore` 已经设置好，如果你用 Git 工具上传，会自动忽略它们。

## 第二步：部署到 Netlify

1. 打开 Netlify
2. 登录账号
3. 点击 `Add new site`
4. 选择 `Import an existing project`
5. 选择 GitHub
6. 选择你刚上传的项目仓库
7. 确认部署设置：

```text
Build command: npm run build
Publish directory: .next
```

8. 点击 `Deploy`

部署完成后，你会得到一个类似这样的链接：

```text
https://your-site-name.netlify.app
```

这个链接就可以发给别人测试。

## 如果部署失败怎么办

先检查这几项：

1. 项目里有没有 `package.json`
2. Netlify 的 Build command 是否是 `npm run build`
3. Publish directory 是否是 `.next`
4. Node version 是否是 `20`
5. 有没有不小心上传 `node_modules`

如果看不懂错误信息，把 Netlify 的报错截图发给我，我可以继续帮你看。

## 重要提醒

当前版本没有后台数据库。别人完成测试后，结果只保存在他们自己的浏览器里。

页面里已经有“填写昵称和手机号后查看结果”的卡扣。本地预览时，这些信息会先保存在用户自己的浏览器里。

结果页的分享按钮会生成一个带结果数据的链接。别人打开这个链接可以看到分享者的人格结果；这个链接不包含昵称或手机号。

## 在哪里看用户昵称和手机号

部署到 Netlify 后，用户提交的昵称和手机号会进入 Netlify Forms：

1. 打开 Netlify
2. 进入你的站点
3. 找到 `Forms`
4. 打开 `quiz-leads`
5. 查看每一条提交记录

每条记录里会包含：

- 昵称
- 手机号
- 访问IP
- IP对应的大概国家、省市信息
- 主人格
- 副人格
- 隐藏人格
- 12种人格分数
- 提交时间

IP 和地区信息由 Netlify Function 在服务端读取，字段来自 Netlify Functions 的 `context.ip` 和 `context.geo`。

这个项目已经按 Netlify Next.js Runtime v5 的要求，把 Netlify Forms 的识别表单放在 `public/__forms.html`，提交目标也是 `/__forms.html`。

如果你想收集客户测试结果，需要后续增加：

- 数据库
- 提交接口
- 后台查看页面或 CRM 接入
