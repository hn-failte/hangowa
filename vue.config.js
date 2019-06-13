const path = require("path")
module.exports = {
    publicPath: "/",
    devServer: {
        proxy: {
            "/mo_bile": {
                target: "http://www.hangowa.com/",
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@":path.resolve(__dirname, "./src"),
                "@components":path.resolve(__dirname, "./src/components"),
                "@store":path.resolve(__dirname, "./src/store"),
                "@assets":path.resolve(__dirname, "./src/assets"),
                "@utils":path.resolve(__dirname, "./src/utils"),
                "@api":path.resolve(__dirname, "./src/api"),
                "@common":path.resolve(__dirname, "./src/common")
            }
        }
    },
    productionSourceMap: false
}