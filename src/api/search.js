export default {
    searchInfo(keyword){
        if(!keyword) return;
        var script = document.createElement('script');
        script.src = "https://suggest.taobao.com/sug?q="+keyword+"&code=utf-8&area=c2c&nick=&sid=null&callback=failtejsonp1";
        window.failtejsonp1 = function(data){
            window.failtejsonpdata1 = data
        }
        document.body.append(script);
    },
    goSearch(keyword){
        // eslint-disable-next-line no-console
        console.log(keyword);
        
        if(!keyword) return;
        var script = document.createElement('script');
        script.src = "https://acs.m.taobao.com/h5/mtop.taobao.wsearch.h5search/1.0/?jsv=2.3.16&appKey=12574478&t=1559451776589&sign=c19b396be3e3270b6cb579227cfd6b07&api=mtop.taobao.wsearch.h5search&v=1.0&H5Request=true&ecode=1&AntiCreep=true&AntiFlool=true&type=jsonp&dataType=jsonp&callback=failtejsonp2&data=%7B%22q%22%3A%22"+keyword+"%22%2C%22search%22%3A%22%E6%8F%90%E4%BA%A4%22%2C%22tab%22%3A%22all%22%2C%22sst%22%3A%221%22%2C%22n%22%3A20%2C%22buying%22%3A%22buyitnow%22%2C%22m%22%3A%22api4h5%22%2C%22token4h5%22%3A%22%22%2C%22abtest%22%3A%224%22%2C%22wlsort%22%3A%224%22%2C%22page%22%3A1%7D";
        window.failtejsonp2 = function(data){
            // eslint-disable-next-line no-console
            console.log(data);
            
            window.failtejsonpdata2 = data
        }
        document.body.append(script);
    }
}