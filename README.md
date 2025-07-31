# GitHub Product Site

这是一个使用React + Vite + Tailwind CSS构建的产品展示网站，已配置为可以部署到GitHub Pages。

## 🚀 部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 在GitHub上创建一个新的仓库，命名为 `github-product-site`
2. 不要初始化README、.gitignore或license文件

### 步骤2：推送代码到GitHub
```bash
# 如果还没有初始化git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: React product site"

# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/github-product-site.git

# 推送到main分支
git push -u origin main
```

### 步骤3：启用GitHub Pages
1. 进入你的GitHub仓库
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，选择 "GitHub Actions"
5. 保存设置

### 步骤4：等待部署完成
- 推送代码后，GitHub Actions会自动运行部署工作流
- 你可以在仓库的 "Actions" 标签中查看部署进度
- 部署完成后，你的网站将在 `https://YOUR_USERNAME.github.io/github-product-site/` 可访问

## 🛠️ 本地开发

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm dev
```

### 构建生产版本
```bash
pnpm build
```

### 预览生产构建
```bash
pnpm preview
```

## 📁 项目结构

```
github-product-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions部署工作流
├── public/                     # 静态资源
├── src/                        # 源代码
│   ├── components/            # React组件
│   ├── pages/                 # 页面组件
│   └── ...
├── index.html                 # HTML模板
├── package.json               # 项目配置
├── vite.config.js            # Vite配置（已配置GitHub Pages）
└── README.md                 # 项目说明
```

## 🔧 配置说明

- **Vite配置**: `vite.config.js` 已配置了正确的 `base` 路径用于GitHub Pages部署
- **GitHub Actions**: `.github/workflows/deploy.yml` 包含了自动化部署配置
- **依赖管理**: 使用pnpm作为包管理器

## 📝 注意事项

1. 确保仓库名称与 `vite.config.js` 中的 `base` 路径匹配
2. 如果更改仓库名称，需要同时更新 `vite.config.js` 中的 `base` 配置
3. 首次部署可能需要几分钟时间
4. 每次推送到main分支都会触发自动部署

## 🎨 技术栈

- **React 19** - UI框架
- **Vite** - 构建工具
- **Tailwind CSS** - CSS框架
- **Radix UI** - 无障碍UI组件
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

# GitHub Pages部署更新
