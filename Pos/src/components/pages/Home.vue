<template>
    <div class="home">
        <!--banner-->
        <img src="../../assets/img/banner.jpg" alt="">
        <!--我们能做什么-->
        <div class="do-thing">
            <h3>我们能做什么？</h3>
            <p>What can we do for you?</p>
            <ul class="do-list">
                <li v-for="item in doThing">
                    <div class="do-con">{{item.title}}</div>
                    <img :src="item.imgSrc" alt="" class="do-img">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                doThing:[
                    {
                        title:"股票点买策略平台",
                        dd:[
                            "无缝对接新浪财经股票数据","投资匹配资金倍数灵活可选","自定义止盈止损，风险控制掌握在手","实时自动风控/平仓","自动计息/收息，实时结算资金","线上入金动态验证加密，保护资金安全","安全策略自动提现，提高效率更安全","精准数据分析，一目了然"
                        ],
                        imgSrc:"../../assets/img/i_r5_c8.jpg"
                    },
                    {
                        title:"股票点买策略平台",
                        dd:[
                            "无缝对接新浪财经股票数据","投资匹配资金倍数灵活可选","自定义止盈止损，风险控制掌握在手","实时自动风控/平仓","自动计息/收息，实时结算资金","线上入金动态验证加密，保护资金安全","安全策略自动提现，提高效率更安全","精准数据分析，一目了然"
                        ],
                        imgSrc:"../../assets/img/i_r5_c8.jpg"
                    },
                    {
                        title:"股票点买策略平台",
                        dd:[
                            "无缝对接新浪财经股票数据","投资匹配资金倍数灵活可选","自定义止盈止损，风险控制掌握在手","实时自动风控/平仓","自动计息/收息，实时结算资金","线上入金动态验证加密，保护资金安全","安全策略自动提现，提高效率更安全","精准数据分析，一目了然"
                        ],
                        imgSrc:"../../assets/img/i_r5_c17.jpg"
                    },
                    {
                        title:"股票点买策略平台",
                        dd:[
                            "无缝对接新浪财经股票数据","投资匹配资金倍数灵活可选","自定义止盈止损，风险控制掌握在手","实时自动风控/平仓","自动计息/收息，实时结算资金","线上入金动态验证加密，保护资金安全","安全策略自动提现，提高效率更安全","精准数据分析，一目了然"
                        ],
                        imgSrc:"../../assets/img/i_r7_c17.jpg"
                    }
                ]
            }
        }
    }
</script>


<style scoped>
   .home{
       width:100%;
   }
    .home img{
        width: 100%;
    }
</style>