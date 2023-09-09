const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-09-09', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '歡迎來到網路的某個角落', url: 'https://www.youtube.com/@uni_DD/' },
    { title: '點我前往YT大本營', url: 'https://www.youtube.com/@uni_DD/' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '精華剪輯',
  HERO_TITLE_2: '盡在YT頻道',
  HERO_TITLE_3: '@油切DD',
  HERO_TITLE_4: '歌詞分享',
  HERO_TITLE_5: '下載各種歌詞SRT檔',
  HERO_TITLE_LINK: 'https://uninodd.notion.site/8ebe512f382048b98200dbe638c5d379?v=f2420c445346433bb15ab03459b9a8c7&pvs=4',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精選', url: '/tag/必看精選' },
  HERO_CATEGORY_2: { title: '熱門文章', url: '/tag/熱門文章' },
  HERO_CATEGORY_3: { title: '實用教學', url: '/tag/實用教學' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '推薦',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🐶 森森鈴蘭的狗',
    '🍀 箱箱內的風鈴草',
    '🎬 佛系歌曲剪輯面',
    '🖌️ 賽博龐克繪師',
    '📸 攝影愛好者',
  ],
  INFO_CARD_URL: 'https://www.youtube.com/@uni_DD/about', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'illustrator',
      img_2: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_2: '#f29e39',
    },
     {
      title_1: 'Premiere',
      img_1: '/images/heo/Premiere.png',
      color_1: '#00005b',
      title_2: 'Lightroom',
      img_2: '/images/heo/Lightroom.png',
      color_2: '#001834',
    },
     {
      title_1: 'YouTube',
      img_1: '/images/heo/YouTube.png',
      color_1: '#e60000',
      title_2: 'Twitter',
      img_2: '/images/heo/Twitter.png',
      color_2: '#00b7ff',
    },
     {
      title_1: 'Discord',
      img_1: '/images/heo/Discord.png',
      color_1: '#5c6bc0',
      title_2: 'UninoDD',
      img_2: '/images/heo/UninoDD.png',
      color_2: '#393c4a',
    },
  ],

  SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: 'Discord',
  SOCIAL_CARD_TITLE_2: '加入香香的箱箱',
  SOCIAL_CARD_TITLE_3: '點擊前往魔法世界的草原',
  SOCIAL_CARD_URL: 'https://discord.gg/f2fCXbGnjP',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: false, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: true, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: false // 移动端悬浮目录
}
export default CONFIG
