export default {
    infoList: [],
    hasResult: false,
    goodsList: [],
    lodingAnimRun: true,
    historyList: localStorage.getItem('historyList') ? JSON.parse(localStorage.getItem('historyList')) : []
}