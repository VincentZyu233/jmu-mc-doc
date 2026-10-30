# JMU 高校复原工程客户端 v1.1.0

Minecraft **26.3** · Fabric Loader **0.20.1** · Java **25**

## 下载内容

- `PCL2_CE_Release_x64.exe`：Windows x64 PCL CE 启动器（[PCL CE GitHub](https://github.com/PCL-Community/PCL-CE)）
- `JMU-Minecraft-26-3-Fabric-v1-1-0.mrpack`：完整 JMU 客户端整合包

## 安装

1. 将 PCL CE 放入独立目录并运行。
2. 在 PCL CE 中导入 `.mrpack`。
3. Java 选择 JDK 25。
4. 启动 Minecraft 26.3 Fabric 实例。
5. 多人游戏连接 `laoke.vincentzyu233.cn:61027`。
6. 首次进入执行 `/register <密码> <再次输入密码>`，以后执行 `/login <密码>`。

详细教程：[https://vincentzyu233.github.io/jmu-mc-doc/](https://vincentzyu233.github.io/jmu-mc-doc/)

## v1.1.0 更新内容

- 客户端模组由 22 个增加到 29 个，旧模组无删除或替换。
- 新增 7 个模组：
  - **BadOptimizations**：补充客户端性能优化。
  - **WorldEditCUI**：在客户端显示 WorldEdit 选区线框。
  - **Bobby**：缓存已加载区块，减少重复等待。
  - **Cull Leaves**：优化树叶渲染。
  - **ModernFix**：改善启动、加载与运行性能。
  - **Reese's Sodium Options**：改进 Sodium 视频设置界面。
  - **Sodium Extra**：提供更多渲染与性能选项。
- 整合包实例标识改为纯英文、无空格的 `JMU-Minecraft-26-3-Fabric`。
- 继续预置 5 个资源包和 2 个光影包。
- 已移除本机 Java 路径、作者存档、日志和 Xaero 多人地图缓存。

## SHA-256

```text
39E0F0613902241D448F901D4BE9BF2DA2F366ED2A5E0A6518A413DE4BFBE992  PCL2_CE_Release_x64.exe
41B7AF22DD093146AEDACB636F9A11F91A07BFC39000599A62C3B0D412037559  JMU-Minecraft-26-3-Fabric-v1-1-0.mrpack
```

## HMCL 安装方案

实测 [HMCL](https://github.com/HMCL-dev/HMCL) 也支持直接将整合包文件（`.mrpack`，本质是 ZIP）拖入启动器窗口，随后按提示下载并安装客户端。该方案适用于使用 Linux 和 macOS 游玩 Minecraft 的玩家。
