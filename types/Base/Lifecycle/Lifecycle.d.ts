declare namespace KuaiShouWebMinigame {
    /**
     * 小游戏启动/回到前台事件的参数
     */
    interface LaunchShowOptions {
        /** 游戏启动场景 */
        from: string;
        /** 启动小游戏时传入的参数 */
        query: Record<string, any>;
    }
}