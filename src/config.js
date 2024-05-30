const SERVE = false; // 是否使用线上服务器

const HOST = "https://esunr.xyz:8080/api/esunrIndex"; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "SummerRiver"; // 个人网站名字

const BLOG_URL = "https://zaoshuizaoqishentihao.site/"; // 个人网站链接（请填写完整链接）

const GITHUB = ""; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = require("./assets/bagi.jpg"); // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "基础地址" },
  { sortId: 2, title: "测试相关" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = "Copyright © 2021 Summer River 蜀ICP备2020032246号"; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "主站",
    subtitle: "这个咱也说不上来",
    url: "https://zaoshuizaoqishentihao.site/",
    icon: "https://zaoshuizaoqishentihao.site/favicon.jpg"
  },
  {
    pageId: 2,
    sortId: 2,
    title: "jenkins",
    subtitle: "自动化",
    url: "http://jenkins.zaoshuizaoqishentihao.site/",
    icon: "http://110.42.199.72:28080/static/2b7a395f/images/jenkins-header-logo-v2.svg"
  },
  {
    pageId: 3,
    sortId: 1,
    title: "十三木啊",
    subtitle: "弹幕截图",
    url: "http://shisanmu.zaoshuizaoqishentihao.site/",
    icon: "http://shisanmu.zaoshuizaoqishentihao.site/shidanmu.png.jpg"
  },
  {
    pageId: 4,
    sortId: 1,
    title: "zzzz~",
    subtitle: "慢慢迭代，用webrtc实现的远程协作",
    url: "https://zaoshuizaoqishentihao.site/shareDesktop/",
    icon: require('./assets/NPC_Cloth.png')
  }


]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
