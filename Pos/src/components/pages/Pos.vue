<template>
    <div class="Pos">
        <el-row>
            <el-col :span="7" class="order-list" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="goodsName"
                                    label="商品名称">
                            </el-table-column>
                            <el-table-column
                                    prop="count"
                                    label="商品数量">
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                label="价格">
                            </el-table-column>
                            <el-table-column label="操作" fixed="right" width="100">
                                <template scope="scope">
                                    <el-button type="text" size="small">删除</el-button>
                                    <el-button type="text" size="small">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="btnGroup">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger">删除</el-button>
                            <el-button type="success">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="拼单">拼单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-list">
                        <ul v-for="item in oftenGoods">
                            <li>
                                <span>{{item.goodsName}}</span>
                                <span class="o-price">{{item.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <ul class='cookList'>
                                <li v-for="good in type0Goods">
                                    <span class="foodImg"><img :src="good.goodsImg" width="100%"></span>
                                    <span class="foodName">{{good.goodsName}}</span>
                                    <span class="foodPrice">￥{{good.price}}.00元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            小食
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            饮料
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            套餐
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Pos',
        data () {
            return {
                tableData:[{
                    goodsName: '可口可乐',
                    price: 8,
                    count:1
                }, {
                    goodsName: '香辣鸡腿堡',
                    price: 15,
                    count:1
                }, {
                    goodsName: '爱心薯条',
                    price: 8,
                    count:1
                }, {
                    goodsName: '甜筒',
                    price: 8,
                    count:1
                }],
                oftenGoods:[
                    {
                        goodsId:1,
                        goodsName:'香辣鸡腿堡',
                        price:18
                    }, {
                        goodsId:2,
                        goodsName:'田园鸡腿堡',
                        price:15
                    }, {
                        goodsId:3,
                        goodsName:'和风汉堡',
                        price:15
                    }, {
                        goodsId:4,
                        goodsName:'快乐全家桶',
                        price:80
                    }, {
                        goodsId:5,
                        goodsName:'脆皮炸鸡腿',
                        price:10
                    }, {
                        goodsId:6,
                        goodsName:'魔法鸡块',
                        price:20
                    }, {
                        goodsId:7,
                        goodsName:'可乐大杯',
                        price:10
                    }, {
                        goodsId:8,
                        goodsName:'雪顶咖啡',
                        price:18
                    }, {
                        goodsId:9,
                        goodsName:'大块鸡米花',
                        price:15
                    }, {
                        goodsId:20,
                        goodsName:'香脆鸡柳',
                        price:17
                    }
                ],
                type0Goods:[
                    {
                        goodsId:1,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'香辣鸡腿堡',
                        price:18
                    }, {
                        goodsId:2,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'田园鸡腿堡',
                        price:15
                    }, {
                        goodsId:3,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'和风汉堡',
                        price:15
                    }, {
                        goodsId:4,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'快乐全家桶',
                        price:80
                    }, {
                        goodsId:5,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'脆皮炸鸡腿',
                        price:10
                    }, {
                        goodsId:6,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'魔法鸡块',
                        price:20
                    }, {
                        goodsId:7,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'可乐大杯',
                        price:10
                    }, {
                        goodsId:8,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'雪顶咖啡',
                        price:18
                    }, {
                        goodsId:9,
                        goodsImg:"https://ss0.bdst  atic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'大块鸡米花',
                        price:15
                    }, {
                        goodsId:20,
                        goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001154019,189871437&fm=27&gp=0.jpg",
                        goodsName:'香脆鸡柳',
                        price:17
                    }
                ]
            }
        },
        mounted:function(){
            var orderHeight=document.body.clientHeight;
            document.getElementById("order-list").style.height=orderHeight+'px';
        }
    }
</script>


<style scoped>
.order-list{
    background-color: #fbfbfb;
    border-right:1px solid #1D8ce0;
}
.btnGroup{
    margin-top:10px;
}
.often-goods{
    overflow: hidden;
}
.title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
}
.often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
}
.o-price{
    color:#58B7FF;
}
.cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
}
.cookList li span{
    display: block;
    float:left;
}
.foodImg{
    width: 40%;
}
.foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;
}
.foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
}
</style>