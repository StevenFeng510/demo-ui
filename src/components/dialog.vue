<template>
    <!-- 对话框的遮罩 -->
    <div class="os-dialog__wrapper">
        <!-- 对话框 -->
        <div class="os-dialog">
            <!-- 对话框头部 -->
            <div class="os-dialog__header">
                <slot name="title">
                    <span class="os-dialog__title">{{ title }}</span>
                </slot>
                <button class="os-dialog__headerbtn">
                    <i class="os-icon-close"></i>
                </button>
            </div>
            <!-- 对话框主体内容 -->
            <div class="os-dialog__body">
                <span>这是一段提示</span>
            </div>
            <!-- 对话框底部 -->
            <div class="os-dialog__footer">
                <os-button>取消</os-button>
                <os-button type="primary">确定</os-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OsDialog',
    props: {
        title: {
            type: String,
            default: '提示',
        },
    },
};
</script>

<style lang="scss" scoped>
.os-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .os-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &__header {
            padding: 20px 20px 10px;
            .os-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .os-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .os-icon-close {
                    color: #909399;
                }
            }
        }

        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            .os-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
</style>
