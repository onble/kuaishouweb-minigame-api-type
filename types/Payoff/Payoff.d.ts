declare namespace KuaiShouWebMinigame {
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
        os: 'android' | 'ios';
        /** 
         * 货币类型(参与签名)
         * @description 合法值：'CNY'（人民币）
         */
        currency_type: 'CNY';
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

}