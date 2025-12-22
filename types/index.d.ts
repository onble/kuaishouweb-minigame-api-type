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
    }
}