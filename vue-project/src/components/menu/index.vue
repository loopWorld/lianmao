<template>
    <Tabbar v-model="active" class="navList" active-color="rgb(254, 79, 112)">
        <TabbarItem v-for="{ title, path, imgSrc, activeimgSrc }, index in navList" :key="index" @click="router.push(path)">
            <span>{{ title }}</span>
            <template #icon="props">
                <img :src="active === index ? activeimgSrc : imgSrc" />
            </template>
        </TabbarItem>
    </Tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant';

const active = ref<number>();
const router = useRouter()
let navList = [
    {
        title: '首页',
        path: 'home',
        imgSrc: 'http://123.60.208.96:3000/images/home.png',
        activeimgSrc: 'http://123.60.208.96:3000/images/home_active.png'
    },
    {
        title: '分类',
        path: 'classification',
        imgSrc: 'http://123.60.208.96:3000/images/classify.png',
        activeimgSrc: 'http://123.60.208.96:3000/images/classify_active.png'
    },
    {
        title: '购物车',
        path: 'shopCar',
        imgSrc: 'http://123.60.208.96:3000/images/cart.png',
        activeimgSrc: 'http://123.60.208.96:3000/images/cart_active.png'
    },
    {
        title: '我',
        path: 'profile',
        imgSrc: 'http://123.60.208.96:3000/images/mine.png',
        activeimgSrc: 'http://123.60.208.96:3000/images/mine_active.png'
    }
]

setTimeout(() => {
    switch(router.currentRoute.value.fullPath) {
        case '/home': return active.value = 0
        case '/classification': return active.value = 1
        case '/shopCar': return active.value = 2
        case '/profile': return active.value = 3
    }
}, 0)

</script>

<style scoped lang="scss">
.navList {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    z-index: 10;
    background: #fff;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            font-size: 12px;
        }

        img {
            width: 18px;
            height: 18px;
        }
    }
}</style>