<template>
    <Tabbar v-model="active" class="navList" active-color="rgb(254, 79, 112)">
        <TabbarItem v-for="{ title,path,imgSrc,activeimgSrc },index in navList" :key="index" @click="router.push(path)">
            <span>{{ title }}</span>
            <template #icon="props">
                <img :src="imgPath+(active === index ? activeimgSrc : imgSrc)" />
            </template>
        </TabbarItem>
    </Tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant';

const active = ref<number>(0);
const router = useRouter()
const imgPath = 'src/images/'
const navList = [
    {
        title: '首页',
        path: 'home',
        imgSrc: 'home.png',
        activeimgSrc: 'home_active.png'
    },
    {
        title: '分类',
        path: 'classification',
        imgSrc: 'classify.png',
        activeimgSrc: 'classify_active.png'
    },
    {
        title: '购物车',
        path: 'shopCar',
        imgSrc: 'cart.png',
        activeimgSrc: 'cart_active.png'
    },
    {
        title: '我',
        path: 'profile',
        imgSrc: 'mine.png',
        activeimgSrc: 'mine_active.png'
    }
]

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
}
</style>