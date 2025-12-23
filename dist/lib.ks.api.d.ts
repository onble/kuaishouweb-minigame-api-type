/** KuaiShouWeb的变量命名空间 */
declare namespace KuaiShouWebMinigame {
    /**
     * 全局 ks 对象接口定义
     */
    interface KS {
        //#region 基础接口

        //#region 系统

        /**
         * 异步获取平台基础信息
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.getSystemInfo({
         *   success (res) {
         *     console.log(res.model)
         *     console.log(res.pixelRatio)
         *     console.log(res.windowWidth)
         *     console.log(res.windowHeight)
         *     console.log(res.language)
         *     console.log(res.version)
         *     console.log(res.platform)
         *   }
         * })
         * ```
         */
        getSystemInfo: (object: GetSystemInfoOptions) => void;

        /**
         * 同步获取平台基础信息（ks.getSystemInfo 的同步版本）
         * @returns 系统信息对象
         * @throws 调用失败时抛出错误
         * @example
         * ```javascript
         * try {
         *   const res = ks.getSystemInfoSync()
         *   console.log(res.model)
         *   console.log(res.pixelRatio)
         *   console.log(res.windowWidth)
         *   console.log(res.windowHeight)
         *   console.log(res.language)
         *   console.log(res.version)
         *   console.log(res.platform)
         * } catch (e) {
         *   // Do something when catch error
         * }
         * ```
         */
        getSystemInfoSync: () => SystemInfoResult;

        /**
         * 异步获取系统信息（增强版）
         * @description 需要一定的客户端版本支持，在不支持的客户端上，会使用同步实现来返回
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.getSystemInfoAsync({
         *   success (res) {
         *     console.log('系统信息：', res)
         *   },
         *   fail (err) {
         *     console.error('获取系统信息失败：', err)
         *   }
         * })
         * ```
         */
        getSystemInfoAsync: (object: GetSystemInfoOptions) => void;

        //#endregion 系统

        //#region 生命周期

        /**
         * 获取小游戏冷启动时的参数。热启动参数通过 ks.onShow 接口获取
         * @returns 冷启动参数对象
         * @example
         * ```javascript
         * let result = ks.getLaunchOptionsSync()
         * this.content.string += `
         * GetLaunchOptionSync, result: ${JSON.stringify(result)}`
         * ```
         */
        getLaunchOptionsSync: () => LaunchShowOptions;

        /**
         * 监听小游戏回到前台事件
         * @param callback - 小游戏回到前台事件的回调函数
         * @example
         * ```javascript
         * this.onShowCallback = (result) => {
         *   that.content.string += `
         * OnShow callback, result: ${JSON.stringify(result)}`
         * };
         * ks.onShow(this.onShowCallback);
         * ```
         */
        onShow: (callback: (options: LaunchShowOptions) => void) => void;

        /**
         * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面等操作会触发此事件
         * @param callback - 小游戏隐藏到后台事件的回调函数
         * @example
         * ```javascript
         * this.onHideCallback = () => {
         *   this.content.string += `
         * OnHide callback`
         * };
         * ks.onHide(this.onHideCallback);
         * ```
         */
        onHide: (callback: () => void) => void;

        /**
         * 取消监听小游戏回到前台事件
         * @param callback - 小游戏回到前台事件的回调函数（需与监听时传入的回调一致）
         * @example
         * ```javascript
         * ks.offShow(this.onShowCallback);
         * ```
         */
        offShow: (callback: (options: LaunchShowOptions) => void) => void;

        /**
         * 取消监听小游戏隐藏到后台事件
         * @param callback - 小游戏隐藏到后台事件的回调函数（需与监听时传入的回调一致）
         * @example
         * ```javascript
         * ks.offHide(this.onHideCallback);
         * ```
         */
        offHide: (callback: () => void) => void;

        /**
         * 退出当前小游戏
         */
        exitMiniProgram: () => void;
        //#endregion 生命周期

        //#region 触摸事件

        /**
         * 监听开始触摸事件
         * @param callback - 开始触摸事件的回调函数
         */
        onTouchStart: (callback: (res: TouchEventResult) => void) => void;

        /**
         * 监听触点移动事件
         * @param callback - 触点移动事件的回调函数
         */
        onTouchMove: (callback: (res: TouchEventResult) => void) => void;

        /**
         * 监听触摸结束事件
         * @param callback - 触摸结束事件的回调函数
         */
        onTouchEnd: (callback: (res: TouchEventResult) => void) => void;

        /**
         * 监听触点失效事件
         * @param callback - 触点失效事件的回调函数
         */
        onTouchCancel: (callback: (res: TouchEventResult) => void) => void;

        /**
         * 取消监听开始触摸事件
         * @param callback - 开始触摸事件的回调函数（需与监听时传入的回调一致）
         */
        offTouchStart: (callback: (res: TouchEventResult) => void) => void;

        /**
         * 取消监听触点移动事件
         * @param callback - 触点移动事件的回调函数（需与监听时传入的回调一致）
         */
        offTouchMove: (callback: (res: TouchEventResult) => void) => void;

        /**
         * 取消监听触摸结束事件
         * @param callback - 触摸结束事件的回调函数（需与监听时传入的回调一致）
         */
        offTouchEnd: (callback: (res: TouchEventResult) => void) => void;

        /**
         * 取消监听触点失效事件
         * @param callback - 触点失效事件的回调函数（需与监听时传入的回调一致）
         */
        offTouchCancel: (callback: (res: TouchEventResult) => void) => void;

        //#endregion 触摸事件

        //#endregion 基础接口

        //#region 渲染

        /**
         * 创建一个画布对象
         * @description 首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布
         * @returns 画布对象
         */
        createCanvas: () => Canvas;

        /**
         * 修改渲染帧率
         * @description 默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变
         * @param fps - 帧率，有效范围 1 - 60
         */
        setPreferredFramesPerSecond: (fps: number) => void;

        /**
         * 加载自定义字体文件
         * @param path - 字体文件路径，支持本地路径、代码包路径
         * @returns 加载成功返回字体 family 值，失败返回 null
         */
        loadFont: (path: string) => string | null;

        /**
         * 创建一个图片对象
         * @returns 图片对象
         */
        createImage: () => Image;

        //#endregion 渲染

        //#region 广告

        //#region 激励视频广告

        /**
         * 创建激励视频广告组件
         * @description 调用该方法创建的激励视频广告是一个单例
         * @param object - 创建参数
         * @returns 激励视频组件
         * @example
         * ```javascript
         * let param = {};
         * param.adUnitId = "从平台获取的广告id";
         * param.multiton = true; //需要注意再看一个生效的版本11.11.40
         * param.multitonRewardMsg =  ['更多奖励1'];
         * param.multitonRewardTimes =  1;
         * param.progressTip = false;
         * let rewardedVideoAd = ks.createRewardedVideoAd(param);
         * if (rewardedVideoAd) {
         *   rewardedVideoAd.onClose(res => {
         *     // 用户点击了【关闭广告】按钮
         *     if (res && res.isEnded) {
         *       // 正常播放结束，可以下发游戏奖励
         *     }
         *     else {
         *         // 播放中途退出，不下发游戏奖励
         *     }
         *   })
         *   rewardedVideoAd.onError(res => {
         *     // 激励视频广告Error事件
         *   })
         *  let p = rewardedVideoAd.show()
         *  p.then(function(result){
         *      // 激励视频展示成功
         *      console.log(`show rewarded video ad success, result is ${result}`)
         *  }).catch(function(error){
         *      // 激励视频展示失败
         *      console.log(`show rewarded video ad failed, error is ${error}`)
         *  })
         * } else {
         *     console.log("创建激励视频组件失败");
         * }
         * ```
         */
        createRewardedVideoAd: (
            object: CreateRewardedVideoAdOptions,
        ) => RewardedVideoAd | null;

        //#endregion 激励视频广告

        //#region 插屏广告

        /**
         * 创建插屏广告组件
         * @description 每次调用该方法创建插屏广告都会返回一个全新的实例
         * @param object - 创建参数
         * @returns 插屏广告组件（创建失败返回 null）
         * @example
         * ```javascript
         * let param = {};
         * param.adUnitId = "从平台获取的广告id";
         * let interstitialAd = ks.createInterstitialAd(param);
         * if (interstitialAd) {
         *  interstitialAd.onClose(res => {
         *      // 插屏广告关闭事件
         *  })
         *  interstitialAd.onError(res => {
         *      // 插屏广告Error事件
         *  })
         *  let p = interstitialAd.show()
         *  p.then(function(result){
         *      // 插屏广告展示成功
         *      console.log(`show interstitial ad success, result is ${result}`)
         *  }).catch(function(error){
         *      // 插屏广告展示失败
         *      console.log(`show interstitial ad failed, error is ${error}`)
         *      if (error.code === -10005) {
         *          // 表明当前app版本不支持插屏广告，可以提醒用户升级app版本
         *      }
         *  })
         * } else {
         *     console.log("创建插屏广告组件失败");
         * }
         * ```
         */
        createInterstitialAd: (
            object: CreateInterstitialAdOptions,
        ) => InterstitialAd | null;

        //#endregion 插屏广告

        //#region 小游戏试玩

        /**
         * 通知基础库展示试玩结束界面（仅适用于试玩广告场景）
         * @description 本接口仅适用于小游戏试玩，非小游戏标准接口；请自定义合适的试玩结束节点（如关卡结束）调用接口
         * @param object - 调用参数
         * @example
         * ```javascript
         * ks.notifyMiniProgramPlayableStatus({
         *   isEnd: true
         * })
         * ```
         */
        notifyMiniProgramPlayableStatus: (
            object: NotifyMiniProgramPlayableStatusOptions,
        ) => void;

        //#endregion 小游戏试玩

        //#region Banner广告

        /**
         * 创建 banner 广告组件
         * @description 快手安卓版本>=12.10.30，iOS版本>=12.10.40，低版本需做兼容处理，横屏暂不支持；请通过ks.getSystemInfoSync() 返回对象的快手版本号合法后再使用该 API。每次调用该方法创建 banner 广告都会返回一个全新的实例，全局只会存在一个Banner广告实例
         * @param object - 创建参数
         * @returns banner 广告组件
         */
        createBannerAd: (object: CreateBannerAdOptions) => BannerAd;

        //#endregion Banner广告

        //#endregion 广告

        //#region 界面

        //#region 交互

        /**
         * 显示消息提示框
         * @description ks.showLoading 和 ks.showToast 同时只能显示一个
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.showToast({
         *   title: '成功',
         *   icon: 'success',
         *   duration: 2000
         * })
         * ```
         */
        showToast: (object: ShowToastOptions) => void;

        /**
         * 显示模态对话框
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.showModal({
         *   title: '提示',
         *   content: '这是一个模态弹窗',
         *   success (res) {
         *     if (res.confirm) {
         *       console.log('用户点击确定')
         *     } else if (res.cancel) {
         *       console.log('用户点击取消')
         *     }
         *   }
         * })
         * ```
         */
        showModal: (object: ShowModalOptions) => void;

        /**
         * 显示 loading 提示框
         * @description 需主动调用 ks.hideLoading 才能关闭提示框；ks.showLoading 和 ks.showToast 同时只能显示一个，应与 ks.hideLoading 配对使用
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.showLoading({
         *   title: '加载中',
         * })
         *
         * setTimeout(function () {
         *   ks.hideLoading()
         * }, 2000)
         * ```
         */
        showLoading: (object: ShowLoadingOptions) => void;

        /**
         * 显示操作菜单
         * @description Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，尽量避免使用「取消」分支实现业务逻辑
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.showActionSheet({
         *   itemList: ['A', 'B', 'C'],
         *   success (res) {
         *     console.log(res.tapIndex)
         *   },
         *   fail (res) {
         *     console.log(res.errMsg)
         *   }
         * })
         * ```
         */
        showActionSheet: (object: ShowActionSheetOptions) => void;

        /**
         * 隐藏消息提示框
         * @param object - 入参选项
         */
        hideToast: (object?: HideToastLoadingOptions) => void;

        /**
         * 隐藏 loading 提示框
         * @param object - 入参选项
         */
        hideLoading: (object?: HideToastLoadingOptions) => void;

        //#endregion 交互

        //#endregion 界面

        //#region 网络

        //#region 发起请求

        /**
         * 发起 HTTPS 网络请求
         * @param object - 入参选项
         * @returns 请求任务对象
         * @example
         * ```javascript
         * ks.request({
         *   url: 'test.php', //仅为示例，并非真实的接口地址
         *   data: {
         *     x: '',
         *     y: ''
         *   },
         *   header: {
         *     'content-type': 'application/json' // 默认值
         *   },
         *   success (res) {
         *     console.log(res.data)
         *   }
         * })
         * ```
         * @example
         * ```javascript
         * const requestTask = ks.request({
         *   url: 'test.php', //仅为示例，并非真实的接口地址
         *   data: {
         *     x: '' ,
         *     y: ''
         *   },
         *   header: {
         *     'content-type': 'application/json'
         *   },
         *   success (res) {
         *     console.log(res.data)
         *   }
         * })
         * requestTask.abort() // 取消请求任务
         * ```
         */
        request: (object: RequestOptions) => RequestTask;

        //#endregion 发起请求

        //#region 下载

        /**
         * 下载文件资源到本地
         * @description 客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB；请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型
         * @param object - 入参选项
         * @returns 下载任务对象（可监听进度、取消下载）
         * @example
         * ```javascript
         * ks.downloadFile({
         *   url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
         *   success (res) {
         *     // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
         *     if (res.statusCode === 200) {
         *       console.log(res.tempFilePath)
         *     }
         *   }
         * })
         * ```
         * @example
         * ```javascript
         * const downloadTask = ks.downloadFile({
         *   url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
         *   success (res) {
         *     ks.playVoice({
         *       filePath: res.tempFilePath
         *     })
         *   }
         * })
         *
         * downloadTask.onProgressUpdate((res) => {
         *   console.log('下载进度', res.progress)
         *   console.log('已经下载的数据长度', res.totalBytesWritten)
         *   console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
         * })
         *
         * downloadTask.abort() // 取消下载任务
         * ```
         */
        downloadFile: (object: DownloadFileOptions) => DownloadTask;

        //#endregion 下载

        //#region 上传

        /**
         * 将本地资源上传到服务器
         * @description 客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data
         * @param object - 入参选项
         * @returns 上传任务对象（可监听进度、取消上传）
         * @example
         * ```javascript
         * ks.chooseImage({
         *   success (res) {
         *     const tempFilePaths = res.tempFilePaths
         *     ks.uploadFile({
         *       url: 'https://example.kuaishou.com/upload', //仅为示例，非真实的接口地址
         *       filePath: tempFilePaths[0],
         *       name: 'file',
         *       formData: {
         *         'user': 'test'
         *       },
         *       success (res){
         *         const data = res.data
         *         //do something
         *       }
         *     })
         *   }
         * })
         * ```
         * @example
         * ```javascript
         * const uploadTask = ks.uploadFile({
         *   url: 'http://example.kuaishou.com/upload', //仅为示例，非真实的接口地址
         *   filePath: tempFilePaths[0],
         *   name: 'file',
         *   formData:{
         *     'user': 'test'
         *   },
         *   success (res){
         *     const data = res.data
         *     //do something
         *   }
         * })
         *
         * uploadTask.onProgressUpdate((res) => {
         *   console.log('上传进度', res.progress)
         *   console.log('已经上传的数据长度', res.totalBytesSent)
         *   console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
         * })
         *
         * uploadTask.abort() // 取消上传任务
         * ```
         */
        uploadFile: (object: UploadFileOptions) => UploadTask;

        //#endregion 上传

        //#region WebSocket

        /**
         * 创建一个 WebSocket 连接
         * @description 最多可以同时存在 5 个 WebSocket 连接
         * @param object - 入参选项
         * @returns WebSocket 任务对象
         * @example
         * ```javascript
         * ks.connectSocket({
         *   url: 'wss://kuaishou.com',
         *   header:{
         *     'content-type': 'application/json'
         *   },
         *   protocols: ['protocol1']
         * })
         * ```
         */
        connectSocket: (object: ConnectSocketOptions) => SocketTask;

        //#endregion WebSocket

        //#endregion 网络

        //#region 转发

        /**
         * 主动拉起转发，进入选择通讯录界面
         * @param object - 分享参数
         * @example
         * ```javascript
         * ks.shareAppMessage({
         *   templateId: 'xxx',
         *   query: 'userId=123&gameLevel=5',
         *   success () {
         *     console.log('分享成功');
         *   },
         *   fail (err) {
         *     console.log('分享失败', err);
         *   },
         *   complete () {
         *     console.log('分享流程结束');
         *   }
         * });
         * ```
         */
        shareAppMessage: (object?: ShareAppMessageOptions) => void;

