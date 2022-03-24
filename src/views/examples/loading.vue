<template>
    <div>
        <div v-loading="is_loading"></div>
        <el-button @click="handleOpen">开启</el-button>
        <el-button @click="handleClose">关闭</el-button>
        <el-button @click="handleCFullScreen">全屏加载</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_loading: false
        }
    },
    methods: {
        handleOpen() {},
        handleClose() {},
        handleCFullScreen() {}
    }
}
</script>
