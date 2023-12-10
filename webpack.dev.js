const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, "./src/index.tsx"), //入口文件
    output: {
        filename: "static/js/[name].js",    //每个输出的js文件的名称
        path: path.join(__dirname, "./dist"),  //打包结果输出的路径
        clean: true,    //webapck5内置的，webpack4中需要配置clean-webpack-plugin来删除之前的dist
        publicPath: "/" //打包后文件的公共前缀路径
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,//匹配ts、tsx文件
                use: {
                    loader: "babel-loader",
                    options: {
                        //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"./public/index.html"),//模板用定义root节点的模板
            inject:true//自动注入静态资源
        })
    ],
    mode: "development",//开发模式下打包速度更快，省去了一些代码优化步骤

    devtool: "eval-cheap-module-source-map",//源码调试的模式，后面单独会说

    devServer: {
        port: 8080,//服务端口号
        hot: true,//开启热模块替换功能，后面会有对react模块热替换的具体配置
        compress: false,//gzip压缩，开发环境下不用开启，提升热更新的速度
        historyApiFallback: true,//解决history路由一刷新变404的问题
        static: {
            directory: path.join(__dirname, "./public"),//托管静态资源public文件夹
        }
    }
}