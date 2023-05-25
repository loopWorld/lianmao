<template>
    <section>
        <Swipe class="my-swipe" disabled="false" height="350">
            <div class="flex">
                <SwipeItem v-for="item, index in 5" :key="index">
                    <div class="imgBox">
                        <img :src="data.imgSrc" />
                    </div>
                </SwipeItem>
            </div>
        </Swipe>
        <div class="list">
            <div class="productTitle">
                <div class="titleLeft">{{ data.multiple }}倍算力</div>
                <div>
                    <img src="@/images/svgs/heart-null.svg">
                </div>
            </div>
            <div class="productPrice">
                <span>购买该商品可获得算力值，算力值可兑换CM币</span>
            </div>
            <div class="productInfo">
                <div>快递包邮</div>
                <div>月销: 888</div>
            </div>
            <div class="itemInfo">
                <div class="itemInfoTItlte">发货地</div>
                <img src="@/images/svgs/anchor-point.svg" />
            </div>
            <div class="itemInfo">
                <div class="itemInfoTItlte">品牌</div>
            </div>
            <div class="itemInfo" :style="{ display: 'flex' }" @click="show = !show">
                <div class="itemInfoTItlte">选择</div>
                <div class="c">选择颜色分类，尺码</div>
                <div class="rig"> > </div>
            </div>
            <div class="storeInfo">
                <div class="lef">
                    <img
                        src="data:image/png;base64,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" />
                    <div>店铺名称</div>
                </div>
                <div class="rig">
                    <img src="@/images/svgs/message-round.svg" />
                    <button>进店逛逛</button>
                </div>
            </div>
            <div class="xq">
                <span>宝贝详情</span>
            </div>
        </div>
        <div class="goBack" @click="router.back()">
            <img src="@/images/svgs/green-btn.svg">
        </div>
        <div class="goodsActive">
            <button class="y">加入购物车</button>
            <button class="r">立即购买</button>
        </div>
        <div class="actionSheet" :class="{show}">

            <div class="content">
                <span class="close" @click="show = false">
                    <img src="@/images/svgs/close-popup.svg" />
                </span>
                <ul class="itop">
                    <img :src="data.imgSrc" />
                    <li>
                        <span class="price">￥{{ data.price }}</span>
                        <span class="count">库存2279件</span>
                        <span class="color">选择颜色：尺码</span>
                    </li>
                </ul>
                <ul class="ibot">
                    <li class="color">
                        <span>颜色</span>
                        <div class="colorList">
                            <div class="colorTag">
                                <img :src="data.imgSrc" />
                                <span>黑色</span>
                            </div>
                            <div class="colorTag">
                                <img :src="data.imgSrc" />
                                <span>黑色</span>
                            </div>
                            <div class="colorTag">
                                <img :src="data.imgSrc" />
                                <span>黑色</span>
                            </div>
                            <div class="colorTag">
                                <img :src="data.imgSrc" />
                                <span>黑色</span>
                            </div>
                            <div class="colorTag">
                                <img :src="data.imgSrc" />
                                <span>黑色</span>
                            </div>
                        </div>
                    </li>
                    <li class="size">
                        <span>尺码</span>
                        <div class="sizList">
                            <div class="sizeTag">s</div>
                            <div class="sizeTag">m</div>
                            <div class="sizeTag">l</div>
                            <div class="sizeTag">xl</div>
                            <div class="sizeTag">2xl</div>
                            <div class="sizeTag">3xl</div>
                            <div class="sizeTag">4xl</div>
                            <div class="sizeTag">sm</div>
                        </div>
                    </li>
                    <li class="count">
                        <span>购买数量</span>
                        <div>
                            <button @click="crement('decrement')">-</button>
                            <input type="text" v-model.number="count">
                            <button @click="crement('increment')">+</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="goodsActive">
                <button class="y">加入购物车</button>
                <button class="r">立即购买</button>
            </div>
        </div>
        <div class="mark" v-show="show"></div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { useRouter } from 'vue-router';
const data = JSON.parse(history.state.data)
const router = useRouter()
let count = ref<number>(0)
let show = ref<boolean>(false)
let crement = (type:string):number => count.value = type==='increment' ? count.value + 1 : count.value>0?count.value - 1 : 0;

    ; (() => {
        document.body.scrollTop = 0
    })()


</script>

