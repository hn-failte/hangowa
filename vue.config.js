module.exports = {
    devServer: {
        proxy: {
            "/mo_bile": {
                target: "http://www.hangowa.com/",
                changeOrigin: true
            }
        }
    }
}