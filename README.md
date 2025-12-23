# 快手小游戏API类型定义库

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-blue.svg)](https://www.typescriptlang.org/)

为快手小游戏平台提供的完整TypeScript类型定义库，支持所有官方API接口的类型安全开发。

## 📋 特性

- ✅ **完整覆盖**: 支持快手小游戏所有官方API接口
- ✅ **类型安全**: 完整的TypeScript类型定义，提供智能提示
- ✅ **详细文档**: 每个接口都包含详细的JSDoc注释和示例代码
- ✅ **模块化组织**: 按功能模块分类，便于查找和使用
- ✅ **构建工具**: 提供Gulp构建脚本，自动合并和格式化类型文件

## 🚀 快速开始

### 使用方式

在你的TypeScript项目中，将lib.ks.api.d.ts文件放入项目根目录：

```typescript
// 在全局范围内，ks对象已经声明为全局变量
// 可以直接使用ks.xxx来调用API

// 获取系统信息
ks.getSystemInfo({
  success(res) {
    console.log('设备型号:', res.model);
    console.log('屏幕宽度:', res.windowWidth);
    console.log('屏幕高度:', res.windowHeight);
  }
});

// 创建激励视频广告
const rewardedVideoAd = ks.createRewardedVideoAd({
  adUnitId: "你的广告单元ID"
});

if (rewardedVideoAd) {
  rewardedVideoAd.onClose(res => {
    if (res && res.isEnded) {
      // 正常播放结束，下发奖励
    }
  });
}
```

## 📁 项目结构

```
types/
├── index.d.ts                      # 主入口文件，包含所有API接口定义
│
├── Advertisement/                  # 广告相关接口
│   ├── BannerAd.d.ts               # Banner广告组件
│   ├── InterstitialAd.d.ts         # 插屏广告组件
│   ├── RewardedVideoAd.d.ts        # 激励视频广告组件
│   └── MiniProgramPlayable.d.ts    # 小游戏试玩相关接口
│
├── Base/                          # 基础接口
│   ├── Lifecycle/
│   │   └── Lifecycle.d.ts          # 生命周期回调（onShow, onHide等）
│   ├── SystemInfo/
│   │   └── AppBaseInfo.d.ts        # 系统信息和应用基础信息
│   └── Touch/
│       └── Touch.d.ts              # 触摸事件相关接口
│
├── CommonUse/                     # 设为常用功能
│   └── CommonUse.d.ts             # 添加/检查常用状态
│
├── Device/                        # 设备相关接口
│   ├── Accelerometer/
│   │   └── Accelerometer.d.ts      # 加速度计传感器
│   ├── Compass/
│   │   └── Compass.d.ts            # 罗盘传感器
│   ├── DeviceMotion/
│   │   └── DeviceMotion.d.ts       # 设备方向传感器
│   ├── Gyroscope/
│   │   └── Gyroscope.d.ts          # 陀螺仪传感器
│   ├── Keyboard/
│   │   └── Keyboard.d.ts           # 键盘输入相关
│   ├── Memory/
│   │   └── Memory.d.ts             # 内存警告相关
│   ├── Network/
│   │   └── Network.d.ts            # 网络状态相关
│   └── Vibrate/
│       └── Vibrate.d.ts            # 震动功能
│
├── File/                          # 文件系统
│   └── File.d.ts                  # 文件管理器相关接口
│
├── FollowState/                   # 官方号关注状态
│   └── FllowState.d.ts            # 检查关注状态和打开Profile
│
├── GameClub/                      # 游戏圈功能
│   └── GameClub.d.ts              # 游戏圈跳转和内容发布
│
├── GameRecorder/                  # 游戏录制
│   └── GameRecorder.d.ts          # 游戏画面录制和分享
│
├── Interface/                     # 界面交互
│   ├── Interface.d.ts             # 界面提示框和操作菜单
│   └── Internet/                  # 网络请求
│       ├── Download.d.ts          # 文件下载
│       ├── Request.d.ts           # HTTP请求
│       ├── Upload.d.ts            # 文件上传
│       └── WebSocket.d.ts         # WebSocket连接
│
├── Media/                         # 媒体功能
│   ├── Audio/
│   │   └── Audio.d.ts             # 音频播放和控制
│   ├── Image/
│   │   └── Image.d.ts             # 图片选择和保存
│   └── Vidoe/
│       └── Video.d.ts             # 视频播放和控制
│
├── OpenInterface/                 # 开放接口
│   ├── Authorize/
│   │   └── Authorize.d.ts         # 用户授权相关
│   ├── Login/
│   │   └── Login.d.ts             # 登录和会话检查
│   └── UserInfo/
│       └── UserInfo.d.ts          # 用户信息获取
│
├── Payoff/                        # 虚拟支付
│   └── Payoff.d.ts                # 游戏支付接口
│
├── Render/                        # 渲染相关
│   └── Canvas.d.ts                # 画布和图像创建
│
├── Report/                        # 数据分析
│   └── Report.d.ts                # 场景数据上报
│
├── Share/                         # 分享功能
│   └── Share.d.ts                 # 消息分享
│
├── Shortcut/                      # 添加到桌面
│   └── Shortcut.d.ts              # 快捷方式相关
│
├── SliderBar/                     # 侧边栏功能
│   └── SliderBar.d.ts             # 侧边栏可用性检查和跳转
│
├── Storage/                       # 数据缓存
│   └── Storage.d.ts               # 本地存储管理
│
└── Subpackage/                    # 分包加载
    └── Subpackage.d.ts            # 子包加载和管理
```

## 🛠️ 开发工具

### 构建类型定义

项目使用Gulp进行类型文件的构建和合并：

```bash
# 构建类型定义文件
npm run build:dts

# 监听文件变化自动构建
npm run watch:dts
```

构建完成后，会在`dist/`目录生成合并后的类型定义文件`lib.ks.api.d.ts`。

## 📚 API模块概览

### 基础接口
- **系统信息**: `getSystemInfo`, `getSystemInfoSync`, `getSystemInfoAsync`
- **生命周期**: `onShow`, `onHide`, `getLaunchOptionsSync`
- **触摸事件**: `onTouchStart`, `onTouchMove`, `onTouchEnd`

### 渲染相关
- **画布**: `createCanvas`, `createImage`
- **字体**: `loadFont`
- **帧率控制**: `setPreferredFramesPerSecond`

### 广告系统
- **激励视频**: `createRewardedVideoAd`
- **插屏广告**: `createInterstitialAd`
- **Banner广告**: `createBannerAd`
- **小游戏试玩**: `notifyMiniProgramPlayableStatus`

### 界面交互
- **提示框**: `showToast`, `showLoading`, `showModal`
- **操作菜单**: `showActionSheet`

### 网络请求
- **HTTP请求**: `request`, `downloadFile`, `uploadFile`
- **WebSocket**: `connectSocket`

### 数据缓存
- **本地存储**: `setStorage`, `getStorage`, `removeStorage`
- **缓存管理**: `getStorageInfo`, `clearStorage`

### 媒体功能
- **音频**: `createInnerAudioContext`
- **图片**: `chooseImage`, `saveImageToPhotosAlbum`
- **视频**: `createVideo`

### 文件系统
- **文件管理**: `getFileSystemManager`

### 开放接口
- **用户信息**: `getUserInfo`
- **登录**: `login`, `checkSession`
- **授权**: `authorize`, `getSetting`

### 设备功能
- **传感器**: 加速度计、罗盘、陀螺仪、设备方向
- **键盘**: `showKeyboard`, `hideKeyboard`
- **网络状态**: `getNetworkType`, `onNetworkStatusChange`
- **震动**: `vibrateShort`, `vibrateLong`

### 高级功能
- **游戏录制**: `getGameRecorder`
- **分包加载**: `loadSubpackage`
- **添加到桌面**: `addShortcut`, `checkShortcut`
- **游戏圈**: `jumpToGameClub`, `shareImageToGameClub`

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个类型定义库！

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

### 代码规范

- 遵循TypeScript官方编码规范
- 为所有接口添加详细的JSDoc注释
- 包含完整的示例代码
- 保持类型定义与官方文档同步

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [快手小游戏开发文档](https://open.kuaishou.com/miniGameDocs/gameDev/api/api.html)
- [TypeScript官方文档](https://www.typescriptlang.org/)

## 📞 支持

如果你在使用过程中遇到问题，可以通过以下方式获取帮助：

1. 查看 Issues 中是否已有相关讨论
2. 创建新的 Issue 描述你遇到的问题
3. 查看官方文档确认API使用方法

---

⭐ 如果这个项目对你有帮助，请给我一个Star！