        //#endregion 转发'

        //#region 虚拟支付

        /**
         * 游戏支付接口
         * @description 回调结果并不代表购买流程完成，需要游戏服务器确定支付结果；使用该接口下单时，服务器回调字段包含 open_id（参与签名），不包含 game_user_id；iOS报错“用户id无效”（错误码113）需先调用登录
         * @param object - 支付参数
         * @example
         * ```javascript
         * let model = getOrderFromServer();//从服务器获取订单，包含签名
         * let params = {};
         * params.success = (result) => {
         *   this.content.string = "支付结果: " + JSON.stringify(result);
         * }
         * params.fail = (result) => {
         *   this.content.string = "支付失败: " + JSON.stringify(result);
         * }
         * params.zone_id              = model.zone_id
         * params.os                   = model.os
         * params.currency_type        = model.currency_type
         * params.buy_quantity         = model.buy_quantity
         * params.third_party_trade_no = model.third_party_trade_no
         * params.extension            = model.extension
         * params.sign                 = model.sign
         * params.goods_category       = model.goods_category
         * params.goods_name           = model.goods_name
         * params.product_type         = 1 // iOS支付必填
         * ks.requestGamePayment(params);
         * ```
         */
        requestGamePayment: (object: RequestGamePaymentOptions) => void;

        //#endregion 虚拟支付

        //#region 数据缓存

        /**
         * 将数据存储在本地缓存中指定的 key 中
         * @description 会覆盖掉原来该 key 对应的内容；除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用；单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
         * @param object - 存储参数
         * @example
         * ```javascript
         * ks.setStorage({
         *   key:"key",
         *   data:"value"
         * })
         * try {
         *   ks.setStorageSync('key', 'value')
         * } catch (e) { }
         * ```
         */
        setStorage: (object: SetStorageOptions) => void;

        /**
         * setStorage 的同步版本
         * @param key - 本地缓存中指定的 key
         * @param data - 需要存储的内容（只支持原生类型、Date、及能够通过JSON.stringify序列化的对象）
         * @throws {Error} 存储失败时抛出异常
         */
        setStorageSync: (key: string, data: any) => void;

        /**
         * 从本地缓存中移除指定 key
         * @param object - 移除参数
         * @example
         * ```javascript
         * ks.removeStorage({
         *   key: 'key',
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         * try {
         *   ks.removeStorageSync('key')
         * } catch (e) {
         *   // Do something when catch error
         * }
         * ```
         */
        removeStorage: (object: RemoveStorageOptions) => void;

        /**
         * removeStorage 的同步版本
         * @param key - 本地缓存中指定的 key
         * @throws {Error} 移除失败时抛出异常
         */
        removeStorageSync: (key: string) => void;

        /**
         * 从本地缓存中异步获取指定 key 的内容
         * @param object - 获取参数
         * @example
         * ```javascript
         * ks.getStorage({
         *   key: 'key',
         *   success (res) {
         *     console.log(res.data)
         *   }
         * })
         * try {
         *   var value = ks.getStorageSync('key')
         *   if (value) {
         *     // Do something with return value
         *   }
         * } catch (e) {
         *   // Do something when catch error
         * }
         * ```
         */
        getStorage: (object: GetStorageOptions) => void;

        /**
         * getStorage 的同步版本
         * @param key - 本地缓存中指定的 key
         * @returns key对应的内容
         * @throws {Error} 获取失败时抛出异常
         */
        getStorageSync: (key: string) => any;

        /**
         * 异步获取当前storage的相关信息
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.getStorageInfo({
         *   success (res) {
         *     console.log(res.keys)
         *     console.log(res.currentSize)
         *     console.log(res.limitSize)
         *   }
         * })
         * try {
         *   const res = ks.getStorageInfoSync()
         *   console.log(res.keys)
         *   console.log(res.currentSize)
         *   console.log(res.limitSize)
         * } catch (e) {
         *   // Do something when catch error
         * }
         * ```
         */
        getStorageInfo: (object?: GetStorageInfoOptions) => void;

        /**
         * getStorageInfo 的同步版本
         * @returns storage相关信息
         * @throws {Error} 获取失败时抛出异常
         */
        getStorageInfoSync: () => GetStorageInfoSuccessResult;

        /**
         * 清理本地数据缓存
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.clearStorage()
         * try {
         *   ks.clearStorageSync()
         * } catch(e) {
         *   // Do something when catch error
         * }
         * ```
         */
        clearStorage: (object?: ClearStorageOptions) => void;

        /**
         * clearStorage 的同步版本
         * @throws {Error} 清理失败时抛出异常
         */
        clearStorageSync: () => void;

        //#endregion 数据缓存

        //#region 媒体

        //#region 音频

        /**
         * 创建内部 audio 上下文 InnerAudioContext 对象
         * @returns 内部音频上下文实例
         * @example
         * ```javascript
         * const innerAudioContext = ks.createInnerAudioContext()
         * innerAudioContext.autoplay = true
         * innerAudioContext.src = 'your_audio_src'//音频资源的地址
         * innerAudioContext.onPlay(() => {
         *   console.log('开始播放')
         * })
         * innerAudioContext.onError((res) => {
         *   console.log(res.errMsg)
         *   console.log(res.errCode)
         * })
         * ```
         */
        createInnerAudioContext: () => InnerAudioContext;

        //#endregion 音频

        //#region 图片

        /**
         * 从本地相册选择图片或使用相机拍照
         * @param object - 选择图片参数
         * @example
         * ```javascript
         * ks.chooseImage({
         *   count: 1,
         *   sizeType: ['original', 'compressed'],
         *   sourceType: ['album', 'camera'],
         *   success (res) {
         *     // tempFilePath可以作为img标签的src属性显示图片
         *     const tempFilePaths = res.tempFilePaths
         *   }
         * })
         * ```
         */
        chooseImage: (object?: ChooseImageOptions) => void;

        /**
         * 保存图片到系统相册
         * @description 该 API 需要用户授权方可调用；暂不支持网络图片，需先通过 ks.downloadFile 下载后再保存
         * @param object - 保存图片参数
         * @example
         * ```javascript
         * ks.saveImageToPhotosAlbum({
         *   filePath: "path", // 暂不支持网络图片/本地图片地址，网络图片保存需要先调用 ks.downloadFile 下载图片
         *   success: function (res) {
         *     console.log("保存图片到相册成功");
         *   },
         *   fail: function (err) {
         *     if (err.code === -10005) {
         *       console.log("暂不支持该功能");
         *     } else {
         *       console.log("保存图片到相册失败", err.msg);
         *     }
         *   }
         * })
         * ```
         */
        saveImageToPhotosAlbum: (object: SaveImageToPhotosAlbumOptions) => void;

        //#endregion  图片

        //#region 视频

        /**
         * 创建视频对象
         * @description 视频组件支持快手双端版本>=12.11.20；透明canvas仅支持cocos引擎，暂不支持unity
         * @param object - 视频初始化参数
         * @returns 视频实例对象
         * @example
         * ```javascript
         * const video = ks.createVideo({
         *   x: 0,
         *   y: 0,
         *   width: 300,
         *   height: 200,
         *   src: 'https://example.com/video.mp4', // 支持CDN链接或本地下载后的路径
         *   autoplay: false,
         *   loop: false,
         *   objectFit: 'contain'
         * });
         *
         * // 播放视频
         * video.play();
         *
         * // 监听首帧事件
         * video.onCandraw((scale) => {
         *   console.log('视频宽高比：', scale);
         * });
         *
         * // 监听进度更新
         * video.onTimeUpdate((res) => {
         *   console.log('当前播放位置：', res.position, '总时长：', res.duration);
         * });
         *
         * // 监听错误事件
         * video.onError((errMsg) => {
         *   console.error('视频播放错误：', errMsg);
         * });
         * ```
         */
        createVideo: (object: CreateVideoOptions) => Video;

        //#endregion 视频

        //#endregion 媒体

        //#region 文件

        /**
         * 获取全局唯一的文件管理器
         * @returns 文件管理器实例
         * @example
         * ```javascript
         * // 获取文件管理器
         * const fs = ks.getFileSystemManager();
         *
         * // 异步判断文件是否存在
         * fs.access({
         *   path: `${ks.env.USER_DATA_PATH}/test.txt`,
         *   success: () => console.log('文件存在'),
         *   fail: (err) => console.log('文件不存在', err.errMsg)
         * });
         *
         * // 同步创建目录
         * try {
         *   fs.mkdirSync(`${ks.env.USER_DATA_PATH}/testDir`, true);
         *   console.log('目录创建成功');
         * } catch (e) {
         *   console.error('创建目录失败', e.message);
         * }
         *
         * // 异步写入文件
         * fs.writeFile({
         *   filePath: `${ks.env.USER_DATA_PATH}/test.txt`,
         *   data: 'hello world',
         *   encoding: 'utf8',
         *   success: () => console.log('文件写入成功'),
         *   fail: (err) => console.error('写入失败', err.errMsg)
         * });
         *
         * // 同步读取文件
         * try {
         *   const data = fs.readFileSync(`${ks.env.USER_DATA_PATH}/test.txt`, 'utf8');
         *   console.log('文件内容：', data);
         * } catch (e) {
         *   console.error('读取文件失败', e.message);
         * }
         *
         * // 异步获取文件Stats
         * fs.stat({
         *   path: `${ks.env.USER_DATA_PATH}/testDir`,
         *   recursive: true,
         *   success: (res) => {
         *     Object.keys(res.stats).forEach(path => {
         *       console.log(path, res.stats[path].isDirectory());
         *     });
         *   }
         * });
         * ```
         */
        getFileSystemManager: () => FileSystemManager;

        //#endregion 文件

        //#region 开放接口

        //#region 用户信息

        /**
         * 获取用户信息
         * @description 若用户已授权，可获取用户信息；需注意用户可能修改昵称/头像，需重新获取保证信息有效
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.getUserInfo({
         *   success: (result) => {
         *     console.log("获取用户信息成功：" + JSON.stringify(result));
         *   },
         *   fail: (error) => {
         *     console.log("获取用户信息失败: " + JSON.stringify(error));
         *   },
         *   complete:() => {
         *     console.log("获取用户信息完成");
         *   }
         * });
         * ```
         */
        getUserInfo: (object: GetUserInfoOptions) => void;

        //#endregion 用户信息

        //#region 登录

        /**
         * 获取用户临时登录凭证 code
         * @description 前端获取 code 后传给服务器，用于换取 open_id、session_key 等用户身份标识
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.login({
         *   success: function(res) {
         *     console.log(res.code);
         *   },
         *   fail: function(error) {
         *     console.error(error);
         *   },
         *   complete: function() {
         *     console.log("login complete");
         *   }
         * })
         * ```
         */
        login: (object: LoginOptions) => void;

        /**
         * 检查登录态是否过期
         * @description session_key 有有效期，频繁使用小游戏可延长有效期；未过期时调用 login 会刷新会话，导致旧 session_key 失效
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.checkSession({
         *   success: function() {
         *     //登录态有效
         *   },
         *   fail: function() {
         *     // 错误处理
         *   }
         * })
         * ```
         */
        checkSession: (object: CheckSessionOptions) => void;

        //#endregion 登录

        //#region 授权

        /**
         * 向用户发起授权请求
         * @description 1. 未授权过则弹窗询问；2. 已同意授权则直接返回成功；3. 已拒绝授权则直接返回失败；userInfo授权需先调用ks.login
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.authorize({
         *   scope: "scope.userInfo",
         *   success: () => {
         *     console.log("授权获取用户信息成功");
         *   },
         *   fail: (error) => {
         *     console.log("授权获取用户信息失败: " + JSON.stringify(error));
         *   },
         *   complete:() => {
         *     console.log("授权获取用户信息完成");
         *   }
         * });
         * ```
         */
        authorize: (object: AuthorizeOptions) => void;

        /**
         * 异步获取当前用户的权限设置
         * @description 返回值中仅包含已请求过的权限
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.getSetting({
         *   success: (res) => {
         *     console.log("用户信息授权状态：", res.result['scope.userInfo']);
         *     console.log("保存相册授权状态：", res.result['scope.writePhotosAlbum']);
         *   },
         *   fail: (error) => {
         *     console.log("获取权限设置失败: " + JSON.stringify(error));
         *   }
         * });
         * ```
         */
        getSetting: (object: GetSettingOptions) => void;

        //#endregion 授权

        //#endregion 开放接口

        //#region 分包

        /**
         * 加载子包
         * @description 调用成功后子包目录下的 game.js 文件会被自动执行
         * @param object - 接口入参
         * @returns 加载分包任务实例，可监听加载进度
         * @example
         * ```javascript
         * let launchScene = "sence2"; //您的子包名称
         * let loadTask   =  ks.loadSubpackage({
         *   name:launchScene,
         *   success:function(res){
         *     // 执行需要的逻辑，如加载场景
         *   },
         *   fail:function (err) {
         *     console.log(err);
         *   }
         * });
         *
         * loadTask.onProgressUpdate(res=>{
         *   console.log(res);
         * });
         * ```
         */
        loadSubpackage: (object: LoadSubpackageOptions) => LoadSubpackageTask;

        //#endregion 分包

        //#region 设备

        //#region 设备方向

        /**
         * 开始监听设备方向的变化
         * @param object - 接口入参，包含回调频率、各类回调函数
         * @example
         * ```javascript
         * // 开始监听（游戏级频率）
         * ks.startDeviceMotionListening({
         *   interval: 'game',
         *   success: () => console.log('开始监听设备方向成功'),
         *   fail: (err) => console.error('开始监听失败', err)
         * });
         *
         * // 监听方向变化
         * ks.onDeviceMotionChange((res) => {
         *   console.log('设备方向：', res.alpha, res.beta, res.gamma);
         * });
         * ```
         */
        startDeviceMotionListening: (
            object?: StartDeviceMotionListeningOptions,
        ) => void;

        /**
         * 停止监听设备方向的变化
         * @param object - 接口入参，包含各类回调函数
         * @example
         * ```javascript
         * // 停止监听
         * ks.stopDeviceMotionListening({
         *   success: () => console.log('停止监听设备方向成功')
         * });
         *
         * // 取消所有方向变化监听
         * ks.offDeviceMotionChange();
         * ```
         */
        stopDeviceMotionListening: (
            object?: StopDeviceMotionListeningOptions,
        ) => void;

        /**
         * 监听设备方向变化事件
         * @description 回调频率由 startDeviceMotionListening 的 interval 参数决定
         * @param callback - 方向变化回调函数，参数包含 alpha/beta/gamma 角度值
         */
        onDeviceMotionChange: (
            callback: (res: DeviceMotionChangeResult) => void,
        ) => void;

        /**
         * 取消监听设备方向变化事件
         * @description 参数为空则取消所有监听
         * @param callback - 要取消的回调函数（可选）
         */
        offDeviceMotionChange: (
            callback?: (res: DeviceMotionChangeResult) => void,
        ) => void;

        //#endregion 设备方向

        //#region 键盘

        /**
         * 更新键盘输入框内容
         * @description 仅当键盘处于拉起状态时生效
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.updateKeyboard({
         *   value: '新的输入内容',
         *   success: () => console.log('输入框内容更新成功'),
         *   fail: (err) => console.error('更新失败', err)
         * });
         * ```
         */
        updateKeyboard: (object: UpdateKeyboardOptions) => void;

        /**
         * 显示键盘
         * @param object - 接口入参（包含默认值、最大长度等必填项）
         * @example
         * ```javascript
         * ks.showKeyboard({
         *   defaultValue: '默认输入内容',
         *   maxLength: 20,
         *   multiple: false,
         *   confirmHold: true,
         *   confirmType: 'done',
         *   success: () => console.log('键盘显示成功')
         * });
         * ```
         */
        showKeyboard: (object: ShowKeyboardOptions) => void;

        /**
         * 隐藏键盘
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.hideKeyboard({
         *   success: () => console.log('键盘隐藏成功')
         * });
         * ```
         */
        hideKeyboard: (object?: HideKeyboardOptions) => void;

        /**
         * 监听键盘输入事件
         * @param callback - 输入回调函数，参数包含当前输入值
         * @example
         * ```javascript
         * ks.onKeyboardInput((res) => {
         *   console.log('当前输入值：', res.value);
         * });
         * ```
         */
        onKeyboardInput: (callback: (res: KeyboardEventResult) => void) => void;

