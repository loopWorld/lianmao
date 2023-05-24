<template>
    <section>
        <div class="headerBtn">
            <div class="border" :style="{ transform: `translateX(${16 + active * 70}px)` }"></div>
            <div v-for="{ id, name, title }, index in fenleiList" :key="id" class="btnItem"
                :class="{ color: active === index }" @click="changHandle(index)">
                <span class="tabTitle">{{ title }}</span>
                <span class="tabName">{{ name }}</span>
            </div>
        </div>
        <Swipe touchable width="375" ref="swiper" duration="300">
            <div class="flex">
                <SwipeItem v-for="{id,shops} in fenleiList" :key="id">
                    <ul>
                        <li v-for="{id:id1,imgSrc} in shops" :key="id1">
                            <div class="itemImg">
                                <img :src="imgPath + imgSrc" />
                            </div>
                            <div class="itemLayout">
                                <div class="itemTitle"></div>
                                <div class="itemDesc">
                                    <div class="price"></div>
                                    <div class="addIcon"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </SwipeItem>
            </div>
        </Swipe>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swipe, SwipeItem } from 'vant';

const imgPath = 'src/images/shop/'

interface fenleiList {
    id: number,
    title: string,
    name: string,
    shops: object
}

let active = ref<number>(0)
let swiper = ref()
let fenleiList = ref<Array<fenleiList>>([])
let changHandle = (val: number,): void => {
    active.value = val;
    swiper.value.swipeTo(val)
};

; (async () => {
    const res = await fetch('http://127.0.0.1:3000/fenlei')
    const result = await res.json()
    fenleiList.value = result.val;
})()

</script>

<style scoped lang="scss">
section {
    margin-bottom: 60px;
    padding: 12px;
    width: 100vw;
    overflow: hidden;

    .headerBtn {
        width: 100%;
        height: 43px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;

        .border {
            width: 37.5px;
            height: 3px;
            position: absolute;
            z-index: 1;
            background: #f44;
            bottom: 0;
            border-radius: 3px;
            transition: all .3s;
        }

        .btnItem {
            padding: 0 5px 5px;
            font-weight: 500;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            height: 100%;
            color: #3a3a3a;
            flex: 1;

            .tabTitle {
                font-size: 17px;
            }

            .tabName {
                font-size: 12px;
            }
        }
    }

    .van-swipe {
        .flex {
            .van-swipe-item {
                height: 300px;
            }
        }
    }
}
</style>