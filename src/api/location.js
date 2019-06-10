import Http from '@utils/http'

export const getProvinces = (id=0)=>{
    return Http.get("/mo_bile/index.php?act=area&op=area_list&area_id="+id)
}