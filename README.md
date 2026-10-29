<p align="center">
  <img src="./docs/public/branding/jmu-grass-block-512.png" alt="JMU 高校复原工程草方块校徽 Logo" width="180">
</p>

# JMU 高校复原工程文档

集美大学 JMU 高校复原工程 Minecraft 服务器的公开文档站点，基于 VitePress 构建并部署到 GitHub Pages。

## 本地开发

```bash
npm ci
npm run docs:dev
```

默认开发地址由 VitePress 输出。生产构建：

```bash
npm run docs:build
npm run docs:preview
```

GitHub Pages 使用 `/jmu-mc-doc/` 作为默认 `base`，也可通过环境变量覆盖：

```powershell
$env:VITEPRESS_BASE='/'
npm run docs:build
```

## 内容边界

- 公开站只介绍玩法、客户端安装、权限规则和公开连接地址。
- 不包含 RCON 密码、FRP token、内网 IP、服务端目录和备份脚本。
- 内部运维手册位于私有仓库 `VincentZyu233/luda4f-doc`。

## 客户端发布

客户端 Release 包含两个资产：

- `PCL2_CE_Release_x64.exe`
- `JMU-Minecraft-26.3-Fabric-v1.0.0.mrpack`

发布前需确认 MRPack 不含本机 Java 路径和 Xaero 多人缓存。
