<template>
    <div>
        <el-button @click="handleSuccess">Success</el-button>
        <el-button @click="handleInfo">Info</el-button>
        <el-button @click="handleError">Error</el-button>
    </div>
</template>

<script>
import Message from "../../packages/message"
export default {
    data() {
        return {}
    },
    methods: {
        handleSuccess() {
            Message.success('success')
        },
        handleInfo() {
            Message.info('info')
        },
        handleError() {
            Message.error('error')
        }
    }
}
</script>
