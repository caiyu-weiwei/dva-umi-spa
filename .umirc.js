import { resolve } from "q";

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/PageLoading/index.js'
      },
      title: 'dva-umi-spa',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      locale: {
        default: 'zh-CN', // 默认语言
      }
    }],
  ],
  alias: {
    '@': resolve(__dirname, './src')
  },
  proxy: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
