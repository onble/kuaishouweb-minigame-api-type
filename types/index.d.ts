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
        createRewardedVideoAd: (object: CreateRewardedVideoAdOptions) => RewardedVideoAd | null;

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
        createInterstitialAd: (object: CreateInterstitialAdOptions) => InterstitialAd | null;

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
        notifyMiniProgramPlayableStatus: (object: NotifyMiniProgramPlayableStatusOptions) => void;

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
        startDeviceMotionListening: (object?: StartDeviceMotionListeningOptions) => void;

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
        stopDeviceMotionListening: (object?: StopDeviceMotionListeningOptions) => void;

        /**
         * 监听设备方向变化事件
         * @description 回调频率由 startDeviceMotionListening 的 interval 参数决定
         * @param callback - 方向变化回调函数，参数包含 alpha/beta/gamma 角度值
         */
        onDeviceMotionChange: (callback: (res: DeviceMotionChangeResult) => void) => void;

        /**
         * 取消监听设备方向变化事件
         * @description 参数为空则取消所有监听
         * @param callback - 要取消的回调函数（可选）
         */
        offDeviceMotionChange: (callback?: (res: DeviceMotionChangeResult) => void) => void;

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
        onKeyboardConfirm: (callback: (res: KeyboardEventResult) => void) => void;

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
        onKeyboardComplete: (callback: (res: KeyboardEventResult) => void) => void;

        /**
         * 取消监听键盘输入事件
         * @param callback - 键盘输入事件的回调函数
         * @example
         * ```javascript
         * const inputCallback = (res) => console.log(res.value);
         * ks.offKeyboardInput(inputCallback);
         * ```
         */
        offKeyboardInput: (callback: (res: KeyboardEventResult) => void) => void;

        /**
         * 取消监听键盘 Confirm 按钮点击事件
         * @param callback - 用户点击键盘 Confirm 按钮时的事件的回调函数
         */
        offKeyboardConfirm: (callback: (res: KeyboardEventResult) => void) => void;

        /**
         * 取消监听键盘收起事件
         * @param callback - 监听键盘收起的事件的回调函数
         */
        offKeyboardComplete: (callback: (res: KeyboardEventResult) => void) => void;

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
        onAccelerometerChange: (callback: (res: AccelerometerChangeResult) => void) => void;

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
        offAccelerometerChange: (callback?: (res: AccelerometerChangeResult) => void) => void;

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
        offCompassChange: (callback?: (res: CompassChangeResult) => void) => void;

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
        onNetworkStatusChange: (callback: (res: NetworkStatusChangeResult) => void) => void;

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
        offNetworkStatusChange: (listener?: (res: NetworkStatusChangeResult) => void) => void;

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
        onGyroscopeChange: (callback: (res: GyroscopeChangeResult) => void) => void;

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
        offGyroscopeChange: (callback: (res: GyroscopeChangeResult) => void) => void;

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
        offMemoryWarning: (callback: (res: MemoryWarningResult) => void) => void;

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

        //#endregion 游戏对局回放
    }
}