        /**
         * 监听用户点击键盘 Confirm 按钮的事件
         * @param callback - 确认回调函数，参数包含当前输入值
         * @example
         * ```javascript
         * ks.onKeyboardConfirm((res) => {
         *   console.log('点击完成，输入值：', res.value);
         * });
         * ```
         */
        onKeyboardConfirm: (
            callback: (res: KeyboardEventResult) => void,
        ) => void;

        /**
         * 监听键盘收起的事件
         * @param callback - 收起回调函数，参数包含当前输入值
         * @example
         * ```javascript
         * ks.onKeyboardComplete((res) => {
         *   console.log('键盘收起，最终输入值：', res.value);
         * });
         * ```
         */
        onKeyboardComplete: (
            callback: (res: KeyboardEventResult) => void,
        ) => void;

        /**
         * 取消监听键盘输入事件
         * @param callback - 键盘输入事件的回调函数
         * @example
         * ```javascript
         * const inputCallback = (res) => console.log(res.value);
         * ks.offKeyboardInput(inputCallback);
         * ```
         */
        offKeyboardInput: (
            callback: (res: KeyboardEventResult) => void,
        ) => void;

        /**
         * 取消监听键盘 Confirm 按钮点击事件
         * @param callback - 用户点击键盘 Confirm 按钮时的事件的回调函数
         */
        offKeyboardConfirm: (
            callback: (res: KeyboardEventResult) => void,
        ) => void;

        /**
         * 取消监听键盘收起事件
         * @param callback - 监听键盘收起的事件的回调函数
         */
        offKeyboardComplete: (
            callback: (res: KeyboardEventResult) => void,
        ) => void;

        //#endregion 键盘

        //#region 加速计

        /**
         * 开始监听加速度数据
         * @param object - 接口入参，包含回调频率、各类回调函数
         * @example
         * ```javascript
         * // 开始监听（游戏级频率）
         * ks.startAccelerometer({
         *   interval: 'game',
         *   success: () => console.log('开始监听加速度数据成功'),
         *   fail: (err) => console.error('开始监听失败', err)
         * });
         * ```
         */
        startAccelerometer: (object?: StartAccelerometerOptions) => void;

        /**
         * 停止监听加速度数据
         * @param object - 接口入参，包含各类回调函数
         * @example
         * ```javascript
         * ks.stopAccelerometer({
         *   success: () => console.log('停止监听加速度数据成功')
         * });
         * ```
         */
        stopAccelerometer: (object?: StopAccelerometerOptions) => void;

        /**
         * 监听加速度数据事件
         * @description 回调频率由 startAccelerometer 的 interval 参数决定，调用后自动开始监听
         * @param callback - 加速度数据回调函数，参数包含 X/Y/Z 轴数据
         * @example
         * ```javascript
         * ks.onAccelerometerChange((res) => {
         *   console.log('加速度数据：', res.x, res.y, res.z);
         * });
         * ```
         */
        onAccelerometerChange: (
            callback: (res: AccelerometerChangeResult) => void,
        ) => void;

        /**
         * 取消监听加速度数据事件
         * @description 参数为空则取消所有的事件监听
         * @param callback - 加速度数据事件的回调函数（可选）
         * @example
         * ```javascript
         * // 取消指定回调
         * const accelCallback = (res) => console.log(res.x, res.y, res.z);
         * ks.offAccelerometerChange(accelCallback);
         *
         * // 取消所有监听
         * ks.offAccelerometerChange();
         * ```
         */
        offAccelerometerChange: (
            callback?: (res: AccelerometerChangeResult) => void,
        ) => void;

        //#endregion 加速计

        //#region 罗盘

        /**
         * 开始监听罗盘数据
         * @param object - 接口入参，包含各类回调函数
         * @example
         * ```javascript
         * ks.startCompass({
         *   success: () => console.log('开始监听罗盘数据成功'),
         *   fail: (err) => console.error('开始监听失败', err)
         * });
         * ```
         */
        startCompass: (object?: StartCompassOptions) => void;

        /**
         * 停止监听罗盘数据
         * @param object - 接口入参，包含各类回调函数
         * @example
         * ```javascript
         * ks.stopCompass({
         *   success: () => console.log('停止监听罗盘数据成功')
         * });
         * ```
         */
        stopCompass: (object?: StopCompassOptions) => void;

        /**
         * 监听罗盘数据变化事件
         * @description 频率为5次/秒，调用后自动开始监听，可通过 stopCompass 停止
         * @param callback - 罗盘数据回调函数，参数包含方向度数、精度（区分 iOS/Android 平台差异）
         * @example
         * ```javascript
         * ks.onCompassChange((res) => {
         *   console.log('方向度数：', res.direction);
         *   console.log('精度：', res.accuracy); // iOS 为数字，Android 为字符串枚举
         * });
         * ```
         */
        onCompassChange: (callback: (res: CompassChangeResult) => void) => void;

        /**
         * 取消监听罗盘数据变化事件
         * @description 参数为空则取消所有的事件监听
         * @param callback - 罗盘数据变化事件的回调函数（可选）
         * @example
         * ```javascript
         * // 取消指定回调
         * const compassCallback = (res) => console.log(res.direction);
         * ks.offCompassChange(compassCallback);
         *
         * // 取消所有监听
         * ks.offCompassChange();
         * ```
         */
        offCompassChange: (
            callback?: (res: CompassChangeResult) => void,
        ) => void;

        //#endregion 罗盘

        //#region 网络

        /**
         * 获取设备当前所处的网络类型
         * @param object - 接口入参，包含成功/失败/完成回调
         * @example
         * ```javascript
         * ks.getNetworkType({
         *   success(res) {
         *     console.log(`${res.networkType}`);
         *   },
         *   fail(res) {
         *     console.log(`getNetworkType调用失败`);
         *   },
         * });
         * ```
         */
        getNetworkType: (object?: GetNetworkTypeOptions) => void;

        /**
         * 监听网络状态变化
         * @param callback - 网络状态变化的事件回调函数，参数包含网络类型、是否有连接
         * @example
         * ```javascript
         * ks.onNetworkStatusChange(function (res) {
         *   console.log(res.isConnected)
         *   console.log(res.networkType)
         * })
         * ```
         */
        onNetworkStatusChange: (
            callback: (res: NetworkStatusChangeResult) => void,
        ) => void;

        /**
         * 移除网络状态变化事件的监听函数
         * @description 不传参数则移除所有监听函数；需传入与监听时同一个函数对象才能精准移除
         * @param listener - 网络状态变化的事件回调函数（可选）
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * ks.onNetworkStatusChange(listener)
         * ks.offNetworkStatusChange(listener) // 移除指定监听
         *
         * // 移除所有监听
         * ks.offNetworkStatusChange();
         * ```
         */
        offNetworkStatusChange: (
            listener?: (res: NetworkStatusChangeResult) => void,
        ) => void;

        //#endregion 网络

        //#region 陀螺仪

        /**
         * 开始监听陀螺仪数据
         * @param object - 接口入参，包含回调频率、各类回调函数
         * @example
         * ```javascript
         * // 开始监听（游戏级频率）
         * ks.startGyroscope({
         *   interval: 'game',
         *   success: () => console.log('开始监听陀螺仪数据成功'),
         *   fail: (err) => console.error('开始监听失败', err)
         * });
         * ```
         */
        startGyroscope: (object?: StartGyroscopeOptions) => void;

        /**
         * 停止监听陀螺仪数据
         * @param object - 接口入参，包含各类回调函数
         * @example
         * ```javascript
         * ks.stopGyroscope({
         *   success: () => console.log('停止监听陀螺仪数据成功')
         * });
         * ```
         */
        stopGyroscope: (object?: StopGyroscopeOptions) => void;

        /**
         * 监听陀螺仪数据变化事件
         * @description 回调频率由 startGyroscope 的 interval 参数决定，可通过 stopGyroscope 停止监听
         * @param callback - 陀螺仪数据回调函数，参数包含 X/Y/Z 轴角速度
         * @example
         * ```javascript
         * ks.onGyroscopeChange((res) => {
         *   console.log('陀螺仪角速度：', res.x, res.y, res.z);
         * });
         * ```
         */
        onGyroscopeChange: (
            callback: (res: GyroscopeChangeResult) => void,
        ) => void;

        /**
         * 取消监听陀螺仪数据变化事件
         * @param callback - 陀螺仪数据变化事件的回调函数
         * @example
         * ```javascript
         * const gyroCallback = (res) => console.log(res.x, res.y, res.z);
         * ks.onGyroscopeChange(gyroCallback);
         * // 取消指定回调
         * ks.offGyroscopeChange(gyroCallback);
         * ```
         */
        offGyroscopeChange: (
            callback: (res: GyroscopeChangeResult) => void,
        ) => void;

        //#endregion 陀螺仪

        //#region 性能

        /**
         * 监听内存不足告警事件
         * @description iOS/Android 向小游戏进程发出内存警告时触发；触发不意味小游戏被杀，可回收不必要资源缓解内存紧张
         * @param callback - 内存不足告警回调函数，参数包含 Android 专属的告警等级
         * @example
         * ```javascript
         * ks.onMemoryWarning(function (res) {
         *   console.log('onMemoryWarningReceive', res.level); // Android 可获取等级，iOS 无
         * })
         * ```
         */
        onMemoryWarning: (callback: (res: MemoryWarningResult) => void) => void;

        /**
         * 取消监听内存不足告警事件
         * @param callback - 内存不足告警事件的回调函数
         * @example
         * ```javascript
         * const warningCallback = function (res) {
         *   console.log('onMemoryWarningReceive', res.level);
         * };
         * ks.onMemoryWarning(warningCallback);
         * // 取消指定回调
         * ks.offMemoryWarning(warningCallback);
         * ```
         */
        offMemoryWarning: (
            callback: (res: MemoryWarningResult) => void,
        ) => void;

        //#endregion 性能

        //#region 震动

        /**
         * 使手机发生较短时间的振动（15 ms）
         * @description 仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
         * @param object - 接口入参，包含必填的震动强度类型、各类回调函数
         * @example
         * ```javascript
         * ks.vibrateShort({
         *   type: 'medium',
         *   success: () => console.log('短振动成功'),
         *   fail: (res) => console.error('短振动失败：', res.errMsg)
         * });
         * ```
         */
        vibrateShort: (object: VibrateShortOptions) => void;

        /**
         * 使手机发生较长时间的振动（400 ms）
         * @param object - 接口入参，包含各类回调函数
         * @example
         * ```javascript
         * ks.vibrateLong({
         *   success: () => console.log('长振动成功'),
         *   fail: (err) => console.error('长振动失败：', err)
         * });
         * ```
         */
        vibrateLong: (object?: VibrateLongOptions) => void;

        //#endregion 震动

        //#endregion 设备

        //#region 游戏对局回放

        /**
         * 获取全局唯一的游戏画面录制对象
         * @returns 全局唯一的 GameRecorder 实例
         * @example
         * ```javascript
         * // 获取录制实例
         * const recorder = ks.getGameRecorder();
         *
         * // 监听错误事件
         * recorder.on('error', res => {
         *   console.log('错误码', res.error.code);
         *   console.log('错误信息', res.error.msg);
         *   if (res.error.code === ks.error.GameRecorder_StartWhileAlreadyStartRecording) {
         *     // 处理重复开始录制的错误
         *   }
         * });
         *
         * // 开始录制
         * recorder.start();
         *
         * // 暂停录制
         * recorder.pause().then(() => {
         *   console.log('录制已暂停');
         * }).catch(err => {
         *   console.error('暂停失败', err);
         * });
         *
         * // 恢复录制
         * recorder.resume().then(() => {
         *   console.log('录制已恢复');
         * });
         *
         * // 停止录制并发布
         * recorder.stop().then(() => {
         *   recorder.publishVideo({
         *     callback: (error) => {
         *       if (error) {
         *         console.log("分享录屏失败: " + JSON.stringify(error));
         *         return;
         *       }
         *       console.log("分享录屏成功");
         *     }
         *   });
         * }).catch(err => {
         *   console.error('停止录制失败', err);
         * });
         * ```
         */
        getGameRecorder(): GameRecorder;

        //#endregion 游戏对局回放

        //#region 添加到桌面

        /**
         * 添加小游戏快捷方式到手机桌面
         * @description iOS 不支持任何回调；Android 支持 success/fail/complete 回调
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.addShortcut({
         *   success() {
         *     console.log("添加桌面成功");
         *   },
         *   fail(err) {
         *     if (err.code === -10005) {
         *         console.log("暂不支持该功能");
         *     } else {
         *         console.log("添加桌面失败", err.msg);
         *     }
         *   },
         * });
         * ```
         */
        addShortcut: (object: AddShortcutOptions) => void;

        /**
         * 检查小游戏快捷方式是否已添加到桌面
         * @description 仅 Android 支持；快捷方式/mini apk 任一安装则 installed 为 true
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.checkShortcut({
         *   success(res) {
         *     console.log("是否已添加快捷方式", res.installed);
         *   },
         *   fail(err) {
         *     if (err.code === -10005) {
         *         console.log("暂不支持该功能");
         *     } else {
         *         console.log("检查快捷方式失败", err.msg);
         *     }
         *   },
         * });
         * ```
         */
        checkShortcut: (object: CheckShortcutOptions) => void;

        /**
         * 判断小游戏是否从桌面快捷方式启动
         * @description 推荐在 ks.onShow 回调中调用，不推荐在冷启动入口调用
         * @returns true 表示从桌面快捷方式启动，false 反之
         * @example
         * ```javascript
         * if (ks.isLaunchFromShortcut()) {
         *   // 从桌面快捷方式启动
         * } else {
         *   // 非桌面快捷方式启动
         * }
         * ```
         */
        isLaunchFromShortcut: () => boolean;

        //#endregion 添加到桌面

        //#region 设为常用

        /**
         * 将小游戏设为常用
         * @param object - 接口入参，包含成功/失败/完成回调
         * @example
         * ```javascript
         * ks.addCommonUse({
         *   success() {
         *     console.log("设为常用成功");
         *   },
         *   fail(err) {
         *     if (err.code === -10005) {
         *         console.log("暂不支持该功能");
         *     } else {
         *         console.log("设为常用失败", err.msg);
         *     }
         *   },
         * });
         * ```
         */
        addCommonUse: (object: AddCommonUseOptions) => void;

        /**
         * 检查用户是否已将小游戏设为常用
         * @param object - 接口入参，包含成功/失败/完成回调
         * @example
         * ```javascript
         * ks.checkCommonUse({
         *   success(res) {
         *     console.log(`设为常用查询结果为：${res.isCommonUse}`);
         *   },
         *   fail(err) {
         *     if (err.code === -10005) {
         *         console.log("暂不支持该功能");
         *     } else {
         *         console.log("设为常用查询失败", err.msg);
         *     }
         *   },
         * });
         * ```
         */
        checkCommonUse: (object: CheckCommonUseOptions) => void;

        //#endregion 设为常用

        //#region 官方号、CP服务号

        /**
         * 查看关注官方帐号的状态
         * @param object - 接口入参，包含帐号类型、回调函数
         * @example
         * ```javascript
         * // 检查是否关注CP服务号
         * function checkFollowCPServiceAccount() {
         *   ks.checkFollowState({
         *     accountType: "CPServiceAccount",
         *     callback: (result) => {
         *       if (result.errorCode === -10005) {
         *         console.log("not support CPServiceAccount");
         *       } else {
         *         console.log(`关注状态：${JSON.stringify(result)}`);
         *       }
         *     }
         *   });
         * }
         * ```
         */
        checkFollowState: (object: CheckFollowStateOptions) => void;

        /**
         * 打开官方帐号的Profile页面
         * @param object - 接口入参，包含帐号类型、回调函数
         * @example
         * ```javascript
         * // 打开快手小游戏官方号Profile
         * function openMiniGameOfficialProfile() {
         *   ks.checkFollowState({
         *     accountType: "MiniGameOfficialAccount",
         *     callback: (result) => {
         *       if (result.errorCode === -10005) {
         *         console.log("not support MiniGameOfficialAccount");
         *       } else {
         *         ks.openUserProfile({
         *           accountType: "MiniGameOfficialAccount",
         *           callback: (result) => {
         *             console.log(`打开Profile结果：${JSON.stringify(result)}`);
         *           }
         *         });
         *       }
         *     }
         *   });
         * }
         * ```
         */
        openUserProfile: (object: OpenUserProfileOptions) => void;

        //#endregion 官方号、CP服务号

        //#region 侧边栏

