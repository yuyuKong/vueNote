<template>
    <div class="mint">
        <mt-header fixed title="固定在顶部"></mt-header>
        <div style="margin-top: 50px">
            <mt-button size="small">small</mt-button>
            <mt-button @click="click" size="large">large</mt-button>
            <mt-button size="normal">normal</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Mint',
        data () {
            return {

            }
        },
        methods:{
           click(){
               this.$messagebox({
                   title: '提示',
                   message: '确定执行此操作?',
                   showCancelButton: true
               });
           }
        }
    }
</script>


<style scoped>

</style>