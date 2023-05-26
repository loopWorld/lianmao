<template>
    <section>
        <ul class="spikeTop">
            <li class="iTopLef">
                <div class="itemTop">
                    <span class="itemTitle">链猫秒杀</span>
                    <div class="timeText">
                        <span>8点场</span>
                        <div>{{ '00:00:00' }}</div>
                    </div>
                </div>
                <div class="itemBot">
                    <div class="itemContent">
                        <img src="http://123.60.208.96:3000/images/home/demo1.png" />
                        <span>￥298</span>
                        <s>￥399</s>
                    </div>
                    <div class="itemContent">
                        <img src="http://123.60.208.96:3000/images/home/demo2.png" />
                        <span>￥298</span>
                        <s>￥399</s>
                    </div>
                    <div class="itemContent">
                        <img src="http://123.60.208.96:3000/images/home/demo3.png" />
                        <span>￥298</span>
                        <s>￥399</s>
                    </div>
                </div>
            </li>
            <li class="iTopRig">
                <div class="rigHeader">
                    <span class="catSpikeText">发现好货</span>
                    <span class="tagText">品质好物</span>
                </div>
                <span>好物不贵</span>
                <div class="itemImgs">
                    <img src="http://123.60.208.96:3000/images/home/demo4.png" />
                    <img src="http://123.60.208.96:3000/images/home/demo5.png" />
                </div>
            </li>
        </ul>
        <ul class="spikeCon">
            <li class="conItem">
                <span class="contentTitle">特价秒杀</span>
                <span class="contentDescr" style="color: #ff9351">10元抢购</span>
                <img src="http://123.60.208.96:3000/images/home/demo6.png" />
            </li>
            <li class="conItem">
                <span class="contentTitle">品牌秒杀</span>
                <span class="contentDescr" style="color: #dd3749">笔记本秒杀</span>
                <img src="http://123.60.208.96:3000/images/home/demo7.png" />
            </li>
            <li class="conItem">
                <span class="contentTitle">新品首发</span>
                <span class="contentDescr" style="color: #ff9351">小黑盒新品</span>
                <img src="http://123.60.208.96:3000/images/home/demo8.png" />
            </li>
            <li class="conItem">
                <span class="contentTitle">优品排行</span>
                <span class="contentDescr" style="color: #91c95b">榜上好物购</span>
                <img src="http://123.60.208.96:3000/images/home/demo9.png" />
            </li>
        </ul>
        <ul class="spikeBot">
            <li class="iBotItem">
                <div class="iBotHeader">
                    <span class="catSpikeText">大牌购走</span>
                    <span class="tagText" style="border: 1px solid #d8182d;color :#d8182d;">戴尔 > </span>
                </div>
                <span>信赖大品牌</span>
                <div class="itemImgs">
                    <img src="http://123.60.208.96:3000/images/home/demo10.png" />
                    <img src="http://123.60.208.96:3000/images/home/demo11.png" />
                </div>
            </li>
            <li class="iBotItem">
                <div class="iBotHeader">
                    <span class="catSpikeText">爱逛好店</span>
                    <span class="tagText" style="border: 1px solid #dbbaff;color :#dbbaff;">懂你所要</span>
                </div>
                <span>来逛个够</span>
                <div class="itemImgs">
                    <img src="http://123.60.208.96:3000/images/home/demo12.png" />
                    <img src="http://123.60.208.96:3000/images/home/demo13.png" />
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
section {
    margin: 12px;
    padding-top: 5px;
    border-radius: 8px;
    background: #fff;

    .spikeTop {
        display: flex;
        justify-content: space-between;
        align-items: stretch;

        li {
            padding: 12px;
        }

        .iTopLef {
            .itemTop {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .itemTitle {
                    font-size: 14px;
                    color: #3a3a3a;
                    margin-right: 5px;
                }

                .timeText {
                    border: 1px solid #ccc;
                    width: 107px;
                    height: 16px;
                    line-height: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                        font-size: 12px;
                        background: #d8182d;
                        color: #fff;
                        width: 42px;
                        text-align: center;
                    }

                    div {
                        flex: 1;
                        font-size: 12px;
                        color: #dd3749;
                        line-height: 16px;
                        text-align: center;
                    }
                }
            }

            .itemBot {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .itemContent {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 4px;
                    font-size: 12px;

                    img {
                        width: 54px;
                        height: 54px;
                    }

                    span {
                        color: #d8182d;
                        font-weight: 600;
                    }

                    s {
                        color: #949497;
                    }
                }
            }
        }

        .iTopRig {
            background-color: #fff;
            padding: 12px;
            border-radius: 8px;
            flex: 1;

            .rigHeader {
                .catSpikeText {
                    font-size: 14px;
                    color: #3a3a3a;
                }

                .tagText {
                    border: 1px solid #d8182d;
                    display: inline-block;
                    text-align: center;
                    margin-left: 7px;
                    border-radius: 2px;
                    color: #d8182d;
                    width: 62px;
                    font-size: 12px;
                    height: 18px;
                    line-height: 16px;
                    box-sizing: border-box;
                }
            }

            &>span {
                font-size: 12px;
                color: #949497;
            }

            .itemImgs {
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                    width: 63px;
                    height: 63px;
                }
            }
        }
    }

    .spikeCon {
        padding-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .conItem {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .contentTitle {
                font-size: 14px;
                color: #3a3a3a;
                margin-bottom: 2px;
            }

            .contentDescr {
                font-size: 12px;
            }

            img {
                width: 70px;
                height: 70px;
            }
        }

    }

    .spikeBot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .iBotItem {
            background-color: #fff;
            padding: 12px;
            border-radius: 8px;
            flex: 1;

            .iBotHeader {
                .catSpikeText {
                    font-size: 14px;
                    color: #3a3a3a;
                }

                .tagText {
                    border: 1px solid #d8182d;
                    display: inline-block;
                    text-align: center;
                    margin-left: 10px;
                    border-radius: 2px;
                    color: #d8182d;
                    width: 62px;
                    font-size: 12px;
                    height: 18px;
                    line-height: 16px;
                    box-sizing: border-box;
                }
            }

            &>span {
                font-size: 12px;
                color: #949497;
            }

            .itemImgs {
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                    width: 63px;
                    height: 63px;
                }
            }
        }
    }
}
</style>