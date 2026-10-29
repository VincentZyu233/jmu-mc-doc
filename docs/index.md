---
layout: home

hero:
  name: JMU 高校复原工程
  text: 把集美大学校园建进 Minecraft
  tagline: 基于 Minecraft 26.3 与 Fabric 的高校复原计划。记录建筑、铺设卫星像素地图，并邀请可靠的建筑师共同完善校园。
  image:
    src: /creeper-grass-block.svg
    alt: JMU 高校复原工程
  actions:
    - theme: brand
      text: 快速进入服务器
      link: /guide/quick-start
    - theme: alt
      text: 下载客户端
      link: /guide/client-install

features:
  - icon: 🏫
    title: 集美大学校园复原
    details: 围绕主校区、南门、陆大楼等校园地标进行长期复原，并在超平坦世界中铺设整幅卫星图像素地图。
    link: /guide/quick-start
  - icon: 🧱
    title: Axiom 与 WorldEdit 创作
    details: 建筑师可使用 Axiom 进行可视化搭建，也可通过服务端 WorldEdit 完成选择、复制、粘贴和批量编辑。
    link: /guide/builder
  - icon: 🛡️
    title: 参观与建造分离
    details: 普通玩家默认创造模式飞行参观，但不能破坏、放置方块或与建筑交互；建筑修改只向受信任建筑师开放。
    link: /guide/builder
  - icon: 🚀
    title: 为大型场景优化
    details: 客户端整合 Sodium、Lithium、Krypton、FerriteCore、ImmediatelyFast 等性能模组，并预置 Iris 光影生态。
    link: /guide/client-install
  - icon: 🗺️
    title: 卫星像素画与地图
    details: 服务器已写入 4096 × 4332 的校园卫星像素地图，搭配 Xaero 小地图和世界地图便于定位与规划。
    link: /guide/quick-start
  - icon: 🔐
    title: 离线登录保护
    details: 服务器使用 EasyAuth 提供注册与登录流程，SkinRestorer 负责皮肤同步，进入前请先完成账号认证。
    link: /guide/quick-start
---

## 服务器速览

<div class="server-address">
  <div>
    <strong>Java 版服务器地址</strong>
    <p><code>laoke.vincentzyu233.cn:61027</code></p>
  </div>
  <a class="badge" href="https://github.com/VincentZyu233/jmu-mc-doc/releases/latest">前往最新 Release</a>
</div>

<div class="server-grid">
  <div class="server-card">
    <strong>Minecraft 26.3</strong>
    <span>Fabric Loader 0.20.1 · Java 25</span>
  </div>
  <div class="server-card">
    <strong>创造模式参观</strong>
    <span>允许飞行 · 默认无建筑修改权限</span>
  </div>
  <div class="server-card">
    <strong>离线服 + EasyAuth</strong>
    <span>首次进入使用 /register，之后使用 /login</span>
  </div>
  <div class="server-card">
    <strong>最多 10 人</strong>
    <span>校园复原项目属于小规模协作服务器</span>
  </div>
</div>

## 推荐开始方式

1. 从 [最新 Release](https://github.com/VincentZyu233/jmu-mc-doc/releases/latest) 下载 PCL CE 和 JMU MRPack。
2. 按照[客户端安装指南](/guide/client-install)导入整合包并启动 Minecraft 26.3。
3. 在多人游戏中连接 `laoke.vincentzyu233.cn:61027`。
4. 首次进入先注册，再阅读[建筑权限与协作规范](/guide/builder)。

::: tip 参观不会改动地图
普通玩家可以自由飞行查看已完成的校园、像素画和试验建筑，但服务端保护机制会拒绝破坏、放置、方块交互、攻击和 TNT 等操作。
:::

## 项目边界

这是一个非官方的校园复原与学习项目，不代表集美大学官方服务器。地图、建筑和素材仅用于校内兴趣协作与 Minecraft 创作演示。
