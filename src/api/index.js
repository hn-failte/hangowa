import Http from "@utils/http"

export default {
    indexData(){
        return Http.get("/mo_bile/index.php", {act:"index"})
    }
}