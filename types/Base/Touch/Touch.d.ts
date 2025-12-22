declare namespace KuaiShouWebMinigame {
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
}