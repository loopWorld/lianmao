<template>
    <section>
        <header>
            <div class="imgBox" @click="router.back()">
                <img src="http://123.60.208.96:3000/images/svgs/green-btn.svg" />
            </div>
            <div class="headerTitle">新增所在地区</div>
        </header>
        <div class="addressContent">
            <div class="addressList">
                <div class="addressLis">
                    <div class="title">联系人</div>
                    <div class="inp">
                        <input type="text" placeholder="请输入姓名">
                        <div class="radio">
                            <van-radio-group v-model="addressData.sex">
                                <span @click="addressData.sex = '男士'" :class="{ active: addressData.sex == '男士' }">男士</span>
                                <span @click="addressData.sex = '女士'" :class="{ active: addressData.sex == '女士' }">女士</span>
                            </van-radio-group>
                        </div>
                    </div>
                </div>
                <div class="addressLis">
                    <div class="title">电话</div>
                    <div class="inp">
                        <input type="text" placeholder="手机号码">
                    </div>
                </div>
                <div class="addressLis">
                    <div class="title">电话</div>
                    <div class="inp">
                        <input type="text" placeholder="手机号码">
                    </div>
                </div>
                <div class="addressLis">
                    <div class="title">所在地区</div>
                    <div class="inp" @click="isShowAddressArea = true" placeholder="">
                        <input type="text" placeholder="请选择省市区" disabled>
                        <span> > </span>
                    </div>
                </div>
                <div class="addressLis">
                    <div class="title">地址</div>
                    <div class="inp">
                        <input type="text" placeholder="如：道路、门牌号、小区、楼栋号、单元室等" v-model="b">
                    </div>
                </div>
                <div class="addressLis">
                    <div class="title">标签</div>
                    <div class="inp">
                        <div class="radio TYPE">
                            <van-radio-group v-model="addressData.type">
                                <span @click="addressData.type = '家'" :class="{ active: addressData.type == '家' }">家</span>
                                <span @click="addressData.type = '学校'"
                                    :class="{ active: addressData.type == '学校' }">学校</span>
                                <span @click="addressData.type = '公司'"
                                    :class="{ active: addressData.type == '公司' }">公司</span>
                            </van-radio-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="addressBtn">
            <button @click="saveFrom">保存</button>
        </div>

    </section>
    <ActionSheet v-model:show="isShowAddressArea" closeable>
        <Area :area-list="areaList" :loading="areaList ? false : true" class="AREA" ref="abc"
            :class="{ active: isShowAddressArea }" @confirm="isShowAddressArea = !isShowAddressArea"
            @cancel="isShowAddressArea = !isShowAddressArea" />
    </ActionSheet>
</template>

<script setup lang="ts">
import { Area } from 'vant';
import { ref, computed } from 'vue';
import { nanoid } from 'nanoid';
import { useRouter } from 'vue-router';
import { ActionSheet } from 'vant';

const abc = ref<any>(null)
const b: any = ref('')
const router = useRouter()
const a = computed(() => {
    let str = ''
    abc.value.getSelectedOptions().forEach((item: any) => str += item.text)
    return str
})
var addressData = ref({
    name: '',
    tel: '',
    address: a,
    type: '家',
    isSelected: false,
    id: nanoid(),
    sex: '男士'
})

const saveFrom = () => {
    addressData.value = { ...addressData.value, address: a.value + b.value }
    router.push({ name: 'address', state: addressData.value })
}

let isShowAddressArea = ref<boolean>(false)
let areaList = ref()

    ; (async () => {
        const res = await fetch('https://lianmall.usemock.com/area', { method: 'post' })
        const { province_list, county_list, city_list } = await res.json()
        areaList.value = { province_list, county_list, city_list }
    })()

</script>

<style scoped lang="scss">
section {
    padding: 0 16px 45px;

    header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;

        .imgBox {
            background: #fff;
            border-radius: 50%;
            width: 24px;
            height: 24px;
        }

        .headerTitle {
            flex: 1;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            color: #3a3a3a;
        }
    }

    .addressContent {
        margin: 20px 0;
        padding: 20px;
        background: #fff;
        border-radius: 10px;

        .addressList {
            .addressLis {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;
                position: relative;
                z-index: 11;

                .title {
                    padding: 10px 15px 10px 0;
                    box-sizing: border-box;
                    width: 100%;
                    overflow: hidden;
                    color: #323233;
                    font-size: 14px;
                    background: #fff;
                    line-height: 14px;
                    display: flex;
                    justify-content: space-between;
                }

                .inp {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;

                    input {
                        padding: 10px 15px 10px 0;
                        font-size: 14px;
                        background: #fff;
                    }

                    .radio {
                        display: flex;
                        flex: 1;
                        justify-content: center;
                        align-items: center;

                        span {
                            width: 30px;
                            height: 18px;
                            padding: 2px 7px;
                            margin-right: 10px;
                            font-size: 12px;
                            border: 1px solid #ccc;
                            border-radius: 3px;
                        }

                        span.active {
                            border-color: rgb(233, 98, 88);
                            color: rgb(233, 98, 88);
                        }
                    }

                    div.TYPE {
                        justify-content: start;
                    }
                }

            }
        }
    }

    .addressBtn {
        position: fixed;
        bottom: 10px;
        width: 92%;
        z-index: 11;

        button {
            width: 100%;
            outline: none;
            height: 42px;
            border: 1px solid #f44;
            color: #fff;
            background: #d8182d;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>