<style scoped lang="scss">
section {
    position: relative;
    overflow: hidden;

    .my-swipe {


        .flex {
            .imgBox {
                height: 350px;
            }
        }
    }

    .list {
        padding-top: 20px;

        .productTitle {
            padding: 0 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .titleLeft {
                display: inline-block;
                padding: 5px;
                color: #fff;
                background-color: #d8182d;
                border-radius: 10px;
                font-size: 12px;
            }

            img {
                width: 24px;
                height: 24px;
            }
        }

        .productPrice {
            padding: 8px 0 0 16px;

            span {
                font-size: 12px;
                color: #949497;
                font-weight: 600;
            }
        }

        .productInfo {
            display: flex;
            justify-content: space-around;
            padding: 20px 16px 10px;
            align-items: center;

            div {
                font-size: 12px;
                color: #949497;
            }
        }

        .itemInfo {
            display: flex;
            align-items: center;
            padding: 0 20px;
            box-sizing: border-box;
            height: 44px;

            .itemInfoTItlte {
                font-size: 14px;
                color: #323233;
            }

            img {
                width: 15px;
                height: 15px;
                margin-left: 20px;
            }

            .c {
                margin-left: 40px;
                color: #969799;
                font-size: 14px;
            }

            .rig {
                color: #969799;
                font-size: 14px;
                margin-left: auto;
            }
        }

        .storeInfo {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;

            .lef {
                padding: 16px 0 0 16px;
                display: flex;
                align-items: center;

                div {
                    font-size: 14px;
                }

                img {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    margin-right: 10px;
                }
            }

            .rig {
                display: flex;
                align-items: center;
                padding: 16px 16px 0 0;

                img {
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                }

                button {
                    color: #fff;
                    width: 50px;
                    height: 28px;
                    padding: 0 8px;
                    box-sizing: content-box;
                    border: none;
                    background: #d8182d;
                    font-size: 12px;
                }
            }
        }

        .xq {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 50px;
            margin-bottom: 65px;
        }
    }

    .goBack {
        position: fixed;
        left: 14px;
        top: 16px;

        img {
            width: 24px;
            height: 24px;
        }
    }

    .goodsActive {
        width: 100%;
        height: 43px;
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        z-index: 10;

        button {
            flex: 1;
            border: none;
            height: 100%;
            color: #fff;
            font-size: 16px;
        }

        .y {
            background: #f3ca43;
        }

        .r {
            background: #d8182d;
        }
    }

    .actionSheet {
        width: 100vw;
        height: 75vh;
        position: fixed;
        bottom: -75vh;
        background: #fff;
        border-radius: 15px 15px 0 0;
        z-index: 11;
        transition: bottom .3s;

        .content {
            padding: 20px;

            .close {
                float: right;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            .itop {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;

                img {
                    width: 100px;
                    height: 100px;
                }

                li {
                    display: flex;
                    flex-direction: column;
                    padding-top: 10px;
                    align-items: flex-start;
                    justify-content: flex-end;
                    height: 100px;
                    margin-left: 10px;
                    box-sizing: border-box;

                    span {
                        padding: 5px 0;
                    }

                    .price {
                        color: #d8182d;
                        font-size: 17px;
                        font-weight: 600;
                    }

                    .count {
                        font-size: 14px;
                        color: #3a3a3a;
                    }

                    .color {
                        font-size: 12px;
                        color: #3a3a3a;
                    }
                }
            }

            .ibot {
                &>li {
                    &>span {
                        font-size: 14px;
                        color: #3a3a3a;
                        padding-bottom: 10px;
                    }

                    &>div {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                }

                .color {
                    .colorTag {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        width: 67px;
                        height: 27px;
                        font-size: 14px;
                        background: #efeff4;
                        border: 1px solid #efeff4;
                        border-radius: 5px;
                        margin-right: 16px;
                        margin-top: 10px;
                        padding-right: 10px;
                        box-sizing: content-box;

                        img {
                            width: 24px;
                            height: 24px;
                            padding: 0 10px 0 2px;
                        }
                    }
                }

                .size {
                    .sizeTag {
                        font-size: 13px;
                        color: #000;
                        width: 42px;
                        height: 24px;
                        margin: 10px 16px 0 0;
                        display: flex;
                        justify-content: center;
                        border-radius: 5px;
                        align-items: center;
                        background: #efeff4;
                    }
                }

                &>.count {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 32px;

                    span {
                        padding: 0;
                    }

                    &>div {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        button {
                            flex: 1;
                            width: 20px;
                            background: #fff;
                            font-size: 25px;
                            border: none;
                        }
                        input {
                            flex: 1;
                            width: 20px;
                            text-align: center;
                            margin: 0 5px;
                        }
                    }
                }
            }
        }


    }

    .mark {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, .65);
        z-index: 0;
    }

    .show {
        bottom: 0;
    }
}</style>