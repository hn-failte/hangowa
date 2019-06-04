import Http from "@utils/http"

export default {
    searchInfo(){
        return Http.get("/mo_bile/index.php", {act: "index", op: "search_key_list"})
    },
    searchGoods(keyword){
        // eslint-disable-next-line no-dupe-keys
        return Http.get("/mo_bile/index.php", {act: "goods", op: "goods_list", keyword: keyword, page: "10", curpage: "1", keyword: keyword})
    },
    goodDetail(id, key=""){
        return Http.get("/mo_bile/index.php", {act:"goods", op: "goods_detail", "goods_id": id, key: key})
    }
}