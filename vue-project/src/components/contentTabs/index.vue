<template>
    <section>
        <div class="headerBtn1">
            <Tabs v-model:active="active" animated color="red" background="transparent">
                <Tab v-for="{ id, name, title, shops } in fenleiList" :key="id">
                    <template #title title-class="headerBtn">
                        <div class="btnItem">
                            <span class="tabTitle">{{ title }}</span>
                            <span class="tabName">{{ name }}</span>
                        </div>
                    </template>
                    <template #default :style="{ width: '100vw' }">
                        <div class="flex">
                            <ul>
                                <li v-for="{ id: id1, imgSrc, title, multiple, price }, index in shops" :key="id1"
                                    @click="fn(shops[index])">
                                    <div class="itemImg">
                                        <Skeleton :loading="isLoading">
                                            <img v-mylazy="'http://123.60.208.96:3000/images/shop/' + imgSrc" />
                                            <template #template>
                                                <SkeletonImage
                                                    :style="{ width: '165px', height: '196px', background: '#fff' }" />
                                            </template>
                                        </Skeleton>
                                    </div>
                                    <div class="itemLayout">
                                        <div class="itemTitle">{{ title }}</div>
                                        <div class="itemDesc">
                                            <div class="price">{{ multiple }}倍算</div>
                                            <div class="addIcon">
                                                <img src="http://123.60.208.96:3000/images/svgs/add.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </template>
                </Tab>
            </Tabs>
        </div>

    </section>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { useRouter } from 'vue-router'
import { Tab, Tabs } from 'vant';
import {
    Skeleton,
    SkeletonImage,
} from 'vant';

const router = useRouter();

interface fenleiList {
    id: number,
    title: string,
    name: string,
    shops: any
}

let active = ref<number>(0)
let swiper = ref()
let isLoading = ref<boolean>(false)
let fenleiList = ref<Array<fenleiList>>([])
let changHandle = (val: number,): void => {
    active.value = val;
    swiper.value.swipeTo(val)
};
let fn = (val: any): void => {
    // 由于之前的params传参在页面刷新之后，参数会丢失，所以vue将这种方法移除，建议改为下方这种使用state传递，利用history来接收
    router.push({ name: 'product', state: { data: JSON.stringify(val) } });
}

    ; (async () => {
        const res = await fetch('http://123.60.208.96:3000/fenlei')
        const result = await res.json()
        fenleiList.value = result.val;
        nextTick(() => {
            isLoading.value = false
        })

    })()


</script>

<style scoped lang="scss">
section {
    margin-bottom: 60px;
    width: 100vw;
    overflow: hidden;
    padding: 12px 0;

    .headerBtn1 {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;
        background: transparent;

        .van-tabs.van-tabs--line {
            width: 100%;
        }

        .headerBtn {
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            justify-content: space-between;
            padding: 0 12px;
            background: transparent;
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

        .van-tabs__content.van-tabs__content--animated {


            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;


                li {
                    width: 165px;
                    margin: 10px 0 0;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #fff;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, .1);

                    .itemImg {
                        img {
                            width: 165px;
                            height: 196px;
                        }
                    }

                    .itemLayout {
                        padding: 0 10px;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        flex-direction: column;

                        .itemTitle {
                            font-size: 12px;
                            color: #949497;
                        }

                        .itemDesc {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding-bottom: 10px;

                            .price {
                                padding: 5px;
                                font-size: 12px;
                                color: #fff;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background: #d8182d;
                                border-radius: 10px;
                                margin-top: 5px;
                            }

                            .addIcon {
                                width: 24px;
                                height: 24px;
                            }
                        }
                    }
                }
            }
        }
    }

    // .van-swipe {
    // .van-tabs__content {
    //     width: 100%;

    // .van-swipe-item {
    //     padding: 12px;



    // }
    // }

    // }
}
</style>