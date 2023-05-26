<template>
    <section>
        <header>
            <img src="http://gankai.gitee.io/vue-jd-h5/img/store-new.9ed79eb9.png" />
            <div class="userInfo">
                <div class="userInfoTop">哎呦你干嘛！</div>
                <div class="userInfoBot">
                    <div class="sharingNode">分享节点</div>
                    <div class="businessNode">商家节点</div>
                </div>
            </div>
        </header>
        <div class="myInfo">
            <div class="infoList">
                <div class="infoLis">
                    <b>09</b>
                    <span>商品关注</span>
                </div>
                <div class="infoLis">
                    <b>09</b>
                    <span>店铺关注</span>
                </div>
                <div class="infoLis">
                    <b>09</b>
                    <span>我的足迹</span>
                </div>
            </div>
        </div>
        <div class="myAll">
            <span class="lookOrders">查看全部订单>> </span>
            <ul class="orderList">
                <li class="orderLis">
                    <img src="http://123.60.208.96:3000/images/svgs/pending-pay.svg" />
                    <span>待付款</span>
                </li>
                <li class="orderLis">
                    <img src="http://123.60.208.96:3000/images/svgs/be-delivered.svg" />
                    <span>待发货</span>
                </li>
                <li class="orderLis">
                    <img src="http://123.60.208.96:3000/images/svgs/pending-receipt.svg" />
                    <span>待收货</span>
                </li>
                <li class="orderLis">
                    <img src="http://123.60.208.96:3000/images/svgs/all-orders.svg" />
                    <span>退换/售后</span>
                </li>
            </ul>
        </div>
        <div class="myContent">
            <div class="optionsList">
                <div class="ooptionsLis">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/my-assets.svg" />
                        <span>我的钱包</span>
                    </div>
                    <span> > </span>
                </div>
                <div class="ooptionsLis">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/node-application.svg" />
                        <span>节点申请</span>
                    </div>
                    <span> > </span>
                </div>
                <div class="ooptionsLis">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/businessmen-stationed.svg" />
                        <span>商家入驻</span>
                    </div>
                    <span> > </span>
                </div>
                <div class="ooptionsLis">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/sharing-links.svg" />
                        <span>分享链接</span>
                    </div>
                    <span> > </span>
                </div>
            </div>
        </div>
        <div class="myContent">
            <div class="optionsList">
                <div class="ooptionsLis" @click="router.push({ name: 'address' })">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/shipping-address.svg" />
                        <span>收货地址</span>
                    </div>
                    <span> > </span>
                </div>
                <div class="ooptionsLis">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/message-center.svg" />
                        <span>消息中心</span>
                    </div>
                    <span> > </span>
                </div>
                <div class="ooptionsLis">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/help-center.svg" />
                        <span>帮助中心</span>
                    </div>
                    <span> > </span>
                </div>
                <div class="ooptionsLis">
                    <div class="itemInfo">
                        <img src="http://123.60.208.96:3000/images/svgs/setting.svg" />
                        <span>设置</span>
                    </div>
                    <span> > </span>
                </div>
            </div>
        </div>
    </section>
    <Menu />
</template>

<script setup lang="ts">
import Menu from '@/components/menu/index.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

</script>

<style scoped lang="scss">
section {
    width: 100%;
    height: 100%;
    padding: 30px 16px 100px;
    background: linear-gradient(#fe4f70, #ff9351);


    header {
        display: flex;
        padding: 0 0 20px 24px;
        justify-content: flex-start;
        align-items: center;

        img {
            width: 70px;
            height: 70px;
        }

        .userInfo {
            padding-left: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            color: #fff;


            .userInfoBot {
                padding-top: 5px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .sharingNode {
                    padding-left: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60px;
                    height: 25px;
                    font-size: 12px;
                    text-align: center;
                    background: url('data:image/png;base64,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') no-repeat 50%;
                    background-size: 100% 100%;
                    border-radius: 10px 10px;
                    box-sizing: content-box;
                }

                .businessNode {
                    margin-left: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60px;
                    height: 22px;
                    text-align: center;
                    font-size: 12px;
                    background-color: #71c0f6;
                    border-radius: 10px 10px;
                }
            }
        }
    }

    .myInfo {
        font-size: 16px;
        color: #fff;
        padding-bottom: 16px;

        .infoList {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .infoLis {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                b {
                    font-weight: bold;
                }

                span {
                    font-size: 13px;
                    margin-top: 3px;
                }
            }
        }
    }

    .myAll {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 10px;

        box-sizing: content-box;

        .lookOrders {
            font-size: 12px;
            font-weight: 600;
            color: #3a3a3a;
            padding: 16px 0 18px 19px;
            height: 16px;
            display: block;
        }

        .orderList {
            padding-bottom: 18px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .orderLis {
                font-size: 14px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 48px;

                img {
                    width: 24px;
                    height: 24px;
                    vertical-align: middle;
                    fill: currentColor;
                    overflow: hidden;
                }

                span {
                    padding-top: 5px;
                    font-weight: 600;
                }
            }
        }
    }

    .myContent {
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, .1);
        background: #fff;
        border-radius: 10px;
        padding: 0 18px;
        margin-top: 18px;

        .optionsList {
            box-sizing: content-box;
            padding-top: 20px;

            .ooptionsLis {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 15px;
                color: #888;
                padding-bottom: 22px;

                .itemInfo {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    img {
                        width: 24px;
                        height: 24px;
                        padding-right: 16px;
                    }
                }

            }
        }
    }
}
</style>