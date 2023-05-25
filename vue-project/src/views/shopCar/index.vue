<template>
    <section>
        <header>
            <div class="title">购物车</div>
            <div class="edit">编辑</div>
        </header>
        <div class="content">
            <div class="cardItem">
                <div class="cardHeader">
                    <input type="checkbox" v-model="checked">
                    <div>
                        <img src="http://gankai.gitee.io/vue-jd-h5/img/store-headerM.76065b9f.png" />
                        <span>店铺名称</span>
                    </div>
                </div>
                <div class="cardContent">
                    <div class="orderInfo">
                        <div class="check">
                            <input type="checkbox">
                        </div>
                        <img src="http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-1.7d76b345.png" />
                        <div class="detail">
                            <div>
                                <p class="dTitle">三彩预售新款短裙淑女裙淑女裙淑女裙淑女</p>
                                <p class="dInfo">型号;规格;颜色;</p>
                            </div>
                            <div class="infoCount">
                                <span>￥200</span>
                                <div class="stepper">
                                    <button>-</button>
                                    <input type="text" value="0">
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="orderTotal">合计：123000</div>
                </div>
            </div>
            <div class="cardItem">
                <div class="cardHeader">
                    <input type="checkbox" v-model="checked">
                    <div>
                        <img src="http://gankai.gitee.io/vue-jd-h5/img/store-headerM.76065b9f.png" />
                        <span>店铺名称</span>
                    </div>
                </div>
                <div class="cardContent">
                    <div class="orderInfo">
                        <div class="check">
                            <input type="checkbox">
                        </div>
                        <img src="http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-1.7d76b345.png" />
                        <div class="detail">
                            <div>
                                <p class="dTitle">三彩预售新款短裙淑女裙淑女裙淑女裙淑女</p>
                                <p class="dInfo">型号;规格;颜色;</p>
                            </div>
                            <div class="infoCount">
                                <span>￥200</span>
                                <div class="stepper">
                                    <button>-</button>
                                    <input type="text" value="0">
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="orderTotal">合计：123000</div>
                </div>
                <div class="cardContent">
                    <div class="orderInfo">
                        <div class="check">
                            <input type="checkbox">
                        </div>
                        <img src="http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-1.7d76b345.png" />
                        <div class="detail">
                            <div>
                                <p class="dTitle">三彩预售新款短裙淑女裙淑女裙淑女裙淑女</p>
                                <p class="dInfo">型号;规格;颜色;</p>
                            </div>
                            <div class="infoCount">
                                <span>￥200</span>
                                <div class="stepper">
                                    <button>-</button>
                                    <input type="text" value="0">
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="orderTotal">合计：123000</div>
                </div>
                <div class="cardContent">
                    <div class="orderInfo">
                        <div class="check">
                            <input type="checkbox">
                        </div>
                        <img src="http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-1.7d76b345.png" />
                        <div class="detail">
                            <div>
                                <p class="dTitle">三彩预售新款短裙淑女裙淑女裙淑女裙淑女</p>
                                <p class="dInfo">型号;规格;颜色;</p>
                            </div>
                            <div class="infoCount">
                                <span>￥200</span>
                                <div class="stepper">
                                    <button>-</button>
                                    <input type="text" value="0">
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="orderTotal">合计：123000</div>
                </div>
            </div>
        </div>
        <div class="submitBtn">
            <div class="check">
                <input type="checkbox" id="checkAll" />
                <label for="checkAll">全选</label>
            </div>
            <div class="info">
                <span>合计：</span>
                <div class="price">
                    ￥200.00
                </div>
            </div>
            <button v-show="true" class="js">结算</button>
            <button v-show="false" class="del">删除</button>
        </div>
    </section>
    <Menu />
</template>

<script setup lang="ts">
import { Checkbox } from 'vant';
import { ref } from 'vue';
import Menu from '@/components/menu/index.vue';

const checked = ref<boolean>(true)

</script>

<style scoped lang="scss">
section {
    padding: 0 16px;
    margin-bottom: 120px;

    header {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        line-height: 44px;
        box-sizing: border-box;

        .title {
            text-align: center;
            font-size: 18px;
            color: #3a3a3a;
            font-weight: 600;
        }

        .edit {
            color: #d8182d;
            font-size: 13px;
        }
    }

    .content {
        .cardItem {
            margin-top: 20px;
            padding: 10px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, .1);

            .cardHeader {
                display: flex;

                input[type=checkbox] {
                    border-radius: 50%;
                }

                div {
                    margin-left: 10px;
                    display: flex;
                    align-items: center;

                    img {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                    }

                    span {
                        color: #3a3a3a;
                        font-size: 12px;
                    }
                }
            }

            .cardContent {

                .orderInfo {
                    width: 100%;
                    padding: 10px 0 16px;
                    display: flex;
                    justify-content: flex-start;

                    .check {
                        display: flex;
                        align-items: center;
                        width: 20px;
                    }

                    img {
                        width: 100px;
                        height: 100px;
                        margin-left: 5px;
                        border-radius: 5px;
                    }

                    .detail {
                        width: 55%;
                        padding-left: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        &>div {
                            .dTitle {
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                font-size: 13px;
                                color: #3a3a3a;
                            }

                            .dInfo {
                                font-size: 13px;
                                color: #949497;
                                padding-top: 4px;
                                margin-top: 10px;
                            }
                        }

                        div.infoCount {
                            color: #d8182d;
                            font-size: 14px;
                            font-weight: 600;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .stepper {
                                width: 70px;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                button {
                                    width: 16px;
                                }

                                input {
                                    width: 20px;
                                    text-align: center;
                                }
                            }
                        }
                    }
                }

                .orderTotal {
                    color: #949497;
                    font-size: 14px;
                    text-align: right;
                }
            }
        }
    }

    .submitBtn {
        position: fixed;
        bottom: 50px;
        height: 43px;
        background: #fff;
        display: flex;
        align-items: center;
        width: 100vw;
        left: 0;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        padding-left: 24px;

        .info {
            flex: 1;
            padding-right: 12px;
            font-weight: 500;
            text-align: right;
            font-size: 17px;
            color: #333;

            .price {
                color: #d8182d;
                display: inline-block;
                font-weight: 600;

            }
        }

        &>button {
            background-color: #d8182d;
            height: 42px;
            border: 1px solid #d8182d;
            line-height: 42px;
            width: 108px;
            font-size: 18px;
            color: #fff;
        }
    }
}</style>