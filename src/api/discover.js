import Http from "@utils/http"

export default {
    discoverData(){
        return Http.get("/mo_bile/index.php?act=index&op=special&special_id=1")
    }

}