const path = require("path")
module.exports = {
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
                "@asset":path.resolve(__dirname, "./src/asset"),
                "@utils":path.resolve(__dirname, "./src/utils"),
                "@api":path.resolve(__dirname, "./src/api")
            }
        }
    }
}
