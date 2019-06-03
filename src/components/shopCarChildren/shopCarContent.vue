<template>
    <div>
        <div class="content">
            <div class="googsList" v-if="contentState">
                <div class="fkong">
                    <div class="maijia">
                        <label><input type="checkbox"><span>卖家：</span><span>Amazon</span></label>
                    </div>
                    <div class="shangpin">
                        <div class="hang1">
                            <label><input type="checkbox"><button>删除</button></label>
                        </div>
                        <div class="hang2"></div>
                        <div class="hang3"></div>
                        <div class="hang4"></div>
                    </div>
                </div>
            </div>
            <div class="noGoogs" v-else>
                <div class="kong">
                    <p>购物车是空的哟，赶紧<a href="#">去逛逛</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                contentState: true
            }
        }
    }
</script>


<style lang="scss" scoped>
    div>.content>.noGoogs{
        height: 7rem;
        background-color: rgb(255, 212, 212);
        position: relative;
    }
    div>.content>.noGoogs>.kong{
        height: 0.8rem;
        width: 100%;
        background-color: red;
        position: fixed;
        margin-top: 3rem;
        font-size: 0.35rem;
        line-height: 0.8rem;
        background-color: rgb(224, 222, 222);
        border: 1px solid rgb(128, 127, 127);
    }
    div>.content>.noGoogs>.kong>p>a{
        font-size: 0.35rem;
        color: blue;
    }
    div>.content>.googsList>.fkong>.maijia{
        display: flex;
        background-color: rgb(245, 207, 207);
        height: 0.8rem;
        line-height: 0.8rem;
    }
    div>.content>.googsList>.fkong>.maijia>label{
        &>input{
            vertical-align: middle;
            margin: 0 0.3rem;
        }
        &>span{
            font-size: 0.3rem;
        }
    }
    div>.content>.googsList>.fkong>.shangpin{
        height: 5rem;
        background-color: rgb(176, 176, 252);
        &>.hang1{
            height: 0.9rem;
            &>label
            {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 .2rem;
                box-sizing: border-box;
                
                &>button{
                    width: 1rem;
                }
            }

        }
    }
</style>