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
    goSearch(keyword){
        // eslint-disable-next-line no-console
        console.log("keyword:", keyword);
        return Http.get("http://localhost:3000/search")
    }
}