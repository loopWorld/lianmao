<template>
    <header>
        <div>
            <img src="@/images/svgs/search.svg" />
            <div>推荐搜索 关键词</div>
        </div>
        <img src="@/images/svgs/customer-service.svg" />
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

</script>

<style scoped lang="scss">
header {
    width: 343px;
    height: 40px;
    display: flex;
    margin: 0 16px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 10px;
    z-index: 10;

    &>div {
        width: 308px;
        height: 40px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;

        img {
            width: 20px;
            height: 20px;
            padding: 8px 10px;
        }

        div {
            width: 100%;
            padding-left: 80px;
            color: #dbdbdb;
        }
    }

    &>img {
        width: 24px;
        height: 24px;
    }
}</style>