        /**
         * 判断侧边栏是否可用
         * @description 支持版本：安卓>=12.11.10、iOS>=12.11.10，低版本需做兼容处理
         * @param object - 接口入参，包含成功/失败回调
         * @example
         * ```javascript
         * ks.checkSliderBarIsAvailable({
         *   success: (result) => {
         *     let { available } = result;
         *     if (available) {
         *       console.log("侧边栏可用");
         *     }
         *   },
         *   fail: (error) => {
         *     console.log("checkSliderBarIsAvailable fail: ", error);
         *   },
         * });
         * ```
         */
        checkSliderBarIsAvailable: (
            object: CheckSliderBarIsAvailableOptions,
        ) => void;

        /**
         * 跳转到小游戏入口场景
         * @description 支持版本：安卓>=13.4.40、iOS>=13.5.40，低版本需做兼容处理
         * @param object - 接口入参，包含场景类型、成功/失败/完成回调
         * @example
         * ```javascript
         * ks.navigateToScene({
         *   scene: "sidebar",
         *   success: (res) => {
         *     console.log("navigate to scene success");
         *   },
         *   fail: (res) => {
         *     console.log("navigate to scene fail: ", res);
         *     // 针对常见错误码处理
         *     if (res.code === -10005) {
         *       console.log("当前版本不支持跳转侧边栏，请升级快手App");
         *     } else if (res.code === -20043) {
         *       console.log("scene参数不合法，请检查是否为'sidebar'");
         *     }
         *   },
         * });
         * ```
         */
        navigateToScene: (object: NavigateToSceneOptions) => void;

        //#endregion 侧边栏

        //#region 游戏圈

        /**
         * 跳转到游戏圈
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.jumpToGameClub({
         *   success(res) {
         *     console.log("成功跳转到游戏圈");
         *   },
         *   fail(err) {
         *     if (err.code === -10005) {
         *       console.log("暂不支持该功能");
         *     } else if (err.code === -100010) {
         *       console.log("游戏圈未开通");
         *     } else {
         *       console.log("跳转游戏圈失败", err.msg);
         *     }
         *   },
         * });
         * ```
         */
        jumpToGameClub: (object: JumpToGameClubOptions) => void;

        /**
         * 图片分享至游戏圈
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.shareImageToGameClub({
         *   path: 'https://cdn.pixabay.com/photo/2025/01/11/21/43/dragonfly-9326948_1280.jpg',
         *   success(res) {
         *     console.log("发布成功");
         *   },
         *   fail(err) {
         *     if (err.code === -10005) {
         *       console.log("暂不支持该功能");
         *     } else if (err.code === -100010) {
         *       console.log("游戏圈未开通");
         *     } else {
         *       console.log("发布失败", err.msg);
         *     }
         *   },
         * });
         * ```
         */
        shareImageToGameClub: (object: ShareImageToGameClubOptions) => void;

        /**
         * 从相册选择视频+图片发布
         * @description 支持版本 >= 13.3.40
         * @param object - 接口入参
         * @example
         * ```javascript
         * ks.chooseVideoAndPublish({
         *   type: 2,
         *   mouldId: '1',
         *   success(res) {
         *     console.log("发布成功");
         *   },
         *   fail(err) {
         *     if (err.code === -10005) {
         *       console.log("暂不支持该功能");
         *     } else {
         *       console.log("发布失败", err.msg);
         *     }
         *   },
         * });
         * ```
         */
        chooseVideoAndPublish: (object: ChooseVideoAndPublishOptions) => void;

        //#endregion 游戏圈

        //#region 数据分析

        /**
         * 游戏启动阶段自定义场景数据上报
         * @description 支持版本：安卓>=13.5.40、iOS>=13.5.40，低版本需做兼容处理；同一个sceneId每次启动仅可上报一次
         * @param object - 接口入参，包含场景ID、耗时、自定义维度/指标等
         * @example
         * ```javascript
         * ks.reportScene({
         *     sceneId: 7001,
         *     costTime: 1000,
         *     dimension: {
         *         d1: "value"
         *     },
         *     metric: {
         *         m1: "1000"
         *     },
         *     success: (res) => {
         *         console.log("reportScene success", res.data);
         *     },
         *     fail: (res) => {
         *         console.log("reportScene fail: ", res.errNo, res.errMsg);
         *         // 针对常见错误码处理
         *         if (res.errNo === 20001) {
         *             console.log("参数校验失败，请检查sceneId/维度/指标格式");
         *         } else if (res.errNo === -20001) {
         *             console.log("系统内部异常，请重试");
         *         }
         *     },
         * });
         * ```
         */
        reportScene: (object: ReportSceneOptions) => void;

        //#endregion 数据分析
    }
    /**
     * Banner 广告组件的样式配置
     */
    interface BannerAdStyle {
        /** banner 广告组件的左上角横坐标（必填） */
        left: number;
        /** banner 广告组件的左上角纵坐标（必填） */
        top: number;
        /**
         * banner 广告组件的宽度（必填）
         * @description 最小 308，最大至屏幕宽度（屏幕宽度可通过 ks.getSystemInfoSync() 获取）
         */
        width: number;
        /** banner 广告组件的高度（必填） */
        height: number;
    }

    /**
     * 创建 Banner 广告组件的入参
     */
    interface CreateBannerAdOptions {
        /** 广告单元 id（必填） */
        adUnitId: string;
        /**
         * 广告自动刷新的间隔时间（单位：秒）
         * @description 参数值必须大于等于30，不传入时 Banner 广告不会自动刷新
         */
        adIntervals?: number;
        /** banner 广告组件的样式（必填） */
        style: BannerAdStyle;
    }

    /**
     * Banner 广告尺寸变化事件的回调参数
     */
    interface BannerAdResizeResult {
        /** banner 广告组件的左上角横坐标 */
        left: number;
        /** banner 广告组件的左上角纵坐标（文档标注为 ltop，保持与官方一致） */
        ltop: number;
        /** 调整后的宽度 */
        width: number;
        /** 调整后的高度 */
        height: number;
    }

    /**
     * Banner 广告错误事件的回调参数
     */
    interface BannerAdErrorResult {
        /** 错误信息 */
        errMsg: string;
        /** 错误码 */
        errCode: number;
    }

    /**
     * Banner 广告组件
     * @description banner 广告组件是一个原生组件，层级比普通组件高。默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行调整，调整后的尺寸将通过 BannerAd.onResize() 事件中提供
     */
    interface BannerAd {
        /** 广告单元 id */
        adUnitId: string;
        /**
         * 广告自动刷新的间隔时间（单位：秒）
         * @description 参数值必须大于等于30，不传入时 Banner 广告不会自动刷新
         */
        adIntervals?: number;
        /**
         * banner 广告组件的样式
         * @description style 上的属性的值仅为开发者设置的值，调整后的真实尺寸需要通过 BannerAd.onResize() 事件获得
         */
        style: BannerAdStyle;

        /**
         * 显示 banner 广告
         * @returns banner 广告显示操作的结果
         */
        show: () => Promise<any>;

        /** 隐藏 banner 广告 */
        hide: () => void;

        /** 销毁 banner 广告 */
        destroy: () => void;

        /**
         * 监听 banner 广告尺寸变化事件
         * @param listener - 尺寸变化事件的监听函数
         */
        onResize: (listener: (res: BannerAdResizeResult) => void) => void;

        /**
         * 移除 banner 广告尺寸变化事件的监听函数
         * @param listener - onResize 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * BannerAd.onResize(listener)
         * BannerAd.offResize(listener) // 需传入与监听时同一个的函数对象
         * ```
         */
        offResize: (listener?: (res: BannerAdResizeResult) => void) => void;

        /**
         * 监听 banner 广告加载事件
         * @param listener - 加载事件的监听函数
         */
        onLoad: (listener: () => void) => void;

        /**
         * 移除 banner 广告加载事件的监听函数
         * @param listener - onLoad 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * BannerAd.onLoad(listener)
         * BannerAd.offLoad(listener) // 需传入与监听时同一个的函数对象
         * ```
         */
        offLoad: (listener?: () => void) => void;

        /**
         * 监听 banner 广告错误事件
         * @param listener - 错误事件的监听函数
         */
        onError: (listener: (res: BannerAdErrorResult) => void) => void;

        /**
         * 移除 banner 广告错误事件的监听函数
         * @param listener - onError 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * BannerAd.onError(listener)
         * BannerAd.offError(listener) // 需传入与监听时同一个的函数对象
         * ```
         */
        offError: (listener?: (res: BannerAdErrorResult) => void) => void;

        /**
         * 监听Banner广告关闭事件
         * @param listener - 原生Banner广告关闭事件的监听函数
         */
        onClose: (listener: () => void) => void;

        /**
         * 移除Banner广告关闭事件的监听函数
         * @param listener - onClose 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * Banner.onClose(listener)
         * ```
         */
        offClose: (listener?: () => void) => void;
    }
    /**
     * 创建插屏广告组件的入参
     */
    interface CreateInterstitialAdOptions {
        /** 广告id（必填） */
        adUnitId: string;
    }

    /**
     * onError 回调函数的参数（插屏广告）
     */
    interface InterstitialAdErrorResult {
        /** 错误信息 */
        msg: string;
        /**
         * 错误码
         * @description 合法值：-20037（插屏播放失败）、-10005（当前app版本不支持插屏广告）
         */
        code: number;
    }

    /**
     * 插屏广告组件
     * @description 插屏广告组件是一个原生组件，层级比普通组件高。插屏广告组件每次创建都会返回一个全新的实例，默认是隐藏的，需要调用 InterstitialAd.show() 将其显示
     */
    interface InterstitialAd {
        /**
         * 显示插屏广告
         * @returns 插屏广告显示操作的结果，如果插屏广告显示失败，会返回一个rejected Promise
         */
        show: () => Promise<any>;

        /** 销毁插屏广告实例 */
        destroy: () => void;

        /**
         * 监听插屏错误事件
         * @param callback - 插屏错误事件的回调函数
         */
        onError: (callback: (res: InterstitialAdErrorResult) => void) => void;

        /**
         * 取消监听插屏错误事件
         * @param callback - 插屏错误事件的回调函数
         */
        offError: (callback: (res: InterstitialAdErrorResult) => void) => void;

        /**
         * 监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         */
        onClose: (callback: (res?: any) => void) => void;

        /**
         * 取消监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         */
        offClose: (callback: (res?: any) => void) => void;
    }
    /**
     * notifyMiniProgramPlayableStatus 接口的入参
     * @description 本接口仅适用于小游戏试玩，非小游戏标准接口
     */
    interface NotifyMiniProgramPlayableStatusOptions {
        /**
         * 是否结束试玩
         * @description 只支持true
         * @since 12.7.20
         * @required 是
         */
        isEnd: boolean;
    }
    /**
     * 创建激励视频广告组件的入参
     */
    interface CreateRewardedVideoAdOptions {
        /** 广告id（必填） */
        adUnitId: string;
        /**
         * 是否开启再得广告模式（只支持安卓系统的快手和快手极速版）
         * @default false
         * @since 11.11.40
         */
        multiton?: boolean;
        /**
         * 再得广告的奖励文案，玩家每看完一个广告会展示，如【再看1个获得xx】；xx就multitonRewardMsg中的文案，按顺序依次展示，单个文案最大长度为 7 ；multiton为true时必填
         * @since 11.11.40
         */
        multitonRewardMsg?: string[];
        /**
         * 额外观看广告的次数，合法的数据范围为1-4，multiton为true时必填
         * @since 11.11.40
         */
        multitonRewardTimes?: number;
        /** 进度提示开关（示例代码中出现，补充该字段） */
        progressTip?: boolean;
    }

    /**
     * onClose 回调函数的参数
     */
    interface RewardedVideoAdCloseResult {
        /** 视频是否是在用户完整观看的情况下被关闭的 */
        isEnded: boolean;
        /**
         * 用户完整的播放了几次视频
         * @description 在支持多例模式的版本上会返回该字段，并且是否返回该字段与multiton是否为true无关
         */
        count?: number;
    }

    /**
     * onError 回调函数的参数
     */
    interface RewardedVideoAdErrorResult {
        /** 错误信息 */
        msg: string;
        /**
         * 错误码
         * @description 合法值：-20024（激励视频播放失败）
         */
        code: number;
    }

    /**
     * 激励视频广告组件
     * @description 激励视频广告组件是一个原生组件，层级比普通组件高。激励视频广告是一个单例（小游戏端是全局单例），默认是隐藏的，需要调用 RewardedVideoAd.show() 将其显示
     */
    interface RewardedVideoAd {
        /**
         * 显示激励视频广告
         * @description 激励视频广告将从屏幕下方推入
         * @returns 激励视频广告显示操作的结果，如果激励视频广告显示失败，会返回一个rejected Promise
         */
        show: (object?: Record<string, any>) => Promise<any>;

        /** 销毁激励视频广告实例 */
        destroy: () => void;

        /**
         * 监听激励视频错误事件
         * @param callback - 激励视频错误事件的回调函数
         */
        onError: (callback: (res: RewardedVideoAdErrorResult) => void) => void;

        /**
         * 取消监听激励视频错误事件
         * @param callback - 激励视频错误事件的回调函数
         */
        offError: (callback: (res: RewardedVideoAdErrorResult) => void) => void;

        /**
         * 监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         * @example
         * ```javascript
         * let param = {};
         * param.adUnitId = "从平台获取的广告id";
         * let video = ks.createRewardedVideoAd(param);
         * video.onClose(res => {
         *     // 用户点击了【关闭广告】按钮
         *     if (res && res.isEnded) {
         *       // 正常播放结束，可以下发游戏奖励
         *       if (res.count) {
         *       //在支持多例模式的版本上会返回该字段，并且是否返回该字段与multiton是否为true无关
         *       //判断观看了几次广告
         *       }
         *     }
         *     else {
         *         // 播放中途退出，不下发游戏奖励
         *     }
         * })
         * ```
         */
        onClose: (callback: (res: RewardedVideoAdCloseResult) => void) => void;

        /**
         * 取消监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         */
        offClose: (callback: (res: RewardedVideoAdCloseResult) => void) => void;
    }
    /**
     * addCommonUse 成功回调参数
     */
    interface AddCommonUseSuccessResult {
        /** 1 表示设为常用成功 */
        code: 1;
        /** 成功提示信息 */
        msg: "addCommonUse:ok";
    }

