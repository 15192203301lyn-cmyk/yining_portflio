# Yining Portfolio

一个使用原生 HTML、CSS 和 JavaScript 构建的静态作品集网站，可直接部署到 GitHub Pages。

## 目录结构

```text
.
├── index.html                  # Home
├── aboutme/index.html          # About Me
├── projects/
│   ├── index.html              # Projects 列表
│   └── project-template.html   # 单个项目页面模板
├── artifacts/index.html        # Artifacts
└── assets/
    ├── css/site.css            # 全站唯一 CSS
    ├── js/site.js              # 全站共用脚本
    └── images/projects/        # 项目图片（按项目分文件夹）
```

## 添加一个项目

1. 复制 `projects/project-template.html` 并按项目命名，例如 `projects/my-project.html`。
2. 在 `projects/index.html` 中增加该项目的链接。
3. 将图片放在 `assets/images/projects/my-project/`。
4. 在项目 HTML 中使用 `../assets/images/projects/my-project/图片名` 引用图片。
5. 所有页面继续引用 `assets/css/site.css`，不要创建重复样式文件。

## 发布

GitHub Pages 从 `main` 分支根目录发布。推送到 `main` 后，网页会自动更新。
