import Http from '@utils/http'

export const getProvinces = ()=>{
    return Http.get("/mo_bile/index.php?act=area&op=area_list&area_id=0")
}