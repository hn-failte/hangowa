import search from '@api/search'

export default {
    async acGetGoodDetail({commit, state}, id) {
      if(id=="") return;
      state.lodingAnimRun = true; //发送请求，开启Loading动画
      let data = await search.goodDetail(id);
      state.lodingAnimRun = false; //接收数据，关闭Loading动画
      commit("muGetGoodDetail", data);
    },
    acToggleRightPopup({commit,state}, val){
      if(state.timer != null) {
        // eslint-disable-next-line no-console
        console.log("防抖");
        return;
      }
        state.timer = setTimeout(() => {
        state.timer = null;
      }, 100);
      if(val) this.dispatch("location/acGetProvinces");
      commit("muToggleRightPopup", val);
    },
}