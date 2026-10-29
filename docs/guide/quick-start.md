# 快速进入服务器

<div class="badge-row">
  <span class="badge">Minecraft 26.3</span>
  <span class="badge">Fabric 0.20.1</span>
  <span class="badge">Java 25</span>
  <span class="badge">离线服</span>
</div>

## 🔹 连接信息

<div class="server-address">
  <div>
    <strong>服务器地址</strong>
    <p><code>laoke.vincentzyu233.cn:61027</code></p>
  </div>
</div>

客户端需要安装整合包中的 Fabric 模组。直接使用原版客户端虽然可以连接，但 Axiom、光影、小地图等配套功能不会生效。

## 🔹 第一次进入

服务器采用离线模式，但启用了 `EasyAuth` 登录保护。第一次进入时，请在聊天栏完成注册：

```text
/register <密码> <再次输入密码>
```

注册完成后，服务器会记录你的账号。之后每次进入使用：

```text
/login <密码>
```

::: warning 请勿冒充他人 ID
离线服无法验证 Mojang 账号所有权。请使用自己的固定 ID，不要冒用其他玩家名称，也不要把登录密码发给别人。
:::

## 🔹 进入后的默认状态

普通玩家默认拥有以下体验：

- 创造模式与飞行能力；
- 可以自由参观校园、地图和建筑；
- 不能破坏或放置方块；
- 不能与箱子、门、按钮、实体等交互；
- 不能攻击其他玩家或触发 TNT、火焰、流体等环境修改；
- 可以通过 `/spawn` 返回出生点。

需要参与建筑时，请阅读[建筑权限与协作规范](/guide/builder)。

## 🔹 皮肤

服务器安装了 `SkinRestorer`，正版皮肤会自动尝试从 Mojang 获取；也支持 Ely.by 和自定义 Web 皮肤。

常用命令：

```text
/skin refresh
/skin set mojang
/skin set ely.by
/skin set web
/skin clear
```

如果皮肤没有立即刷新，可以退出并重新进入服务器。自定义皮肤功能是否可用，以服务器当前开放的 Provider 为准。

## 🔹 基础操作建议

| 操作 | 建议 |
| --- | --- |
| 返回出生点 | `/spawn` |
| 查看在线玩家 | `/list` |
| 查看种子 | `/seed` |
| 局部聊天 | `/msg <玩家> <内容>` |
| 切换昼夜 | 仅建筑师或 OP 可用 |
| 地图定位 | 按 `M` 打开 Xaero 小地图 |
| 光影设置 | 按 `K` 打开 Iris 光影菜单 |

## 🔹 连接失败时

先确认：

1. 游戏版本是 Minecraft `26.3`；
2. Fabric Loader 是 `0.20.1`；
3. 使用的是整合包，不是缺失模组的原版实例；
4. Java 为 25；
5. 地址和端口完整填写为 `laoke.vincentzyu233.cn:61027`。

更多排查见[常见问题](/guide/faq)。
