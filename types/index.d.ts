declare namespace KuaiShouWebMinigame {
    /**
    * 全局 ks 对象接口定义
    */
    interface KS {
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
    }
}