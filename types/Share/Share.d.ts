declare namespace KuaiShouWebMinigame {
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

}