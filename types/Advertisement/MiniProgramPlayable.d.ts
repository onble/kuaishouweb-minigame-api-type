declare namespace KuaiShouWebMinigame {
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

}