    /**
     * addCommonUse 失败回调参数
     */
    interface AddCommonUseFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 失败提示信息 */
        msg: "addCommonUse:fail";
    }

    /**
     * addCommonUse 接口入参
     */
    interface AddCommonUseOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: AddCommonUseSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: AddCommonUseFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * checkCommonUse 成功回调参数
     */
    interface CheckCommonUseSuccessResult {
        /** 1 表示查询成功 */
        code: 1;
        /** 成功提示信息 */
        msg: "checkCommonUse:ok";
        /** true=已设为常用，false=未设为常用 */
        isCommonUse: boolean;
    }

    /**
     * checkCommonUse 失败回调参数
     */
    interface CheckCommonUseFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 失败提示信息 */
        msg: "checkCommonUse:fail";
    }

    /**
     * checkCommonUse 接口入参
     */
    interface CheckCommonUseOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: CheckCommonUseSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: CheckCommonUseFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * 描述文件状态的对象
     */
    interface Stats {
        /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
        mode: string;
        /** 文件大小，单位：B，对应 POSIX stat.st_size */
        size: number;
        /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
        lastAccessedTime: number;
        /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
        lastModifiedTime: number;

        /** 判断当前文件是否一个目录 */
        isDirectory(): boolean;
        /** 判断当前文件是否一个普通文件 */
        isFile(): boolean;
    }

    /**
     * access 失败回调参数
     */
    interface FileSystemAccessFailResult {
        /** 错误信息，合法值：fail no such file or directory ${path} */
        errMsg: string;
    }

    /**
     * appendFile 接口入参
     */
    interface FileSystemAppendFileOptions {
        /** 要追加内容的文件路径（必填） */
        filePath: string;
        /** 要追加的文本或二进制数据（必填） */
        data: string | ArrayBuffer;
        /**
         * 指定写入文件的字符编码 @default utf8
         * @description 合法值：base64、binary、utf-8、utf8
         */
        encoding?: "base64" | "binary" | "utf-8" | "utf8";
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * copyFile 接口入参
     */
    interface FileSystemCopyFileOptions {
        /** 源文件路径（必填） */
        srcPath: string;
        /** 目标文件路径（必填） */
        destPath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * getFileInfo 成功回调参数
     */
    interface FileSystemGetFileInfoSuccessResult {
        /** 文件大小，以字节为单位 */
        size: number;
    }

    /**
     * getFileInfo 接口入参
     */
    interface FileSystemGetFileInfoOptions {
        /** 要读取的文件路径（必填） */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemGetFileInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * mkdir 接口入参
     */
    interface FileSystemMkdirOptions {
        /** 创建的目录路径（必填） */
        dirPath: string;
        /**
         * 是否递归创建上级目录 @default false
         * @description 如 dirPath 为 a/b/c/d 且 recursive 为 true，会递归创建上级目录直至 d
         */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * readdir 成功回调参数
     */
    interface FileSystemReaddirSuccessResult {
        /** 指定目录下的文件名数组 */
        files: string[];
    }

    /**
     * readdir 接口入参
     */
    interface FileSystemReaddirOptions {
        /** 要读取的目录路径（必填） */
        dirPath: string;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemReaddirSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * readFile 成功回调参数
     */
    interface FileSystemReadFileSuccessResult {
        /** Stats 对象，包含文件状态信息 */
        stats: Stats;
    }

    /**
     * readFile 接口入参
     */
    interface FileSystemReadFileOptions {
        /** 要读取的文件路径（必填） */
        filePath: string;
        /**
         * 指定读取文件的字符编码
         * @description 不传则以 ArrayBuffer 读取二进制内容；合法值：base64、binary、utf-8、utf8
         */
        encoding?: "base64" | "binary" | "utf-8" | "utf8";
        /**
         * 读取起始位置（byte）
         * @description 有效范围 [0, fileLength - 1]，默认从文件头开始
         */
        position?: number;
        /**
         * 读取长度（byte）
         * @description 有效范围 [1, fileLength]，默认读到文件末尾
         */
        length?: number;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemReadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * rename 接口入参
     */
    interface FileSystemRenameOptions {
        /** 源文件路径（必填） */
        oldPath: string;
        /** 新文件路径（必填） */
        newPath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * rmdir 接口入参
     */
    interface FileSystemRmdirOptions {
        /** 要删除的目录路径（必填） */
        dirPath: string;
        /**
         * 是否递归删除目录 @default false
         * @description 为 true 时删除目录及所有子目录和文件
         */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * saveFile 成功回调参数
     */
    interface FileSystemSaveFileSuccessResult {
        /** 存储后的文件路径 */
        savedFilePath: string;
    }

    /**
     * saveFile 接口入参
     */
    interface FileSystemSaveFileOptions {
        /** 临时存储文件路径（必填） */
        tempFilePath: string;
        /** 要存储的文件路径（可选） */
        filePath?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemSaveFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * stat 成功回调参数
     */
    interface FileSystemStatSuccessResult {
        /**
         * Stats 对象/目录Stats映射
         * @description recursive=false 时为 Stats 对象；recursive=true 且为目录时，key为相对路径，value为Stats
         */
        stats: Stats | Record<string, Stats>;
    }

    /**
     * stat 接口入参
     */
    interface FileSystemStatOptions {
        /** 文件/目录路径（必填） */
        path: string;
        /** 是否递归获取目录下文件的Stats信息 @default false */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemStatSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * unlink 接口入参
     */
    interface FileSystemUnlinkOptions {
        /** 要删除的文件路径（必填） */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * unzip 接口入参
     */
    interface FileSystemUnzipOptions {
        /** 源zip压缩文件路径（必填） */
        zipFilePath: string;
        /** 目标目录路径（必填） */
        targetPath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * writeFile 接口入参
     */
    interface FileSystemWriteFileOptions {
        /** 要写入的文件路径（必填） */
        filePath: string;
        /** 要写入的文本或二进制数据（必填） */
        data: string | ArrayBuffer;
        /**
         * 指定写入文件的字符编码 @default utf8
         * @description 合法值：base64、binary、utf-8、utf8
         */
        encoding?: "base64" | "binary" | "utf-8" | "utf8";
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 文件管理器对象
     * @description 全局唯一，可通过 ks.getFileSystemManager() 获取
     */
    interface FileSystemManager {
        /**
         * 判断文件/目录是否存在（异步）
         * @param object - 入参选项
         */
        access(object: {
            path: string;
            success?: () => void;
            fail?: (res: FileSystemAccessFailResult) => void;
            complete?: () => void;
        }): void;

        /**
         * 判断文件/目录是否存在（同步）
         * @param path - 要判断的文件/目录路径
         * @throws {Error} 文件/目录不存在时抛出异常
         */
        accessSync(path: string): void;

        /**
         * 在文件结尾追加内容（异步）
         * @param object - 入参选项
         */
        appendFile(object: FileSystemAppendFileOptions): void;

        /**
         * 在文件结尾追加内容（同步）
         * @param filePath - 要追加内容的文件路径
         * @param data - 要追加的文本/二进制数据
         * @param encoding - 字符编码（可选）
         * @throws {Error} 文件不存在/是目录/无写权限时抛出异常
         */
        appendFileSync(
            filePath: string,
            data: string | ArrayBuffer,
            encoding?: "base64" | "binary" | "utf-8" | "utf8",
        ): void;

        /**
         * 复制文件（异步）
         * @param object - 入参选项
         */
        copyFile(object: FileSystemCopyFileOptions): void;

        /**
         * 复制文件（同步）
         * @param srcPath - 源文件路径
         * @param destPath - 目标文件路径
         * @throws {Error} 无权限/文件不存在/存储空间不足时抛出异常
         */
        copyFileSync(srcPath: string, destPath: string): void;

        /**
         * 获取本地文件信息（异步）
         * @param object - 入参选项
         */
        getFileInfo(object: FileSystemGetFileInfoOptions): void;

        /**
         * 创建目录（异步）
         * @param object - 入参选项
         */
        mkdir(object: FileSystemMkdirOptions): void;

        /**
         * 创建目录（同步）
         * @param dirPath - 要创建的目录路径
         * @param recursive - 是否递归创建上级目录
         * @throws {Error} 上级目录不存在/无权限/同名文件已存在时抛出异常
         */
        mkdirSync(dirPath: string, recursive?: boolean): void;

        /**
         * 读取目录内文件列表（异步）
         * @param object - 入参选项
         */
        readdir(object: FileSystemReaddirOptions): void;

        /**
         * 读取目录内文件列表（同步）
         * @param dirPath - 要读取的目录路径
         * @returns 指定目录下的文件名数组
         * @throws {Error} 目录不存在/不是目录/无读权限时抛出异常
         */
        readdirSync(dirPath: string): string[];

        /**
         * 读取本地文件内容（异步）
         * @param object - 入参选项
         */
        readFile(object: FileSystemReadFileOptions): void;

        /**
         * 读取本地文件内容（同步）
         * @param filePath - 要读取的文件路径
         * @param encoding - 字符编码（可选）
         * @param position - 读取起始位置（byte，可选）
         * @param length - 读取长度（byte，可选）
         * @returns 文件内容（字符串/ArrayBuffer）
         * @throws {Error} 文件不存在/无读权限时抛出异常
         */
        readFileSync(
            filePath: string,
            encoding?: "base64" | "binary" | "utf-8" | "utf8",
            position?: number,
            length?: number,
        ): string | ArrayBuffer;

        /**
         * 重命名/移动文件（异步）
         * @param object - 入参选项
         */
        rename(object: FileSystemRenameOptions): void;

        /**
         * 重命名/移动文件（同步）
         * @param oldPath - 源文件路径
         * @param newPath - 新文件路径
         * @throws {Error} 无权限/文件不存在时抛出异常
         */
        renameSync(oldPath: string, newPath: string): void;

        /**
         * 删除目录（异步）
         * @param object - 入参选项
         */
        rmdir(object: FileSystemRmdirOptions): void;

        /**
         * 删除目录（同步）
         * @param dirPath - 要删除的目录路径
         * @param recursive - 是否递归删除
         * @throws {Error} 目录不存在/不为空/无权限时抛出异常
         */
        rmdirSync(dirPath: string, recursive?: boolean): void;

        /**
         * 保存临时文件到本地（异步）
         * @description 调用成功后 tempFilePath 不可用
         * @param object - 入参选项
         */
        saveFile(object: FileSystemSaveFileOptions): void;

        /**
         * 保存临时文件到本地（同步）
         * @param tempFilePath - 临时文件路径
         * @param filePath - 目标存储路径（可选）
         * @returns 存储后的文件路径
         * @throws {Error} 临时文件不存在/无权限/存储空间不足时抛出异常
         */
        saveFileSync(tempFilePath: string, filePath?: string): string;

        /**
         * 获取文件 Stats 对象（异步）
         * @param object - 入参选项
         */
        stat(object: FileSystemStatOptions): void;

        /**
         * 获取文件 Stats 对象（同步）
         * @param path - 文件/目录路径
         * @param recursive - 是否递归获取目录下文件的Stats
         * @returns Stats 对象/目录Stats映射
         * @throws {Error} 无权限/文件不存在时抛出异常
         */
        statSync(
            path: string,
            recursive?: boolean,
        ): Stats | Record<string, Stats>;

        /**
         * 删除文件（异步）
         * @param object - 入参选项
         */
        unlink(object: FileSystemUnlinkOptions): void;

        /**
         * 删除文件（同步）
         * @param filePath - 要删除的文件路径
         * @throws {Error} 文件不存在/是目录/无权限时抛出异常
         */
        unlinkSync(filePath: string): void;

        /**
         * 解压文件（异步）
         * @param object - 入参选项
         */
        unzip(object: FileSystemUnzipOptions): void;

        /**
         * 写文件（异步）
         * @param object - 入参选项
         */
        writeFile(object: FileSystemWriteFileOptions): void;

        /**
         * 写文件（同步）
         * @param filePath - 要写入的文件路径
         * @param data - 要写入的文本/二进制数据
         * @param encoding - 字符编码（可选）
         * @throws {Error} 目录不存在/无权限/存储空间不足时抛出异常
         */
        writeFileSync(
            filePath: string,
            data: string | ArrayBuffer,
            encoding?: "base64" | "binary" | "utf-8" | "utf8",
        ): void;
    }
    /**
     * 官方帐号类型枚举
     */
    type OfficialAccountType = "CPServiceAccount" | "MiniGameOfficialAccount";

    /**
     * checkFollowState 回调参数
     */
    interface CheckFollowStateResult {
        /** 错误码：1=成功，-10005=暂不支持该功能 */
        errorCode: number;
        /** 错误信息 */
        errorMsg: string;
        /** 是否关注该官方帐号 */
        hasFollow: boolean;
    }

    /**
     * checkFollowState 接口入参
     */
    interface CheckFollowStateOptions {
        /** 要查询的帐号类型（CPServiceAccount/ MiniGameOfficialAccount） */
        accountType: OfficialAccountType;
        /** 回调函数 */
        callback: (result: CheckFollowStateResult) => void;
    }

    /**
     * openUserProfile 回调参数
     */
    interface OpenUserProfileResult {
        /** 错误码：1=成功，其他值为失败（如 -10005=暂不支持） */
        errorCode: number;
        /** 错误信息 */
        errorMsg: string;
    }

    /**
     * openUserProfile 接口入参
     */
    interface OpenUserProfileOptions {
        /** 要打开的帐号类型（CPServiceAccount/ MiniGameOfficialAccount） */
        accountType: OfficialAccountType;
        /** 回调函数 */
        callback: (result: OpenUserProfileResult) => void;
    }
    /**
     * 发布目标类型枚举（快手/游戏圈）
     */
    type PublishTargetType = 1 | 2; // 1=发布到快手，2=发布到快手并同步至游戏圈

    /**
     * jumpToGameClub 成功回调参数
     */
    interface JumpToGameClubSuccessResult {
        /** 1=成功，-10005=暂不支持，-100010=游戏圈未开通 */
        code: 1 | -10005 | -100010;
        /** 成功信息 */
        msg: "jumpToGameClub:ok";
    }

    /**
     * jumpToGameClub 失败回调参数
     */
    interface JumpToGameClubFailResult {
        /** 异常错误码 */
        code: number;
        /** 失败信息 */
        msg: "jumpToGameClub:fail";
    }

    /**
     * jumpToGameClub 接口入参
     */
    interface JumpToGameClubOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: JumpToGameClubSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: JumpToGameClubFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * shareImageToGameClub 成功回调参数
     */
    interface ShareImageToGameClubSuccessResult {
        /** 1=成功，-10005=暂不支持，-100010=游戏圈未开通 */
        code: 1 | -10005 | -100010;
        /** 成功信息 */
        msg: "shareImageToGameClub:ok";
    }

    /**
     * shareImageToGameClub 失败回调参数
     */
    interface ShareImageToGameClubFailResult {
        /** 异常错误码 */
        code: number;
        /** 失败信息 */
        msg: "shareImageToGameClub:fail";
    }

    /**
     * shareImageToGameClub 接口入参
     * @description Android支持cdn格式，iOS支持cdn/ksfile格式
     */
    interface ShareImageToGameClubOptions {
        /** 图片地址（非必填） */
        path?: string;
        /** 分享文案模板ID（非必填，需开放平台配置审核） */
        mouldId?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShareImageToGameClubSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: ShareImageToGameClubFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * GameRecorder.publishVideo 扩展入参（新增 type 字段）
     */
    interface GameRecorderPublishVideoOptions {
        /** 发布目标类型（必填） */
        type: PublishTargetType;
        /** 回调函数（成功时 error 为 undefined/null） */
        callback: (error?: { code: number; msg: string }) => void;
        /** 分享文案模板ID（非必填） */
        mouldId?: string;
        /** 待发布视频ID/ID数组（非必填，默认最后一次录制） */
        video?: number | number[];
        /** 携带字段（aaa=bbb&ccc=ddd 格式） */
        query?: string;
    }

    /**
     * chooseVideoAndPublish 成功回调参数
     * @description 支持版本 >= 13.3.40
     */
    interface ChooseVideoAndPublishSuccessResult {
        /** 1=成功，-10005=版本不支持 */
        code: 1 | -10005;
        /** 成功信息 */
        msg: "chooseVideoAndPublish:ok";
    }

    /**
     * chooseVideoAndPublish 失败回调参数
     */
    interface ChooseVideoAndPublishFailResult {
        /** 异常错误码 */
        code: number;
        /** 失败信息 */
        msg: "chooseVideoAndPublish:fail";
    }

    /**
     * chooseVideoAndPublish 接口入参
     * @description 从相册选择视频+图片发布，支持版本 >= 13.3.40
     */
    interface ChooseVideoAndPublishOptions {
        /** 发布目标类型（非必填） */
        type?: PublishTargetType;
        /** 分享文案模板ID（非必填） */
        mouldId?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ChooseVideoAndPublishSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: ChooseVideoAndPublishFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * GameRecorder 错误码枚举（文档定义的所有错误码）
     */
    enum GameRecorderErrorCode {
        UnknownError = "GameRecorder_UnknownError", // 未知错误
        InternalFailed = "GameRecorder_InternalFailed", // SDK 内部错误
        NotSupported = "GameRecorder_NotSupported", // 当前设备不支持录制
        StartWhileAlreadyStartRecording = "GameRecorder_StartWhileAlreadyStartRecording", // 已开始录制时调用 start
        StartWhilePaused = "GameRecorder_StartWhilePaused", // 暂停状态调用 start（应调用 resume）
        PauseWhileNotStartRecording = "GameRecorder_PauseWhileNotStartRecording", // 未开始录制时调用 pause
        PauseWhileAlreadyPaused = "GameRecorder_PauseWhileAlreadyPaused", // 已暂停时调用 pause
        ResumeWhileNotStartRecording = "GameRecorder_ResumeWhileNotStartRecording", // 未开始录制时调用 resume
        ResumeWhileRecording = "GameRecorder_ResumeWhileRecording", // 录制中调用 resume（仅暂停态可调用）
        AbortWhileNotStartRecording = "GameRecorder_AbortWhileNotStartRecording", // 未开始录制时调用 abort
        StopWhileNotStartRecording = "GameRecorder_StopWhileNotStartRecording", // 未开始录制时调用 stop
        RecordFailedTimeRangeTooShort = "GameRecorder_RecordFailedTimeRangeTooShort", // 录制时间太短
        RecordFailedTimeRangeTooLong = "GameRecorder_RecordFailedTimeRangeTooLong", // 录制时间太长
        RecordFailedNoVideo = "GameRecorder_RecordFailedNoVideo", // 未录制到视频
        PublishVideoFailed = "GameRecorder_PublishVideoFailed", // 发布录屏失败
    }

    /**
     * GameRecorder 事件类型枚举
     */
    type GameRecorderEvent =
        | "start"
        | "stop"
        | "pause"
        | "resume"
        | "abort"
        | "error";

    /**
     * Error 事件的回调参数
     */
    interface GameRecorderErrorEvent {
        error: {
            code: GameRecorderErrorCode;
            msg: string;
        };
    }

    /**
     * Stop 事件的回调参数
     */
    interface GameRecorderStopEvent {
        videoID: string; // 录屏成功时的视频ID
    }

    /**
     * publishVideo 接口的入参
     */
    interface PublishVideoOptions {
        /** 发布目标类型（必填） */
        type: PublishTargetType;
        /** 回调函数（成功时 error 为 undefined/null） */
        callback: (error?: { code: number; msg: string }) => void;
        /** 分享文案模板 ID（非必填，需开放平台配置并审核） */
        mouldId?: string;
        /** 待发布视频ID/ID数组（非必填，默认最后一次录制的视频） */
        video?: number | number[];
        /** 携带字段（aaa=bbb&ccc=ddd 格式，可通过 ks.getLaunchOptionsSync 获取） */
        query?: string;
    }

    /**
     * 游戏画面录制对象
     */
    interface GameRecorder {
        /**
         * 开始录制游戏画面
         */
        start(): void;

        /**
         * 结束录制游戏画面（结束后可发起分享）
         * @returns 录制结束的 Promise
         */
        stop(): Promise<void>;

        /**
         * 暂停录制游戏画面
         * @returns 录制暂停的 Promise
         */
        pause(): Promise<void>;

        /**
         * 恢复录制游戏画面
         * @returns 录制恢复的 Promise
         */
        resume(): Promise<void>;

        /**
         * 放弃录制游戏画面（已录制内容会被丢弃）
         * @returns 录制中断的 Promise
         */
        abort(): Promise<void>;

        /**
         * 注册监听录制事件的回调函数
         * @param event - 事件名
         * @param callback - 事件回调（error/stop 有参数，其他事件无参）
         */
        on(
            event: "error",
            callback: (res: GameRecorderErrorEvent) => void,
        ): void;
        on(event: "stop", callback: (res: GameRecorderStopEvent) => void): void;
        on(
            event: Exclude<GameRecorderEvent, "error" | "stop">,
            callback: () => void,
        ): void;

        /**
         * 取消监听录制事件
         * @param event - 事件名
         * @param callback - 要取消的回调函数
         */
        off(
            event: "error",
            callback: (res: GameRecorderErrorEvent) => void,
        ): void;
        off(
            event: "stop",
            callback: (res: GameRecorderStopEvent) => void,
        ): void;
        off(
            event: Exclude<GameRecorderEvent, "error" | "stop">,
            callback: () => void,
        ): void;

        /**
         * 发布录屏到快手
         * @param object - 发布参数
         * @example
         * ```js
         * GameRecorder.publishVideo({
         * 	video: videoID,
         * 	callback: (error) => {
         * 		if (error != null && error != undefined) {
         * 			console.log("分享录屏失败: " + JSON.stringiwfy(error));
         * 			return;
         * 		}
         * 		console.log("分享录屏成功");
         * 	}
         * });
         * ```
         */
        publishVideo(object: PublishVideoOptions): void;
    }
    /**
     * showToast 接口的入参
     */
    interface ShowToastOptions {
        /** 提示的内容（必填） */
        title: string;
        /**
         * 图标
         * @default 'success'
         * @description 合法值：success（显示成功图标，title最多7个汉字）、error（失败图标，title最多7个汉字）、loading（加载图标，title最多7个汉字）、none（无图标，title最多两行）
         */
        icon?: "success" | "error" | "loading" | "none";
        /** 自定义图标的本地路径，image 的优先级高于 icon */
        image?: string;
        /** 提示的延迟时间（单位：ms）@default 1500 */
        duration?: number;
        /** 是否显示透明蒙层，防止触摸穿透 @default false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * showModal 成功回调的参数
     */
    interface ShowModalSuccessResult {
        /** editable 为 true 时，用户输入的文本 */
        content?: string;
        /** 为 true 时，表示用户点击了确定按钮 */
        confirm: boolean;
        /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
        cancel: boolean;
    }

    /**
     * showModal 接口的入参
     */
    interface ShowModalOptions {
        /** 提示的标题（必填） */
        title: string;
        /** 提示的内容 */
        content?: string;
        /** 是否显示取消按钮 @default true */
        showCancel?: boolean;
        /** 取消按钮的文字，最多 4 个字符 @default '取消' */
        cancelText?: string;
        /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 @default '#000000' */
        cancelColor?: string;
        /** 确认按钮的文字，最多 4 个字符 @default '确定' */
        confirmText?: string;
        /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 @default '#576B95' */
        confirmColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowModalSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * showLoading 接口的入参
     */
    interface ShowLoadingOptions {
        /** 提示的内容（必填） */
        title: string;
        /** 是否显示透明蒙层，防止触摸穿透 @default false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * showActionSheet 成功回调的参数
     */
    interface ShowActionSheetSuccessResult {
        /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
        tapIndex: number;
    }

    /**
     * showActionSheet 接口的入参
     */
    interface ShowActionSheetOptions {
        /** 警示文案 */
        alertText?: string;
        /** 按钮的文字数组，数组长度最大为 6（必填） */
        itemList: string[];
        /** 按钮的文字颜色 @default '#000000' */
        itemColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowActionSheetSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideToast/hideLoading 接口的入参
     */
    interface HideToastLoadingOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }
    /**
     * requestGamePayment 成功回调的参数
     */
    interface RequestGamePaymentSuccessResult {
        /** 状态码 */
        code: number;
        /** 信息 */
        msg: string;
        /** 订单ID */
        orderID: string;
    }

    /**
     * requestGamePayment 失败回调的参数
     */
    interface RequestGamePaymentFailResult {
        /** 错误码 */
        code: number;
        /** 错误描述 */
        msg: string;
    }

    /**
     * requestGamePayment 接口的入参
     * @description buy_quantity 限制：游戏币单价0.1元，最少购买10个；取值范围为 10/30/60/80/120/180/250/300/400/450/500/600/680/730/780/880/980/1080/1180/1280/1480/1680/1880/1980/3280/6480/9980/19980/29980
     */
    interface RequestGamePaymentOptions {
        /** 调用成功的回调函数 */
        success?: (res: RequestGamePaymentSuccessResult) => void;
        /** 调用失败的回调函数 */
        fail?: (res: RequestGamePaymentFailResult) => void;
        /** 调用完成的回调函数 */
        complete?: () => void;
        /** 区服ID + "_" + 角色ID 的格式拼接 serverId_roleId (参与签名) */
        zone_id: string;
        /**
         * 系统(参与签名)
         * @description 合法值：'android'（Android系统）、'ios'（iOS系统，最低版本12.3.10）
         */
        os: "android" | "ios";
        /**
         * 货币类型(参与签名)
         * @description 合法值：'CNY'（人民币）
         */
        currency_type: "CNY";
        /**
         * 购买数量(参与签名)
         * @description 购买游戏币时取值限制：10/30/60/80/120/180/250/300/400/450/500/600/680/730/780/880/980/1080/1180/1280/1480/1680/1880/1980/3280/6480/9980/19980/29980
         */
        buy_quantity: number;
        /** 游戏定义的订单id (参与签名) */
        third_party_trade_no: string;
        /** 拓展字段，非必填，当为空时不参与签名，有值时需要参与签名 */
        extension?: string;
        /** iOS支付需要。表示支付的类型，1表示消耗型，2表示非消耗型(不参与签名) */
        product_type?: 1 | 2;
        /**
         * 商品类目（必填）
         * @description 获取地址：开放平台；示例：10010（不参与签名）；注意：2025.7.14前上线支付的游戏需测试并联系运营加白，之后上线的无需加白
         */
        goods_category: string;
        /** 道具名称（必填），厂商自定义（不参与签名），例如：首充奖励 */
        goods_name: string;
        /** 订单签名信息(不参与签名)，需遵循官方签名规则 */
        sign: string;
    }
    /**
     * WebGL 上下文属性（仅当 contextType 为 webgl 时有效）
     */
    interface WebGLContextAttributes {
        /** 是否抗锯齿，默认值：false */
        antialias?: boolean;
        /** 绘图完成后是否保留绘图缓冲区，默认值：false */
        preserveDrawingBuffer?: boolean;
        /**
         * 抗锯齿样本数（最小值为 2，最大不超过系统限制数量，仅 iOS 支持）
         * @default 2
         */
        antialiasSamples?: number;
        /** 是否开启透明通道，仅当 contextType 为 webgl 时有效，默认值：false */
        alpha?: boolean;
    }

    /** 画布绘图上下文（2d/webgl 通用占位类型） */
    type RenderingContext = any;

    /**
     * 画布对象
     */
    interface Canvas {
        /** 画布的宽度 */
        width: number;
        /** 画布的高度 */
        height: number;

        /**
         * 获取画布对象的绘图上下文
         * @param contextType - 上下文类型，可选值：2d、webgl
         * @param contextAttributes - webgl 上下文属性（仅当 contextType 为 webgl 时有效）
         * @returns 绘图上下文对象
         */
        getContext: (
            contextType: "2d" | "webgl",
            contextAttributes?: WebGLContextAttributes,
        ) => RenderingContext;
    }

    /**
     * 图片对象
     */
    interface Image {
        /** 图片的 URL */
        src: string;
        /** 图片的真实宽度 */
        width: number;
        /** 图片的真实高度 */
        height: number;
        /** 图片加载完成后触发的回调函数 */
        onload?: () => void;
        /** 图片加载发生错误后触发的回调函数 */
        onerror?: (err?: any) => void;
    }
    /**
     * reportScene 错误码枚举（文档定义的核心错误码）
     */
    enum ReportSceneErrorCode {
        PARAM_VALIDATE_FAILED = 20001, // 参数校验失败（类型/重复上报/长度超限等）
        INTERNAL_ERROR = -20001, // 系统内部异常
    }

    /**
     * reportScene 成功回调参数
     */
    interface ReportSceneSuccessResult {
        /** 成功标识 */
        errMsg: "reportScene:ok";
        /** 开发者上报的原始数据 */
        data: {
            sceneId: number;
            costTime?: number;
            dimension?: Record<string, string>;
            metric?: Record<string, string>;
        };
    }

    /**
     * reportScene 失败回调参数
     */
    interface ReportSceneFailResult {
        /** 异常错误码（参考 ReportSceneErrorCode） */
        errNo: ReportSceneErrorCode | number;
        /** 错误信息（如参数校验失败、重复上报等） */
        errMsg: string;
    }

    /**
     * reportScene 接口入参
     * @description 支持版本：安卓>=13.5.40、iOS>=13.5.40，低版本需兼容处理
     */
    interface ReportSceneOptions {
        /** 场景ID（必填，游戏每次启动仅可上报一次） */
        sceneId: number;
        /** 场景耗时（单位ms，默认0，非必填） */
        costTime?: number;
        /**
         * 自定义维度数据（非必填）
         * @description key从「小程序管理后台」获取；需可JSON.stringify序列化，长度≤1024字符；每个字段为非空字符串
         */
        dimension?: Record<string, string>;
        /**
         * 自定义指标数据（非必填）
         * @description key从「小程序管理后台」获取；需可JSON.stringify序列化，长度≤1024字符；每个字段为可解析为数字的非空字符串
         */
        metric?: Record<string, string>;
        /** 接口调用成功的回调函数 */
        success?: (res: ReportSceneSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: ReportSceneFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * shareAppMessage 接口的入参
     */
    interface ShareAppMessageOptions {
        /** 分享模版id，不传走默认分享文案 */
        templateId?: string;
        /**
         * 查询字符串
         * @description 从这条转发消息进入后，可通过 ks.getLaunchOptionsSync() 或 ks.onShow() 获取启动参数中的 query；必须是 key1=val1&key2=val2 的格式
         */
        query?: string;
        /** 分享成功的回调函数 */
        success?: () => void;
        /** 分享失败的回调函数 */
        fail?: (err: any) => void;
        /** 分享结束的回调函数（成功、失败都会执行） */
        complete?: () => void;
    }
    /**
     * addShortcut 成功回调参数
     */
    interface AddShortcutSuccessResult {
        /** 1 表示成功 */
        code: 1;
        /** 成功信息 */
        msg: "addShortcut:ok";
    }

    /**
     * addShortcut 失败回调参数
     */
    interface AddShortcutFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 失败信息 */
        msg: "addShortcut:fail";
    }

    /**
     * addShortcut 接口入参
     */
    interface AddShortcutOptions {
        /** 接口调用成功的回调函数（iOS 不支持回调） */
        success?: (res: AddShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数（iOS 不支持回调） */
        fail?: (err: AddShortcutFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行，iOS 不支持） */
        complete?: () => void;
    }

    /**
     * checkShortcut 成功回调参数
     */
    interface CheckShortcutSuccessResult {
        /** 1 表示成功 */
        code: 1;
        /** 是否已添加快捷方式（快捷方式/mini apk 任一安装则为 true） */
        installed: boolean;
    }

    /**
     * checkShortcut 失败回调参数
     */
    interface CheckShortcutFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 错误信息（如 "apk info is invalid"） */
        msg: string;
    }

    /**
     * checkShortcut 接口入参（仅 Android 支持）
     */
    interface CheckShortcutOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: CheckShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: CheckShortcutFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * navigateToScene 错误码枚举（文档定义的核心错误码）
     */
    enum NavigateSceneErrorCode {
        UNSUPPORTED_VERSION = -10005, // 低于支持版本（安卓<13.4.40/iOS<13.5.40）
        INTERNAL_ERROR = -20001, // 系统内部异常
        FREQUENCY_LIMIT = -20041, // API调用次数超频控
        GAME_NOT_REGISTERED = -20042, // 游戏未备案
        SCENE_ILLEGAL = -20043, // scene参数不合法
    }

    /**
     * checkSliderBarIsAvailable 成功回调参数
     */
    interface CheckSliderBarIsAvailableSuccessResult {
        /** 侧边栏是否可用（true=可用，false=不可用） */
        available: boolean;
    }

    /**
     * checkSliderBarIsAvailable 失败回调参数
     */
    interface CheckSliderBarIsAvailableFailResult {
        /** 异常错误码 */
        code: number;
        /** 错误信息 */
        msg: string;
    }

    /**
     * checkSliderBarIsAvailable 接口入参
     * @description 支持版本：安卓>=12.11.10、iOS>=12.11.10，低版本需兼容
     */
    interface CheckSliderBarIsAvailableOptions {
        /** 接口调用成功的回调函数 */
        success?: (result: CheckSliderBarIsAvailableSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (error: CheckSliderBarIsAvailableFailResult) => void;
    }

    /**
     * navigateToScene 成功回调参数
     */
    interface NavigateToSceneSuccessResult {
        /** 跳转成功标识 */
        msg: "success";
    }

    /**
     * navigateToScene 失败回调参数
     */
    interface NavigateToSceneFailResult {
        /** 异常错误码（参考 NavigateSceneErrorCode） */
        code: NavigateSceneErrorCode | number;
        /** 错误信息（如 "only for kuaishou system version >= 13.4.40..."） */
        msg: string;
    }

    /**
     * navigateToScene 接口入参
     * @description 支持版本：安卓>=13.4.40、iOS>=13.5.40，低版本需兼容
     */
    interface NavigateToSceneOptions {
        /**
         * 要跳转的入口场景（仅支持 'sidebar'）
         * 侧边栏场景（最低版本：安卓13.4.40/iOS13.5.40）
         */
        scene: "sidebar";
        /** 接口调用成功的回调函数 */
        success?: (res: NavigateToSceneSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: NavigateToSceneFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * setStorage 接口的入参
     */
    interface SetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /**
         * 需要存储的内容（必填）
         * @description 只支持原生类型、Date、及能够通过JSON.stringify序列化的对象；单个key最大1MB，所有数据上限10MB
         */
        data: any;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * removeStorage 接口的入参
     */
    interface RemoveStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * getStorage 成功回调的参数
     */
    interface GetStorageSuccessResult {
        /** key对应的内容 */
        data: any;
    }

    /**
     * getStorage 接口的入参
     */
    interface GetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数 */
        success?: (res: GetStorageSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * getStorageInfo 成功回调的参数
     */
    interface GetStorageInfoSuccessResult {
        /** 当前 storage 中所有的 key */
        keys: string[];
        /** 当前占用的空间大小, 单位 KB */
        currentSize: number;
        /** 限制的空间大小，单位 KB */
        limitSize: number;
    }

    /**
     * getStorageInfo 接口的入参
     */
    interface GetStorageInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetStorageInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * clearStorage 接口的入参
     */
    interface ClearStorageOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }
    /**
     * loadSubpackage 成功回调的参数
     */
    interface LoadSubpackageSuccessResult {
        /** 子包名称 */
        name: string;
        /** 子包相对路径 */
        path: string;
    }

    /**
     * loadSubpackage 失败回调的参数
     */
    interface LoadSubpackageFailResult {
        /** 错误代码 */
        code: number;
        /** 错误信息 */
        errorMsg: string;
    }

    /**
     * loadSubpackage 接口的入参
     */
    interface LoadSubpackageOptions {
        /** 子包名称 */
        name: string;
        /** 成功回调 */
        success?: (res: LoadSubpackageSuccessResult) => void;
        /** 失败回调 */
        fail?: (err: LoadSubpackageFailResult) => void;
    }

    /**
     * onProgressUpdate 回调的参数（分包加载进度）
     */
    interface SubpackageProgressUpdateResult {
        /** 子包名称 */
        name: string;
        /** 进度(0~100) */
        progress: number;
        /** 已下载的文件大小 */
        downloadedSize: number;
        /** 总文件大小 */
        totalSize: number;
    }

    /**
     * 加载分包任务实例（用于获取分包加载状态）
     */
    interface LoadSubpackageTask {
        /**
         * 监听分包加载进度变化事件
         * @param callback - 进度回调函数，参数包含加载进度、文件大小等信息
         */
        onProgressUpdate: (
            callback: (res: SubpackageProgressUpdateResult) => void,
        ) => void;
    }
    /**
     * 小游戏启动/回到前台事件的参数
     */
    interface LaunchShowOptions {
        /** 游戏启动场景 */
        from: string;
        /** 启动小游戏时传入的参数 */
        query: Record<string, any>;
    }
    /**
     * 安全区域信息
     */
    interface SafeArea {
        /** 安全区域左上角横坐标 */
        left: number;
        /** 安全区域右下角横坐标 */
        right: number;
        /** 安全区域左上角纵坐标 */
        top: number;
        /** 安全区域右下角纵坐标 */
        bottom: number;
        /** 安全区域宽度 */
        width: number;
        /** 安全区域高度 */
        height: number;
    }

    /**
     * 当前小游戏运行的宿主环境信息
     */
    interface HostInfo {
        /** 宿主 app 对应的 appId */
        appId: string;
        /** 宿主类型，可选值：快手，快手极速版，快看点 */
        env: string;
        /** 游戏版本 */
        gameVersion: string;
    }

    /**
     * getSystemInfo 接口返回的系统信息
     */
    interface SystemInfoResult {
        /** 设备品牌 */
        brand: string;
        /** 设备型号 */
        model: string;
        /** 设备像素比 */
        pixelRatio: number;
        /** 屏幕宽度，单位px */
        screenWidth: number;
        /** 屏幕高度，单位px */
        screenHeight: number;
        /** 可使用窗口宽度，单位px */
        windowWidth: number;
        /** 可使用窗口高度，单位px */
        windowHeight: number;
        /** 状态栏的高度，单位px */
        statusBarHeight: number;
        /** 快手设置的语言 */
        language: string;
        /** 快手小游戏版本号 */
        version: string;
        /** 操作系统及版本 */
        system: string;
        /** 客户端平台 */
        platform: string;
        /** 允许使用相册的开关（仅 iOS 有效） */
        albumAuthorized: boolean;
        /** 允许使用摄像头的开关 */
        cameraAuthorized: boolean;
        /** 允许使用定位的开关 */
        locationAuthorized: boolean;
        /** 允许使用麦克风的开关 */
        microphoneAuthorized: boolean;
        /** 允许通知的开关 */
        notificationAuthorized: boolean;
        /** 允许通知带有提醒的开关（仅 iOS 有效） */
        notificationAlertAuthorized: boolean;
        /** 允许通知带有标记的开关（仅 iOS 有效） */
        notificationBadgeAuthorized: boolean;
        /** 允许通知带有声音的开关（仅 iOS 有效） */
        notificationSoundAuthorized: boolean;
        /** 蓝牙的系统开关 */
        bluetoothEnabled: boolean;
        /** 地理位置的系统开关 */
        locationEnabled: boolean;
        /** Wi-Fi 的系统开关 */
        wifiEnabled: boolean;
        /** 在竖屏正方向下的安全区域 */
        safeArea: SafeArea;
        /** 当前小游戏运行的宿主环境 */
        host: HostInfo;
    }

    /**
     * getSystemInfo 接口的入参选项
     */
    interface GetSystemInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: SystemInfoResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }
    /**
     * 触控设备上的触摸点信息（手指/触控笔在触屏/触摸板上的操作）
     */
    interface Touch {
        /**
         * Touch 对象的唯一标识符（只读）
         * @description 一次触摸动作（手指触摸）在平面上移动的整个过程中，该标识符不变，可用于判断是否是同一次触摸过程
         */
        identifier: number;
        /** 触点相对于页面左边沿的 X 坐标 */
        pageX: number;
        /** 触点相对于页面上边沿的 Y 坐标 */
        pageY: number;
        /** 触点相对于可见视区左边沿的 X 坐标 */
        clientX: number;
        /** 触点相对于可见视区上边沿的 Y 坐标 */
        clientY: number;
        /**
         * 手指挤压触摸平面的压力大小（仅在支持 force touch 的设备返回）
         * @description 取值范围为 0.0（无压力）到 1.0（最大压力）的浮点数
         */
        force: number;
    }

    /**
     * 触摸事件回调函数的参数
     */
    interface TouchEventResult {
        /** 当前所有触摸点的列表 */
        touches: Touch[];
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[];
        /** 事件触发时的时间戳 */
        timeStamp: number;
    }
    /**
     * startAccelerometer 中 interval 的合法值
     */
    type AccelerometerInterval = "game" | "ui" | "normal";

    /**
     * 加速度数据事件的回调参数
     */
    interface AccelerometerChangeResult {
        /** X 轴加速度 */
        x: number;
        /** Y 轴加速度 */
        y: number;
        /** Z 轴加速度 */
        z: number;
    }

    /**
     * startAccelerometer 接口的入参
     */
    interface StartAccelerometerOptions {
        /**
         * 监听回调执行频率 @default normal
         * @description 合法值：game(20ms/次)、ui(60ms/次)、normal(200ms/次)
         */
        interval?: AccelerometerInterval;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopAccelerometer 接口的入参
     */
    interface StopAccelerometerOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * Android 端罗盘精度枚举值
     */
    type AndroidCompassAccuracy =
        | "high"
        | "medium"
        | "low"
        | "no-contact"
        | "unreliable"
        | `unknow ${string}`;

    /**
     * 罗盘数据变化事件的回调参数
     */
    interface CompassChangeResult {
        /** 面对的方向度数 */
        direction: number;
        /**
         * 精度（平台差异）
         * @description iOS：number 类型，相对于磁北极的偏差（0=磁北、90=东、180=南...）；Android：string 枚举值（high/medium/low/no-contact/unreliable/unknow ${value}）
         */
        accuracy: number | AndroidCompassAccuracy;
    }

    /**
     * startCompass 接口的入参
     */
    interface StartCompassOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopCompass 接口的入参
     */
    interface StopCompassOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * 设备方向变化事件的回调参数
     */
    interface DeviceMotionChangeResult {
        /**
         * 绕Z轴转动夹角
         * @description 手机X/Y与地球X/Y重合时，范围 [0, 2*PI)，逆时针转动为正
         */
        alpha: number;
        /**
         * 绕X轴转动夹角
         * @description 手机Y/Z与地球Y/Z重合时，范围 [-1*PI, PI)，顶部朝地球表面转动为正
         */
        beta: number;
        /**
         * 绕Y轴转动夹角
         * @description 手机X/Z与地球X/Z重合时，范围 [-1*PI/2, PI/2)，右边朝地球表面转动为正
         */
        gamma: number;
    }

    /**
     * startDeviceMotionListening 接口的入参
     */
    interface StartDeviceMotionListeningOptions {
        /**
         * 监听回调执行频率 @default normal
         * @description 合法值：game(20ms/次)、ui(60ms/次)、normal(200ms/次)
         */
        interval?: "game" | "ui" | "normal";
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopDeviceMotionListening 接口的入参
     */
    interface StopDeviceMotionListeningOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * startGyroscope 中 interval 的合法值
     */
    type GyroscopeInterval = "game" | "ui" | "normal";

    /**
     * 陀螺仪数据变化事件的回调参数
     */
    interface GyroscopeChangeResult {
        /** X 轴的角速度 */
        x: number;
        /** Y 轴的角速度 */
        y: number;
        /** Z 轴的角速度 */
        z: number;
    }

    /**
     * startGyroscope 接口的入参
     */
    interface StartGyroscopeOptions {
        /**
         * 监听回调执行频率 @default normal
         * @description 合法值：game(20ms/次)、ui(60ms/次)、normal(200ms/次)
         */
        interval?: GyroscopeInterval;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopGyroscope 接口的入参
     */
    interface StopGyroscopeOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * showKeyboard 中 confirmType 的合法值
     */
    type KeyboardConfirmType = "done" | "next" | "search" | "go" | "send";

    /**
     * 键盘事件回调的参数（输入/确认/收起）
     */
    interface KeyboardEventResult {
        /** 键盘输入的当前值 */
        value: string;
    }

    /**
     * updateKeyboard 接口的入参
     */
    interface UpdateKeyboardOptions {
        /** 键盘输入框的当前值（必填） */
        value: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showKeyboard 接口的入参
     */
    interface ShowKeyboardOptions {
        /** 键盘输入框显示的默认值（必填） */
        defaultValue: string;
        /** 键盘中文本的最大长度（必填） */
        maxLength: number;
        /** 是否为多行输入（必填） */
        multiple: boolean;
        /** 点击完成时键盘是否收起（必填） */
        confirmHold: boolean;
        /**
         * 键盘右下角 confirm 按钮的类型（必填）
         * @description 仅影响按钮文本，合法值：done(完成)、next(下一个)、search(搜索)、go(前往)、send(发送)
         */
        confirmType: KeyboardConfirmType;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideKeyboard 接口的入参
     */
    interface HideKeyboardOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * Android 内存告警等级（iOS 无此字段）
     */
    type MemoryWarningLevel = 5 | 10 | 15;

    /**
     * 内存不足告警事件的回调参数
     */
    interface MemoryWarningResult {
        /**
         * 内存告警等级（仅 Android 有）
         * @description 5=TRIM_MEMORY_RUNNING_MODERATE、10=TRIM_MEMORY_RUNNING_LOW、15=TRIM_MEMORY_RUNNING_CRITICAL
         */
        level?: MemoryWarningLevel;
    }
    /**
     * 网络类型枚举值
     */
    type NetworkType = "wifi" | "2g" | "3g" | "4g" | "5g" | "unknown" | "none";

    /**
     * getNetworkType 成功回调参数
     */
    interface GetNetworkTypeSuccessResult {
        /** 网络类型 */
        networkType: NetworkType;
    }

    /**
     * getNetworkType 失败回调参数
     */
    interface GetNetworkTypeFailResult {
        /** 错误信息，格式为 "getNetworkType:fail " + 详细错误信息 */
        errMsg: string;
    }

    /**
     * getNetworkType 接口入参
     */
    interface GetNetworkTypeOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetNetworkTypeSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: GetNetworkTypeFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 网络状态变化事件回调参数
     */
    interface NetworkStatusChangeResult {
        /** 网络类型 */
        networkType: NetworkType;
        /** 当前是否有网络连接 */
        isConnected: boolean;
    }
    /**
     * vibrateShort 中震动强度类型的合法值
     */
    type VibrateShortType = "heavy" | "medium" | "light";

    /**
     * vibrateShort 失败回调参数
     */
    interface VibrateShortFailResult {
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * vibrateShort 接口入参
     */
    interface VibrateShortOptions {
        /** 震动强度类型（必填），有效值：heavy、medium、light */
        type: VibrateShortType;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: VibrateShortFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * vibrateLong 接口入参
     */
    interface VibrateLongOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * downloadFile 接口成功回调的参数
     */
    interface DownloadFileSuccessResult {
        /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
        tempFilePath?: string;
        /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
        filePath?: string;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
    }

    /**
     * downloadFile 接口的入参
     */
    interface DownloadFileOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /**
         * 设置请求的 header
         * @description header 中不能设置 Referer，content-type 默认为 application/json
         */
        header?: Record<string, string>;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** 指定文件下载后存储的路径 (本地路径) */
        filePath?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: DownloadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 下载进度变化事件的回调参数
     */
    interface DownloadProgressUpdateResult {
        /** 下载进度百分比 */
        progress: number;
        /** 已经下载的数据长度，单位 Bytes（文档标注为 totalBytesSent，保持与官方一致） */
        totalBytesSent: number;
        /** 预期需要下载的数据总长度，单位 Bytes（文档标注为 totalBytesExpectedToSend，保持与官方一致） */
        totalBytesExpectedToSend: number;
    }

    /**
     * 下载任务对象
     * @description 可以监听下载进度变化事件，以及取消下载任务的对象
     */
    interface DownloadTask {
        /** 中断下载任务 */
        abort: () => void;

        /**
         * 监听下载进度变化事件
         * @param callback - 下载进度变化事件的回调函数
         */
        onProgressUpdate: (
            callback: (res: DownloadProgressUpdateResult) => void,
        ) => void;

        /**
         * 取消监听下载进度变化事件
         * @param callback - 下载进度变化事件的回调函数（不传此参数则移除所有监听函数）
         */
        offProgressUpdate: (
            callback?: (res: DownloadProgressUpdateResult) => void,
        ) => void;
    }
    /**
     * request 接口成功回调的参数
     */
    interface RequestSuccessResult {
        /** 开发者服务器返回的数据 */
        data: string | Record<string, any> | ArrayBuffer;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>;
        /** 开发者服务器返回的 cookies，格式为字符串数组 */
        cookies: string[];
    }

    /**
     * request 接口的入参
     */
    interface RequestOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /**
         * 请求的参数
         * @description 最终发送给服务器的数据是 String 类型，非 String 类型会按规则转换：
         * - GET 方法：转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)...）
         * - POST + application/json：JSON 序列化
         * - POST + application/x-www-form-urlencoded：转换成 query string
         */
        data?: string | Record<string, any> | ArrayBuffer;
        /**
         * 设置请求的 header
         * @description header 中不能设置 Referer，content-type 默认为 application/json
         */
        header?: Record<string, string>;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** HTTP 请求方法 @default GET */
        method?: "GET" | "POST";
        /**
         * 返回的数据格式 @default json
         * @description json：返回的数据为 JSON，会进行一次 JSON.parse；其他：不对返回内容进行 JSON.parse
         */
        dataType?: "json" | string;
        /**
         * 响应的数据类型 @default text
         * @description text：响应为文本；arraybuffer：响应为 ArrayBuffer
         */
        responseType?: "text" | "arraybuffer";
        /** 接口调用成功的回调函数 */
        success?: (res: RequestSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 网络请求任务对象
     */
    interface RequestTask {
        /** 中断请求任务 */
        abort: () => void;
    }
    /**
     * uploadFile 接口成功回调的参数
     */
    interface UploadFileSuccessResult {
        /** 开发者服务器返回的数据 */
        data: string;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
    }

    /**
     * uploadFile 接口的入参
     */
    interface UploadFileOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /** 要上传文件资源的路径 (本地路径) */
        filePath?: string;
        /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容（必填） */
        name: string;
        /**
         * HTTP 请求 Header
         * @description Header 中不能设置 Referer
         */
        header?: Record<string, string>;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** 额外的表单数据（示例中出现，补充该字段） */
        formData?: Record<string, any>;
        /** 接口调用成功的回调函数 */
        success?: (res: UploadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 上传进度变化事件的回调参数
     */
    interface UploadProgressUpdateResult {
        /** 上传进度百分比 */
        progress: number;
        /** 已经上传的数据长度，单位 Bytes */
        totalBytesSent: number;
        /** 预期需要上传的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number;
    }

    /**
     * 上传任务对象
     * @description 可以监听上传进度变化事件，以及取消上传任务的对象
     */
    interface UploadTask {
        /** 中断上传任务 */
        abort: () => void;

        /**
         * 监听上传进度变化事件
         * @param callback - 上传进度变化事件的回调函数
         */
        onProgressUpdate: (
            callback: (res: UploadProgressUpdateResult) => void,
        ) => void;

        /**
         * 取消监听上传进度变化事件
         * @param callback - 上传进度变化事件的回调函数（不传此参数则移除所有监听函数）
         */
        offProgressUpdate: (
            callback?: (res: UploadProgressUpdateResult) => void,
        ) => void;
    }
    /**
     * connectSocket 接口的入参
     */
    interface ConnectSocketOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /**
         * 设置请求的 header
         * @description header 中不能设置 Referer，content-type 默认为 application/json
         */
        header?: Record<string, string>;
        /** 子协议数组 */
        protocols?: string[];
        /** 建立 TCP 连接的时候的 TCP_NODELAY 设置 @default false */
        tcpNoDelay?: boolean;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * SocketTask.close 接口的入参
     */
    interface SocketCloseOptions {
        /**
         * 关闭连接的状态号
         * @default 1000（表示正常关闭连接）
         * @description 表示连接被关闭的原因
         */
        code?: number;
        /**
         * 连接被关闭的原因
         * @description 可读的字符串，必须是不长于 123 字节的 UTF-8 文本（不是字符）
         */
        reason?: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * SocketTask.send 接口的入参
     */
    interface SocketSendOptions {
        /** 需要发送的内容（必填） */
        data: string | ArrayBuffer;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * onClose 回调函数的参数
     */
    interface SocketCloseResult {
        /** 关闭连接的状态号，表示连接被关闭的原因 */
        code: number;
        /** 连接被关闭的原因（可读字符串） */
        reason: string;
    }

    /**
     * onError 回调函数的参数
     */
    interface SocketErrorResult {
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * onMessage 回调函数的参数
     */
    interface SocketMessageResult {
        /** 服务器返回的消息 */
        data: string | ArrayBuffer;
    }

    /**
     * onOpen 回调函数的参数
     */
    interface SocketOpenResult {
        /** 连接成功的 HTTP 响应 Header */
        header: Record<string, string>;
    }

    /**
     * WebSocket 任务对象
     * @description 可通过 ks.connectSocket() 接口创建返回
     */
    interface SocketTask {
        /**
         * 通过 WebSocket 连接发送数据
         * @param object - 发送参数
         */
        send: (object: SocketSendOptions) => void;

        /**
         * 关闭 WebSocket 连接
         * @param object - 关闭参数
         */
        close: (object?: SocketCloseOptions) => void;

        /**
         * 监听 WebSocket 连接打开事件
         * @param callback - 连接打开事件的回调函数
         */
        onOpen: (callback: (res: SocketOpenResult) => void) => void;

        /**
         * 监听 WebSocket 连接关闭事件
         * @param callback - 连接关闭事件的回调函数
         */
        onClose: (callback: (res: SocketCloseResult) => void) => void;

        /**
         * 监听 WebSocket 错误事件
         * @param callback - 错误事件的回调函数
         */
        onError: (callback: (res: SocketErrorResult) => void) => void;

        /**
         * 监听 WebSocket 接受到服务器的消息事件
         * @param callback - 接收消息事件的回调函数
         */
        onMessage: (callback: (res: SocketMessageResult) => void) => void;
    }
    /**
     * 音频播放错误事件的回调参数
     */
    interface InnerAudioErrorResult {
        /** 错误信息 */
        errMsg: string;
        /**
         * 错误码
         * @description 合法值：10001(系统错误)、10002(AudioPlayer未就绪)、10003(文件错误)、-1(未知错误)
         */
        errCode: 10001 | 10002 | 10003 | -1;
    }

    /**
     * 内部音频上下文对象
     * @description 可通过 ks.createInnerAudioContext() 获取实例；支持音频格式：wav(iOS/Android)、mp3(iOS/Android)
     */
    interface InnerAudioContext {
        /** 音频资源的地址，用于直接播放 */
        src: string;
        /** 开始播放的位置（单位：s），默认为 0 */
        startTime: number;
        /** 是否自动开始播放，默认为 false */
        autoplay: boolean;
        /** 是否循环播放，默认为 false */
        loop: boolean;
        /**
         * 是否遵循系统静音开关，默认为 true
         * @description 当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音
         */
        obeyMuteSwitch: boolean;
        /** 音量。范围 0~1，默认为 1 */
        volume: number;
        /**
         * 播放速度。范围 0.5-2.0，默认为 1
         * @description Android 需要 6 及以上版本
         */
        playbackRate: number;

        /** 当前音频的长度（单位 s），只有在当前有合法的 src 时返回（只读） */
        readonly duration: number;
        /** 当前音频的播放位置（单位 s），只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
        readonly currentTime: number;
        /** 当前是是否暂停或停止状态（只读） */
        readonly paused: boolean;
        /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
        readonly buffered: number;

        /** 播放音频 */
        play: () => void;
        /** 暂停音频（暂停后播放从暂停处开始） */
        pause: () => void;
        /** 停止音频（停止后播放从头开始） */
        stop: () => void;
        /**
         * 跳转到指定位置播放
         * @param position - 跳转的时间（单位：s），精确到小数点后 3 位（ms 级别）
         */
        seek: (position: number) => void;
        /** 销毁当前音频实例 */
        destroy: () => void;

        /**
         * 监听音频进入可以播放状态的事件（不保证后续流畅播放）
         * @param callback - 事件回调函数
         */
        onCanplay: (callback: () => void) => void;
        /**
         * 取消监听音频进入可以播放状态的事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offCanplay: (callback?: () => void) => void;

        /**
         * 监听音频播放事件
         * @param callback - 事件回调函数
         */
        onPlay: (callback: () => void) => void;
        /**
         * 取消监听音频播放事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offPlay: (callback?: () => void) => void;

        /**
         * 监听音频暂停事件
         * @param callback - 事件回调函数
         */
        onPause: (callback: () => void) => void;
        /**
         * 取消监听音频暂停事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offPause: (callback?: () => void) => void;

        /**
         * 监听音频停止事件
         * @param callback - 事件回调函数
         */
        onStop: (callback: () => void) => void;
        /**
         * 取消监听音频停止事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offStop: (callback?: () => void) => void;

        /**
         * 监听音频自然播放至结束的事件
         * @param callback - 事件回调函数
         */
        onEnded: (callback: () => void) => void;
        /**
         * 取消监听音频自然播放至结束的事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offEnded: (callback?: () => void) => void;

        /**
         * 监听音频播放进度更新事件
         * @param callback - 事件回调函数（可通过 currentTime 获取实时进度）
         */
        onTimeUpdate: (callback: () => void) => void;
        /**
         * 取消监听音频播放进度更新事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offTimeUpdate: (callback?: () => void) => void;

        /**
         * 监听音频播放错误事件
         * @param callback - 错误事件回调函数
         */
        onError: (callback: (res: InnerAudioErrorResult) => void) => void;
        /**
         * 取消监听音频播放错误事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offError: (callback?: (res: InnerAudioErrorResult) => void) => void;
    }
    /**
     * chooseImage 成功回调中 tempFiles 项的结构
     */
    interface ChooseImageTempFile {
        /** 本地临时文件路径 (本地路径) */
        path: string;
        /** 本地临时文件大小，单位 B */
        size: number;
    }

    /**
     * chooseImage 成功回调的参数
     */
    interface ChooseImageSuccessResult {
        /** 图片的本地临时文件路径列表 (本地路径) */
        tempFilePaths: string[];
        /** 图片的本地临时文件列表 */
        tempFiles: ChooseImageTempFile[];
    }

    /**
     * chooseImage 接口的入参
     */
    interface ChooseImageOptions {
        /** 最多可以选择的图片张数 @default 9 */
        count?: number;
        /**
         * 所选的图片的尺寸
         * @default ['original', 'compressed']
         * @description 合法值：original(原图)、compressed(压缩图)
         */
        sizeType?: ("original" | "compressed")[];
        /**
         * 选择图片的来源
         * @default ['album', 'camera']
         * @description 合法值：album(从相册选图)、camera(使用相机)
         */
        sourceType?: ("album" | "camera")[];
        /** 接口调用成功的回调函数 */
        success?: (res: ChooseImageSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * saveImageToPhotosAlbum 成功回调的参数
     */
    interface SaveImageToPhotosAlbumSuccessResult {
        /** 状态码，成功返回 1 */
        code: number;
    }

    /**
     * saveImageToPhotosAlbum 失败回调的参数
     */
    interface SaveImageToPhotosAlbumFailResult {
        /** 错误码 */
        code: number;
        /** 错误信息 */
        msg: string;
    }

    /**
     * saveImageToPhotosAlbum 接口的入参
     */
    interface SaveImageToPhotosAlbumOptions {
        /**
         * 图片文件路径（必填）
         * @description 可以是临时文件路径（如 ks.downloadFile 返回的路径）、永久文件路径；不支持网络路径
         */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: (res: SaveImageToPhotosAlbumSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: SaveImageToPhotosAlbumFailResult) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }
    /**
     * onTimeUpdate 回调函数的参数
     */
    interface VideoTimeUpdateResult {
        /** 视频当前播放到的时长（单位：s） */
        position: number;
        /** 视频总时长（单位：s） */
        duration: number;
    }

    /**
     * onProgress 回调函数的参数
     */
    interface VideoProgressResult {
        /** 当前的缓冲进度，区间为 (0~100]，100表示缓冲完成 */
        buffered: number;
        /** 视频的总时长（单位：s），首次缓冲进度为0时无此字段 */
        duration?: number;
    }

    /**
     * createVideo 接口的入参
     */
    interface CreateVideoOptions {
        /** 视频的左上角横坐标 @default 0 */
        x?: number;
        /** 视频的左上角纵坐标 @default 0 */
        y?: number;
        /** 视频的宽度（必填） */
        width: number;
        /** 视频的高度（必填） */
        height: number;
        /**
         * 视频的资源地址（必填）
         * @description 支持CDN链接、本地路径（本地路径需通过 ks.downloadFile 下载）
         */
        src: string;
        /** 视频的封面 */
        poster?: string;
        /** 视频的初始播放位置（单位：s） @default 0 */
        initialTime?: number;
        /**
         * 视频的缩放模式 @default contain
         * @description fill(填充)、contain(包含)、cover(覆盖)
         */
        objectFit?: "fill" | "contain" | "cover";
        /** 视频背景颜色 @default #000000 */
        backgroundColor?: string;
        /** 是否自动播放 @default false */
        autoplay?: boolean;
        /** 是否循环播放 @default false */
        loop?: boolean;
        /** 是否禁音播放 @default false */
        muted?: boolean;
        /**
         * 视频是否显示在游戏画布之下
         * @description 配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas透明；透明canvas仅支持cocos引擎，暂不支持unity
         * @default false
         */
        underGameView?: boolean;
    }

    /**
     * 视频实例对象
     * @description 可通过 ks.createVideo() 创建；视频组件支持快手双端版本>=12.11.20
     */
    interface Video {
        /** 播放视频 */
        play: () => void;
        /** 暂停视频 */
        pause: () => void;
        /** 停止播放视频 */
        stop: () => void;
        /**
         * 跳转到视频指定位置
         * @param time - 跳转时间（单位：s）；超出总时长则停在当前帧，小于0无效
         */
        seek: (time: number) => void;
        /** 销毁视频实例 */
        destroy: () => void;

        /**
         * 监听视频首帧事件
         * @param callback - 回调函数参数 scale 为 video.videoWidth / video.videoHeight
         */
        onCandraw: (callback: (scale: number) => void) => void;

        /** 监听视频播放事件 */
        onPlay: (callback: () => void) => void;

        /** 监听视频暂停事件 */
        onPause: (callback: () => void) => void;

        /** 监听视频停止事件 */
        onStop: (callback: () => void) => void;

        /**
         * 监听视频进度更新/跳转事件
         * @param callback - 回调参数包含当前播放位置和总时长
         */
        onTimeUpdate: (callback: (res: VideoTimeUpdateResult) => void) => void;

        /** 监听视频自然播放结束事件 */
        onEnded: (callback: () => void) => void;

        /**
         * 监听视频播放错误事件
         * @param callback - 回调参数为错误信息文本（不支持的资源/下载失败/解码失败）
         */
        onError: (callback: (errorMessage: string) => void) => void;

        /** 监听视频缓冲等待事件（需缓冲下一帧而停止） */
        onWaiting: (callback: () => void) => void;

        /**
         * 监听视频缓冲进度事件
         * @param callback - 回调参数包含缓冲进度，首次缓冲0时无duration字段
         */
        onProgress: (callback: (res: VideoProgressResult) => void) => void;
    }
    /**
     * authorize 接口的权限范围类型
     */
    type AuthorizeScope =
        | "scope.userInfo"
        | "scope.writePhotosAlbum"
        | "scope.communityInfo";

    /**
     * authorize/fail 回调的参数
     */
    interface AuthorizeFailResult {
        /** 错误码 */
        code: number;
        /** 错误描述 */
        msg: string;
    }

    /**
     * authorize 接口的入参
     */
    interface AuthorizeOptions {
        /**
         * 需要获取权限的scope
         * @description 合法值：scope.userInfo(用户信息)、scope.writePhotosAlbum(保存到相册权限)
         */
        scope: AuthorizeScope;
        /** 申请授权成功的回调 */
        success?: () => void;
        /** 申请授权失败的回调 */
        fail?: (error: AuthorizeFailResult) => void;
        /** 申请授权完成的回调（无论成功失败都会被调用） */
        complete?: () => void;
    }

    /**
     * getSetting 成功回调中 result 的结构
     */
    interface GetSettingResult {
        /** 是否授权用户信息权限 */
        "scope.userInfo"?: boolean;
        /** 是否授权保存到相册权限 */
        "scope.writePhotosAlbum"?: boolean;
    }

    /**
     * getSetting 成功回调的参数
     */
    interface GetSettingSuccessResult {
        /** 查询结果（仅包含已请求过的权限） */
        result: GetSettingResult;
    }

    /**
     * getSetting fail 回调的参数
     */
    interface GetSettingFailResult {
        /** 错误码 */
        code: number;
        /** 错误描述 */
        msg: string;
    }

    /**
     * getSetting 接口的入参
     */
    interface GetSettingOptions {
        /** 接口调用成功的回调 */
        success?: (res: GetSettingSuccessResult) => void;
        /** 接口调用失败的回调 */
        fail?: (error: GetSettingFailResult) => void;
        /** 接口调用完成的回调（无论成功失败都会执行） */
        complete?: () => void;
    }
    /**
     * login 成功回调的参数
     */
    interface LoginSuccessResult {
        /** 登录临时凭证 */
        code: string;
    }

    /**
     * login 接口的入参
     */
    interface LoginOptions {
        /** 登录成功回调 */
        success?: (res: LoginSuccessResult) => void;
        /** 登录失败回调 */
        fail?: (error: any) => void;
        /** 无论成功失败都会执行的完成回调 */
        complete?: () => void;
    }

    /**
     * checkSession 失败回调的参数
     */
    interface CheckSessionFailResult {
        /**
         * 错误码
         * @description -20038：未登录或登录态失效，需重新登录；-20001：未知错误（如网络连接失败等），请重试
         */
        code: -20038 | -20001 | number;
        /** 错误信息 */
        msg: string;
    }

    /**
     * checkSession 接口的入参
     */
    interface CheckSessionOptions {
        /** 登录态未过期的回调函数 */
        success?: () => void;
        /** 登录态失效的回调函数 */
        fail?: (res: CheckSessionFailResult) => void;
        /** 登录态检查完成回调（无论是否有效都会执行） */
        complete?: () => void;
    }
    /**
     * UserInfo 数据结构（用户信息对象）
     */
    interface UserInfo {
        /** 昵称 */
        nickName: string;
        /** 头像 */
        avatarUrl: string;
        /** 性别，M-男，F-女 */
        gender: "M" | "F";
        /** 城市 */
        userCity: string;
        /** 年龄 */
        age: number;
    }

    /**
     * getUserInfo 成功回调的参数
     */
    interface GetUserInfoSuccessResult {
        /** 用户信息对象，不包含 openid 等敏感信息 */
        userInfo: UserInfo;
        /** 不包含敏感信息的原始数据字符串，用于计算签名 */
        rawData: string;
        /** 使用 sha1( rawData + sessionkey ) 得到的字符串，用于校验用户信息 */
        signature: string;
    }

    /**
     * getUserInfo 失败回调的参数
     */
    interface GetUserInfoFailResult {
        /** 错误码 */
        code: number;
        /** 错误描述 */
        msg: string;
    }

    /**
     * getUserInfo 接口的入参
     */
    interface GetUserInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetUserInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: GetUserInfoFailResult) => void;
        /** 接口调用完成的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}

/** 将KuaiShouWeb的ks变量声明为全局变量 */
declare const ks: KuaiShouWebMinigame.KS;
