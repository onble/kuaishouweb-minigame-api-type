declare namespace KuaiShouWebMinigame {
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
}