# JMU 高校复原工程客户端 v1.1.1

Minecraft **26.3** · Fabric Loader **0.20.1** · Java **25**

## 下载内容

- `PCL2_CE_Release_x64.exe`：Windows x64 PCL CE 启动器（[PCL CE GitHub](https://github.com/PCL-Community/PCL-CE)）
- `JMU-Minecraft-26-3-Fabric-v1-1-1.mrpack`：包含 ViaFabricPlus 的 JMU 客户端整合包

## 安装

1. 将 PCL CE 放入独立目录并运行。
2. 在 PCL CE 中导入 `.mrpack`。
3. Java 选择 JDK 25。
4. 启动 Minecraft 26.3 Fabric 实例。
5. 多人游戏连接 `laoke.vincentzyu233.cn:61027`。
6. 首次进入执行 `/register <密码> <再次输入密码>`，以后执行 `/login <密码>`。

详细教程：[https://vincentzyu233.github.io/jmu-mc-doc/](https://vincentzyu233.github.io/jmu-mc-doc/)

## v1.1.1 更新内容

- 客户端模组由 29 个增加到 30 个。
- 新增 **ViaFabricPlus 5.1.3**，允许 Minecraft 26.3 客户端连接旧版本服务器。
- ViaFabricPlus 是纯客户端模组，服务器不需要安装。
- 本次更新不会让旧版本客户端连接当前 26.3 服务器。
- 保留现有资源包、光影包、建筑工具、小地图与服务器预设。
- 整合包中不包含本机 Java 路径、个人存档、日志或多人地图缓存。

## SHA-256

```text
39E0F0613902241D448F901D4BE9BF2DA2F366ED2A5E0A6518A413DE4BFBE992  PCL2_CE_Release_x64.exe
68AECB74649AD57306B06BFCA3F3E38608EFABCE9DEC1BAEF82014B7A7FEC3DC  JMU-Minecraft-26-3-Fabric-v1-1-1.mrpack
```

## ViaFabricPlus 文件校验

```text
SHA-512:
91E60DB5183948F88A0CACB65A7492D8DD0C7AFC78EB0225F55C0EFEB0A5275AC54091863D67F9F8600655B1E47DE377F0ED32DA93E61D862128C6D4C75743A0
```

## HMCL 安装方案

实测 [HMCL](https://github.com/HMCL-dev/HMCL) 也支持直接将整合包文件（`.mrpack`，本质是 ZIP）拖入启动器窗口，随后按提示下载并安装客户端。该方案适用于使用 Linux 和 macOS 游玩 Minecraft 的玩家。
