<template>
    <section>
        <header>商品分类</header>
        <div class="content">
            <div class="lef">
                <ul class="list">
                    <li class="lis" v-for="{ name }, index in data" :key="name" v-html="fn(name)" @click="active = index"
                        :class="{ active: active == index }"></li>
                </ul>
            </div>
            <div class="rig">
                <div v-for="{ list }, index in data" :key="index" v-show="active == index" class="s1">
                    <div v-for="{ title: ttitle, productList }, index in list" :key="ttitle" class="s2">
                        <p>{{ ttitle }}</p>
                        <ul>
                            <li v-for="{ title: stitle, imgUrl }, index in productList" :key="stitle" class="s3">
                                <img v-mylazy="imgUrl" />
                                <div>{{ stitle }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Menu />
</template>

<script setup lang="ts">
import { ref, onUpdated, nextTick, onBeforeMount } from 'vue';
import Menu from '@/components/menu/index.vue';
import {
    Skeleton,
    SkeletonImage
} from 'vant';

let data = ref();
let active = ref<number>(0)

    ; (async () => {
        const res = await fetch('https://lianmall.usemock.com/category', { method: 'post' })
        const result = await res.json()
        data.value = result.categoryData
    })()

onUpdated(() => {
    nextTick(() => {

    })
})
onBeforeMount(() => {

})

function fn(str: string) {
    return `<span>${str[0] + str[1]}</span><span>${str[2] + str[3]}</span>`
}

</script>

<style scoped lang="scss">
section {
    height: 100vh;
    overflow: hidden;
    header {
        font-size: 18px;
        color: #3a3a3a;
        font-weight: 600;
        text-align: center;
        height: 50px;
        line-height: 50px;
        background: #fff;
        position: sticky;
        top: 0;
    }

    .content {
        width: 100%;
        display: flex;
        height: 100vh;
        box-sizing: border-box;
        padding-bottom: 100px;
        background: #f8f8f8;

        .lef {
            width: 80px;
            height: 100%;
            overflow: auto;
            box-sizing: content-box;

            &::-webkit-scrollbar {
                display: none;
            }

            .list {
                width: 100%;
                box-sizing: border-box;
                background: #f8f8f8;

                .lis {
                    width: 100%;
                    height: 77px;
                    text-align: center;
                    font-weight: 600;
                    font-size: 14px;
                    color: #949497;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 22px 0;
                }

                .lis.active {
                    color: #d8182d;
                    border-left: 2px solid #d8182d;
                    background: #fff;
                }
            }
        }

        .rig {
            height: 100%;
            overflow-y: auto;
            background: #fff;
            padding: 0 10px 0;
            flex: 1;

            &::-webkit-scrollbar {
                display: none;
                /* Chrome Safari */
            }

            .s1 {
                width: 100%;
                padding-top: 20px;

                .s2 {
                    width: 100%;

                    p {
                        font-size: 14px;
                        color: #d8182d;
                        font-weight: 600;
                        padding-bottom: 20px;
                    }

                    ul {
                        display: flex;
                        flex-wrap: wrap;
                        flex-shrink: 0;
                        width: 100%;

                        li {
                            width: 33%;
                            margin-bottom: 20px;
                            text-align: center;
                            font-size: 12px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-between;
                            height: 103px;

                            img {
                                width: 65px;
                                height: 80px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>