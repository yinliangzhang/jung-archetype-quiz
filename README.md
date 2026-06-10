# 荣格12人格原型测试

一个纯前端 H5 单页应用：落地页、24 题答题、计分结果页、分享链接、保存原型卡片图。

## 本地预览

不需要安装依赖，直接打开 `index.html` 即可。

如果想用本地服务预览：

```bash
python3 -m http.server 8787
```

然后打开：

```text
http://localhost:8787
```

## 部署到 Netlify

1. 在 GitHub 创建一个新仓库。
2. 把本目录里的文件上传到仓库根目录。
3. 打开 Netlify，选择 Add new site → Import an existing project。
4. 连接 GitHub 并选择这个仓库。
5. Netlify 会读取 `netlify.toml`，发布目录为仓库根目录 `.`，无需构建命令。
6. 点击 Deploy。

## 文件说明

- `index.html`：页面入口。
- `styles.css`：移动端优先的视觉样式。
- `app.js`：题库、12 原型文案、计分逻辑和交互。
- `netlify.toml`：Netlify 静态站点部署配置。

## 特性

- 纯前端，无登录、无后端、无数据库依赖。
- 不依赖 `localStorage` 或 `sessionStorage`。
- 支持 `?result=sage` 这类结果直达链接。
- 分享按钮优先调用系统分享，不支持时复制链接。
- 保存原型卡片图使用原生 Canvas 生成 PNG。

