import Http from "@utils/http"
export default {
    detailData(id, key=""){
        return Http.get("/mo_bile/index.php", {act:"goods", op: "goods_detail", "goods_id": id, key: key})
    }
}