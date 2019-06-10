export default {
    mutationsGetGoods(state,params){
        state.goodsList = params;
    },
    handleToggle(state){
        state.allSelected = !state.allSelected;

        state.goodsList.map((item)=>{
            item.flag = state.allSelected;
        })
    },
    handleGoodsToggle(state,index){
        state.goodsList[index].flag = !state.goodsList[index].flag;

        let bStop = true;

        for(var i = 0; i<state.goodsList.length; i++){
            if(!state.goodsList[i].flag){
                bStop = false;
                break;
            }
        }

        state.allSelected = bStop;
    }
}