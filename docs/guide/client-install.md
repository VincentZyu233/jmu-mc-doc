# 客户端下载与安装

## 🔹 下载 Release

前往 [JMU 最新 Release](https://github.com/VincentZyu233/jmu-mc-doc/releases/latest) 下载以下两个资产：

<div class="download-box">
  <strong><a href="https://github.com/VincentZyu233/jmu-mc-doc/releases/latest/download/PCL2_CE_Release_x64.exe">PCL2_CE_Release_x64.exe</a></strong>
  <p>Windows x64 启动器。已有 PCL CE 或其他支持 MRPack 的启动器时可跳过。</p>
  <strong><a href="https://github.com/VincentZyu233/jmu-mc-doc/releases/latest/download/JMU-Minecraft-26-3-Fabric-v1-1-0.mrpack">JMU-Minecraft-26-3-Fabric-v1-1-0.mrpack</a></strong>
  <p>包含 Minecraft 26.3、Fabric 0.20.1、29 个客户端模组及全部预设配置。</p>
</div>

MRPack 已经内置模组文件，因此导入时不需要逐个下载模组。Release 说明中会同时提供两个文件的 SHA-256，可用于校验下载完整性。

启动器项目：[PCL CE GitHub](https://github.com/PCL-Community/PCL-CE) · [HMCL GitHub](https://github.com/HMCL-dev/HMCL)

## 🔹 PCL CE 安装流程

1. 新建一个独立目录，例如 `D:\Games\JMU-Minecraft`。
2. 将 `PCL2_CE_Release_x64.exe` 放入该目录并运行。
3. 在 PCL CE 中选择“安装整合包”或“导入整合包”，选择下载好的 `.mrpack`。
4. 启动器会识别 `Minecraft 26.3` 和 `Fabric Loader 0.20.1`。
5. Java 选择 **Java 25**。PCL 未自动找到时，在版本设置中手动指定 JDK 25 的 `java.exe`。
6. 等待游戏资源与启动依赖准备完成，进入版本后连接服务器。

::: tip 不再绑定作者电脑路径
公开用的 MRPack 已移除导出时残留的本机 Java 路径，不会绑定作者电脑上的 JDK。
:::

## 🔹 其他启动器

官方启动器、HMCL、Prism Launcher 等支持 Modrinth 格式的启动器可导入同一个 `.mrpack`。导入后确认：

- Minecraft：`26.3`
- Fabric Loader：`0.20.1`
- Java：`25`
- 游戏内存：建议至少 `4 GB`

如果启动器要求重新下载模组，可直接使用 MRPack 的 `overrides/mods` 内容，不需要手动补装。

## 🔹 HMCL 安装流程

实测 [HMCL](https://github.com/HMCL-dev/HMCL) 也支持直接将整合包文件（`.mrpack`，本质为 ZIP）拖入启动器窗口，随后按提示下载并安装客户端。该方案尤其适合使用 Linux 和 macOS 游玩 Minecraft 的玩家。

## 🔹 整合包内容

### 建筑工具

| 模组 | 用途 |
| --- | --- |
| Axiom | 可视化建筑编辑、选区、绘制、复制粘贴 |
| WorldEditCUI | 在客户端显示 WorldEdit 选区线框 |
| Sodium | 渲染优化 |
| Iris | 光影加载 |
| Xaero Minimap | 小地图 |
| Xaero World Map | 世界地图 |

服务端提供 WorldEdit，客户端通过聊天栏使用其命令。整合包现已内置 WorldEditCUI，使用木斧创建选区时会显示可视化线框。

### 性能优化

- Lithium
- Krypton
- FerriteCore
- ImmediatelyFast
- EntityCulling
- Dynamic FPS
- BadOptimizations
- Bobby
- Cull Leaves
- ModernFix
- Sodium Extra
- Sodium
- Fabric API
- Fabric Language Kotlin

### 视觉与界面

- Iris Shaders
- Continuity
- Zoomify
- Gamma Utils
- Better Ping Display
- Chat Patches
- Reese's Sodium Options
- Mod Menu
- Yet Another Config Lib
- Cloth Config
- Placeholder API

### 预置资源与光影

资源包：

- Fresh Animations
- Better Leaves
- Sodium Translations
- XKRD 红显
- 护眼大补丸

光影包：

- Complementary Reimagined
- BSL

## 🔹 常用按键

| 功能 | 默认按键 |
| --- | --- |
| 打开 Xaero 小地图 | `M` |
| Zoomify 放大 | `C` |
| Iris 光影菜单 | `K` |
| Axiom 框选 | `B` |
| Axiom 魔法选择 | `M` |
| Axiom 自由绘制 | `G` |
| Axiom 撤销/重做 | `Ctrl+Z` / `Ctrl+Y` |

按键可以在对应模组配置中调整。

## 🔹 首次启动检查

- 启动器日志中没有 Java 版本错误；
- Mod Menu 中能看到 Axiom、WorldEditCUI、Sodium、Iris 和 Xaero；
- 语言为简体中文；
- 多人游戏列表中已预置 JMU 服务器，或手动添加 `laoke.vincentzyu233.cn:61027`。

安装后请继续阅读[快速进入服务器](/guide/quick-start)。
