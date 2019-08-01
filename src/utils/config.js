/**
 * 项目的配置文件
 * weiwei
 */
module.exports = {
  defaultIndexPage: {
    pathname: '/login',
    search: '',
    state: {}
  },
  sysDefaultPage: {
    pathname: '/sys/github',
    search: '',
    state: {}
  },
  projectName: '数据可视化',
  footerContent: [
    {
      key: 'UmiJS 首页',
      title: 'UmiJS 首页',
      href: 'https://umijs.org/zh/',
      blankTarget: true,
    },
    {
      key: 'github',
      title: 'github',
      href: 'https://github.com/mpw0311/antd-umi-sys',
      blankTarget: true,
    },
    {
      key: 'Ant Design',
      title: 'Ant Design',
      href: 'https://ant.design',
      blankTarget: true,
    }
  ],
  copyright: '2019weiwei888@163.com',
  menuPermission: true,
  originMenuData: [
    {
      title: "gitDataV",
      link: "/sys/github",
      key: "gitDataV",
      icon: "github"
    },
    {
      title: "地域分析",
      link: "/sys/regionalAnalysis",
      key: "regionalAnalysis",
      icon: "idcard"
    },
    {
      title: "用户行为",
      key: "yonghuxingwei",
      icon: "contacts",
      children: [
        {
          title: "路径分析",
          link: "/sys/linkAnalysis",
          key: "linkAnalysis",
          icon: "link"
        },
        {
          title: "匹配额度分析",
          link: "/sys/matchAnalysis",
          key: "matchAnalysis",
          icon: "link"
        },
        {
          title: "view1",
          link: "/sys/view/p1",
          key: "p1",
          icon: "line-chart"
        },
        {
          title: "view2",
          link: "/sys/view/p2",
          key: "p2",
          icon: "bar-chart"
        }
      ]
    },
    {
      title: 'Echarts',
      key: 'echarts',
      icon: 'icon-visual',
      children: [
        {
          link: '/sys/echarts/bar',
          key: 'Bar',
          icon: 'bar-chart',
          title: 'Bar'
        },
        {
          link: '/sys/echarts/line',
          key: 'line',
          icon: 'line-chart',
          title: 'Line'
        },
        {
          link: '/sys/echarts/area',
          key: 'area',
          icon: 'area-chart',
          title: 'Area'
        },
        {
          link: '/sys/echarts/yBar',
          key: 'yBar',
          icon: 'icon-bars',
          title: 'YBar'
        },
        {
          link: '/sys/echarts/funnel',
          key: 'funnel',
          icon: 'icon-funnel',
          title: 'Funnel'
        },
        {
          link: '/sys/echarts/pie',
          icon: 'icon-PieChart',
          title: 'Pie'
        },
        {
          link: '/sys/echarts/pieDoughnut',
          key: 'pieDoughnut',
          icon: 'icon-doughnut',
          title: 'PieDoughnut'
        },
        {
          link: '/sys/echarts/sankey',
          key: 'sankey',
          icon: 'icon-mapsankey',
          title: 'Sankey'
        },
      ]
    },
    {
      title: "d3.js组件",
      key: "d3Chart",
      icon: "icon-baobiaofenxi",
      children: [
        {
          title: "树图",
          link: "/sys/treePage",
          key: "treePage",
          icon: "icon-tree"
        },
        {
          title: "桑基图",
          link: "/sys/sankeyPage",
          key: "sankeyPage",
          icon: "icon-mapsankey"
        }
      ]
    },
    {
      title: "用户分析",
      link: "/sys/users",
      key: "users",
      icon: "user"
    },
    {
      title: "404",
      link: "/404",
      key: "404",
      icon: "frown"
    },
    {
      title: "iframe",
      key: "iframe",
      icon: "icon-window",
      children: [
        {
          title: "bing",
          link: "/frame/bing",
          key: "bing",
          icon: "shop",
          url: `https://cn.bing.com/`,
          query: {
              h: 1200
          }
        },
        {
          title: "百度",
          link: "/frame/baidu",
          key: "baidu",
          icon: "shop",
          url: `https://www.baidu.com/`,
        }
      ]
    },
    {
      title: "图形组件demo",
      url: "https://mpw0311.github.io/react-charts",
      key: "react-charts",
      icon: "bar-chart"
    },
    {
      title: "请给star",
      url: "https://github.com/mpw0311/antd-umi-sys",
      key: "github",
      icon: "star"
    }
  ],
  iconFontUrl: '//at.alicdn.com/t/font_1328766_38sdthxpgg9.js',

}