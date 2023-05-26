<template>
    <section>
        <div class="searchHeader">
            <span class="goBack" @click="router.back()">
                <img src="http://123.60.208.96:3000/images/svgs/left-btn.svg" />
            </span>
            <div class="searchContainer">
                <img src="http://123.60.208.96:3000/images/svgs/search.svg" />
                <input type="text" placeholder="搜索、关键词" v-model="test">
            </div>
            <span class="search" @click="enterSearch">搜索</span>
        </div>
        <div class="searchContent">
            <div class="hotList">
                <span class="hotWords">热搜词</span>
                <div>
                    <div class="hotDetail hot">
                        小米手机
                        <img src="http://123.60.208.96:3000/images/svgs/hot.svg" />
                    </div>
                    <div class="hotDetail hot">
                        笔记本
                        <img src="http://123.60.208.96:3000/images/svgs/hot.svg" />
                    </div>
                    <div class="hotDetail">
                        电脑
                        <!-- <img src="http://123.60.208.96:3000/images/svgs/hot.svg" /> -->
                    </div>
                    <div class="hotDetail">
                        平板
                        <!-- <img src="http://123.60.208.96:3000/images/svgs/hot.svg" /> -->
                    </div>
                    <div class="hotDetail hot">
                        液晶电视
                        <img src="http://123.60.208.96:3000/images/svgs/hot.svg" />
                    </div>
                    <div class="hotDetail">
                        家电
                        <!-- <img src="http://123.60.208.96:3000/images/svgs/hot.svg" /> -->
                    </div>
                    <div class="hotDetail">
                        玩具
                        <!-- <img src="http://123.60.208.96:3000/images/svgs/hot.svg" /> -->
                    </div>
                </div>
            </div>
            <div class="searchList historyList">
                <div class="historySearch">
                    <span>历史搜索</span>
                    <img src="http://123.60.208.96:3000/images/svgs/icon-delete.svg" @click="isShowDialog = true" />
                </div>
                <div class="histortSearch">
                    <span v-for="{ id, title } in historyList" :key="id">{{ title }}</span>
                </div>
            </div>
        </div>
        <div class="dialog" v-show="isShowDialog">
            <div class="dialogcontainer">
                <div class="message">
                    <p><img src="http://123.60.208.96:3000/images/svgs/icon-alertwarn.svg" /></p>
                    <p>确定删除搜索历史吗？</p>
                </div>
                <div class="btn">
                    <button class="cancel" @click="isShowDialog = false">取消</button>
                    <button class="confirm"
                        @click="() => { (isShowDialog = true, historyList = []) && (isShowDialog = false) }">确认</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { nanoid } from 'nanoid'
interface T {
    title: string,
    id: string
}
let historyList = ref<Array<T>>([])
let isShowDialog = ref<boolean>(false)

const router = useRouter()
const test = ref<string>("")

const enterSearch = () => test.value !== '' && historyList.value.push({ title: test.value, id: nanoid() && (test.value = '') })


</script>

<style scoped lang="scss">
section {
    padding-top: 45px;
    width: 100%;
    height: 100%;
    background: #efeff4;

    .searchHeader {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 44px;

        .goBack {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px 0 16px;

            img {
                width: 24px;
                height: 24px;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
            }
        }

        .searchContainer {
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 10px;
            border-radius: 6px;
            background: #f7f7f7;

            img {
                width: 28px;
                height: 28px;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
            }

            input {
                background: #f7f7f7;
                padding-left: 50px;
                width: 100%;
                font-size: 16px;
                height: 21px;
                line-height: 21;
            }
        }

        .search {

            padding-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: #d8182d;
            font-size: 16px;
        }
    }

    .searchContent {
        width: 100%;
        padding: 0 16px;

        .hotList {
            padding-top: 18px;

            span {
                position: relative;
                color: #d8182d;
                font-size: 14px;
            }

            &>div {
                margin-top: 18px;

                .hotDetail {
                    font-size: 13px;
                    color: #686868;
                    border: 1px solid #979797;
                    padding: 4px 10px;
                    margin-right: 16px;
                    border-radius: 3px;
                    display: inline-block;
                    margin-bottom: 15px;

                    img {
                        width: 12px;
                        height: 13px;
                        display: inline-block;
                    }
                }

                .hotDetail.hot {
                    border: 1px solid #d8182d;
                    color: #d8182d;
                }
            }
        }

        .searchList {
            margin-bottom: 20px;

            .historySearch {
                padding-top: 10px;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                color: #d8182d;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            .histortSearch {
                span {
                    font-size: 14px;
                    color: #686868;
                    padding: 4px 10px;
                    margin: 0 16px 10px 0;
                    display: block;
                }
            }
        }
    }

    .dialog {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .5);
        z-index: 20;

        .dialogcontainer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            background: #fff;
            border-radius: 18px;
            overflow: hidden;

            .message {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding: 20px;
                text-align: center;

                img {
                    display: block;
                    margin: 0 auto;
                    width: 24px;
                    height: 24px;
                }

                p {
                    padding-top: 20px;
                    font-size: 16px;
                    color: #000;
                }
            }

            .btn {
                display: flex;
                width: 100%;
                border-top: 1px solid #999;

                button {
                    flex: 1;
                    height: 70px;
                    text-align: center;
                    font-size: 16px;
                    outline: none;
                    border: none;
                    background: #fff;
                }

                .confirm {
                    color: #f63515;
                    border-left: 1px solid #999;
                }
            }
        }
    }
}
</style>