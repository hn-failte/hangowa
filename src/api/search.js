import Http from "@utils/http"

export default {
    searchInfo(keyword){
        var script = document.createElement('script');
        script.src = "https://suggest.taobao.com/sug?q="+keyword+"&code=utf-8&area=c2c&nick=&sid=null&callback=failtejsonp1";
        window.failtejsonp1 = function(data){
            window.failtejsonpdata1 = data
        }
        document.body.append(script);
    },
    searchGoods(keyword){
        // eslint-disable-next-line no-dupe-keys
        return Http.get("/mo_bile/index.php", {act: "goods", op: "goods_list", keyword: keyword, page: "10", curpage: "1", keyword: keyword})
    },
    goodDetail(id, key=""){
        return Http.get("/mo_bile/index.php", {act:"goods", op: "goods_detail", "goods_id": id, key: key})
    }
}