# 客户端下载与安装

## 🔹 下载 Release

前往 [JMU 最新 Release](https://github.com/VincentZyu233/jmu-mc-doc/releases/latest) 下载以下两个资产：

<div class="download-box">
  <strong><a href="https://github.com/VincentZyu233/jmu-mc-doc/releases/latest/download/PCL2_CE_Release_x64.exe">PCL2_CE_Release_x64.exe</a></strong>
  <p>Windows x64 启动器。已有 PCL CE 或其他支持 MRPack 的启动器时可跳过。</p>
  <strong><a href="https://github.com/VincentZyu233/jmu-mc-doc/releases/latest/download/JMU-Minecraft-26-3-Fabric-v1-1-1.mrpack">JMU-Minecraft-26-3-Fabric-v1-1-1.mrpack</a></strong>
  <p>包含 Minecraft 26.3、Fabric 0.20.1、30 个客户端模组及全部预设配置。</p>
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

整合包精选了专为校园大场景复原打造的辅助工具、性能优化及视觉组件。所有模组均已完成兼容性调优与开箱即用配置。

### 建筑与辅助工具

| 模组 | 作用与用途 |
| :--- | :--- |
| <img src="https://cdn.modrinth.com/data/N6n5dqoA/dd175669d5ac228dc00453d13528ad26c1f056ac.png" class="mod-icon" alt="Axiom"> **Axiom** | 现代化可视化建筑编辑：选区、自由绘制、平移、镜面对称、形状生成 |
| <img src="https://cdn.modrinth.com/data/NSLJJooQ/ed6eaf24fa5a8d1ed4431f57c27fe5cde9f348f2_96.webp" class="mod-icon" alt="WorldEditCUI"> **WorldEditCUI** | 在客户端本地实时显示服务端 WorldEdit 选区的彩色高亮线框 |
| <img src="https://cdn.modrinth.com/data/1bokaNcj/354080f65407e49f486fcf9c4580e82c45ae63b8_96.webp" class="mod-icon" alt="Xaero's Minimap"> **Xaero's Minimap** | 游戏右上角高精度小地图，支持雷达、路标打点与航点导航 |
| <img src="https://cdn.modrinth.com/data/NcUtCpym/354080f65407e49f486fcf9c4580e82c45ae63b8_96.webp" class="mod-icon" alt="Xaero's World Map"> **Xaero's World Map** | 全屏世界大地图，与小地图联动展示整幅校园卫星像素图 |
| <img src="https://cdn.modrinth.com/data/rIC2XJV4/34c6c433ac1cbfc1401dbe749214641fce8f1ebf_96.webp" class="mod-icon" alt="ViaFabricPlus"> **ViaFabricPlus** | 纯客户端跨版本协议兼容（支持使用 26.3 连接多版本服务器） |

> 💡 **提示**：服务端已预置 WorldEdit。使用木斧选区时客户端即可看到 WorldEditCUI 线框。若需导入或放置 `.schem` 结构，请参阅[投影预览与 WorldEdit 放置教程](/guide/schematic-workflow)。

### 性能与底层优化

| 模组 | 作用与用途 |
| :--- | :--- |
| <img src="https://cdn.modrinth.com/data/AANobbMI/295862f4724dc3f78df3447ad6072b2dcd3ef0c9_96.webp" class="mod-icon" alt="Sodium (钠)"> **Sodium (钠)** | 现代化次世代渲染引擎，大幅提升游戏帧率（FPS）与显卡利用率 |
| <img src="https://cdn.modrinth.com/data/PtjYWJkn/0df4fb22a11e1dcb5e83cb0aadd275b571aca7a9_96.webp" class="mod-icon" alt="Sodium Extra"> **Sodium Extra** | 扩展钠的高级画质调节开关（粒子效果、动画精细度、云层切换） |
| <img src="https://cdn.modrinth.com/data/gvQqBUqZ/bcc8686c13af0143adf4285d741256af824f70b7_96.webp" class="mod-icon" alt="Lithium (锂)"> **Lithium (锂)** | 通用物理与游戏逻辑深度优化，显著压低客户端内部运算耗时（MSPT） |
| <img src="https://cdn.modrinth.com/data/fQEb0iXm/3ea60899d060a9286e03b87bfa9e71d0cbe2dde7_96.webp" class="mod-icon" alt="Krypton (氪)"> **Krypton (氪)** | 网络通信堆栈优化，优化数据包编码流水线，降低多人联机延迟与丢包 |
| <img src="https://cdn.modrinth.com/data/uXXizFIs/222a126f26f8f9ae1eb339f3b767677f18bff31f_96.webp" class="mod-icon" alt="FerriteCore (铁素体)"> **FerriteCore (铁素体)** | 核心内存优化，大幅降低大型体素场景下的 JVM 内存（RAM）占用 |
| <img src="https://cdn.modrinth.com/data/5ZwdcRci/e57b6b451425692ac17ad322d5e14bea686a383a_96.webp" class="mod-icon" alt="ImmediatelyFast"> **ImmediatelyFast** | 立即渲染批处理优化，加速 HUD、聊天文字、容器与屏幕界面的绘制 |
| <img src="https://cdn.modrinth.com/data/NNAgCjsB/7873452d6cede4daed12da3d7d8c193ab88b4fd6_96.webp" class="mod-icon" alt="EntityCulling (实体剔除)"> **EntityCulling (实体剔除)** | 视锥剔除与遮挡剔除，自动跳过被墙体完全挡住的实体，减轻 GPU 负荷 |
| <img src="https://cdn.modrinth.com/data/LQ3K71Q1/5056368d0d87c1a9f3efead0cb48ab39a4ea87bf_96.webp" class="mod-icon" alt="Dynamic FPS"> **Dynamic FPS** | 智能后台降频，在游戏最小化或窗口失去焦点时主动降低负载与发热 |
| **BadOptimizations** | 绕过原版多处微小冗余逻辑与实体计算陷阱，进一步平滑帧生成时间 |
| <img src="https://cdn.modrinth.com/data/M08ruV16/icon.png" class="mod-icon" alt="Bobby"> **Bobby** | 假区块距离缓存，突破服务器发送视距限制，保持加载并显示远景建筑 |
| <img src="https://cdn.modrinth.com/data/GNxdLCoP/icon.png" class="mod-icon" alt="Cull Leaves"> **Cull Leaves** | 树叶网格遮挡剔除，显著提升校园大面积绿化树木场景下的渲染流畅度 |
| <img src="https://cdn.modrinth.com/data/nmDcB62a/2af94de5e08ae54567ee86b968fc7ce076d9fee5_96.webp" class="mod-icon" alt="ModernFix"> **ModernFix** | 现代化综合性能补丁，深度优化游戏冷启动速度与资源加载链 |
| <img src="https://cdn.modrinth.com/data/P7dR8mSH/icon.png" class="mod-icon" alt="Fabric API"> **Fabric API** | Fabric 生态核心接口库，为所有模组提供通用 API 交互挂载支持 |
| <img src="https://cdn.modrinth.com/data/Ha28R6CL/72c3d74aeb665e45aea93a945a01474cbce3b7da_96.webp" class="mod-icon" alt="Fabric Language Kotlin"> **Fabric Language Kotlin** | Kotlin 语言编写模组的标准运行时核心依赖 |

### 视觉与界面美化

| 模组 | 作用与用途 |
| :--- | :--- |
| <img src="https://cdn.modrinth.com/data/YL57xq9U/18d0e7f076d3d6ed5bedd472b853909aac5da202_96.webp" class="mod-icon" alt="Iris Shaders"> **Iris Shaders** | 现代化光影加载器，与 Sodium 深度配合，支持无缝热重载光影包 |
| <img src="https://cdn.modrinth.com/data/1IjD5062/icon.png" class="mod-icon" alt="Continuity"> **Continuity** | 连接纹理支持（CTM），实现建筑玻璃无缝拼接与地砖连贯纹理 |
| <img src="https://cdn.modrinth.com/data/w7ThoJFB/e2de67a0bfb9e8aa2347982ab3ec5463f26cca31_96.webp" class="mod-icon" alt="Zoomify"> **Zoomify** | 丝滑多级平滑视角放大（类望远镜变焦，默认按键 `C`） |
| <img src="https://cdn.modrinth.com/data/wdLuzzEP/b6014c210bbedacf610f7d2dba55149dae9677c8.png" class="mod-icon" alt="Gamma Utils"> **Gamma Utils** | 游戏亮度与夜视快速切换，方便在阴暗室内或夜间进行建筑施工 |
| <img src="https://cdn.modrinth.com/data/ZvaHbwoZ/icon.png" class="mod-icon" alt="Better Ping Display"> **Better Ping Display** | 将原版抽象的五格信号条替换为精确的绿色/黄色数字网络延迟（ms） |
| <img src="https://cdn.modrinth.com/data/MOqt4Z5n/56c954dea290ef4dd1b0d6ea92a811acac62ca85.png" class="mod-icon" alt="Chat Patches"> **Chat Patches** | 聊天框使用体验优化，支持更长消息复制与历史输入快捷调用 |
| <img src="https://cdn.modrinth.com/data/Bh37bMuy/icon.png" class="mod-icon" alt="Reese's Sodium Options"> **Reese's Sodium Options** | 重构 Sodium 原版设置面板为直观的多标签页分类结构 |
| <img src="https://cdn.modrinth.com/data/mOgUt4GM/5a20ed1450a0e1e79a1fe04e61bb4e5878bf1d20.png" class="mod-icon" alt="Mod Menu"> **Mod Menu** | 客户端内置模组管理器，支持在游戏标题与暂停菜单中配置各个模组 |
| <img src="https://cdn.modrinth.com/data/1eAoo2KR/08c0cd32515e260f4bb20bbc0696510041523f9a_96.webp" class="mod-icon" alt="Yet Another Config Lib (YACL)"> **Yet Another Config Lib (YACL)** | 现代化响应式模组配置界面库，提供精美图表与平滑动画前置 |
| <img src="https://cdn.modrinth.com/data/9s6osm5g/ed8a2316cbb6f4fc5f510e8e13a59a85cbbbff4d_96.webp" class="mod-icon" alt="Cloth Config"> **Cloth Config** | 经典模组配置页面核心前置库 |
| <img src="https://cdn.modrinth.com/data/eXts2L7r/e9c9990896e6422bffc5f73d2c41b8f077348f83.png" class="mod-icon" alt="Placeholder API"> **Placeholder API** | 文本变量解析与动态占位符前置组件 |

### 预置材质包与光影包

| 类型 | 名称 | 说明 |
| :--- | :--- | :--- |
| **资源包** | <img src="https://cdn.modrinth.com/data/50dA9Sha/3132c10e9e3c73fde9799720fd3da5561071708c_96.webp" class="mod-icon" alt="Fresh Animations"> **Fresh Animations** | 为所有原版生物增加鲜活生动的骨骼动作、表情动画与眨眼细节 |
| **资源包** | <img src="https://cdn.modrinth.com/data/uvpymuxq/fe1a61998ae57dc6ad1a4bb028334c3c3925d22f_96.webp" class="mod-icon" alt="Better Leaves"> **Better Leaves** | 告别原版方块树叶，呈现蓬松立体、自然丰满的圆润枝叶模型 |
| **资源包** | <img src="https://cdn.modrinth.com/data/yfDziwn1/907581019df45903df237952ce8d10ac37134cb5_96.webp" class="mod-icon" alt="Sodium Translations"> **Sodium Translations** | 钠及其所有扩展组件的官方简体中文汉化语言包 |
| **资源包** | **XKRD 红显** | 高对比度红石线路与朝向清晰指示，方便红石机械与电路施工 |
| **资源包** | **护眼大补丸** | 降低夜间高对比度发光与刺眼界面色彩的柔和配色包 |
| **光影包** | <img src="https://cdn.modrinth.com/data/HVnmMxH1/79cb7c8123bbc54945305b2ebad6b8881efdf5f8_96.webp" class="mod-icon" alt="Complementary Reimagined"> **Complementary Reimagined** | 风格化与真实光影结合的标杆光影，兼顾极致质感与优异性能 |
| **光影包** | <img src="https://cdn.modrinth.com/data/Q1vvjJYV/2a611a3cb434fb52fb81fa5dace13c5d8b67e55d_96.webp" class="mod-icon" alt="BSL Shaders"> **BSL Shaders** | 经典暖色调柔光光影，色彩饱满，水面与体积光表现出众 |

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
- Mod Menu 中能看到 Axiom、WorldEditCUI、ViaFabricPlus、Sodium、Iris 和 Xaero；
- 语言为简体中文；
- 多人游戏列表中已预置 JMU 服务器，或手动添加 `laoke.vincentzyu233.cn:61027`。

安装后请继续阅读[快速进入服务器](/guide/quick-start)。
