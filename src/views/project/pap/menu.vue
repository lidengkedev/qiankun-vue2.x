<template>
  <div class="pap">
    <div class="app-header">
      <ul class="app-menu" :class="{ hidden: menuShow }">
        <li v-for="(item, index) in links" :key="index">
          <a @click="handleMenuItem($event, item)" :class="{ 'active': active == item.title }">
            {{ item.title }}
          </a>
        </li>
      </ul>
      <ul v-show="is_show_menu_two_list" class="app-menu-two">
        <li v-for="(item, index) in menuTwoList" :key="index"><a>{{ item.title }}</a></li>
      </ul>
    </div>
    <router-view v-bind:headTitle="headTitle" class="pap-page"></router-view>
    <div class="footer">
      <p>{{ footerMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  //组件名称
  name: 'app',
  data() {
    return {
      links: [
        {
          title: '首页',
          route: '/home'
        }, {
          title: '千度',
          route: '/question'
        }, {
          title: '摸排',
          route: '/model'
        }, {
          title: '话单',
          route: '/phoneDetail',
          children: [
            {
              parent: '话单',
              title: '话单管理',
              route: '/children/phoneManagement'
            }, {
              parent: '话单',
              title: '话单导入',
              route: '/children/phoneExport'
            }, {
              parent: '话单',
              title: '详单模型管理',
              route: '/children/phoneModelManagement'
            }, {
              parent: '话单',
              title: '案件类型管理',
              route: '/children/caseClassManagement'
            }, {
              parent: '话单',
              title: '历史话单查询',
              route: '/children/historyPhoneQuery'
            }
          ]
        }, {
          title: '数据研判',
          route: '/dataCheck'
        }, {
          title: '布控',
          route: '/dispatch'
        }, {
          title: '警务百科',
          route: '/application'
        }, {
          title: '系统配置',
          route: '/systemConfig'
        }, {
          title: '系统',
          route: '/system'
        }
      ],
      menuTwoList: [],
      is_show_menu_two_list: false,
      headTitle: '首页',
      active: '首页',
      menuShow: false,
      footerMessage: '2014~2017 © ZTE - 中兴通讯股份有限公司.'
    }
  },
  //计算属性
  computed: {
    setMenuTwo() {
      return this.menuTwoList = this.links[3].children;
    }
  },
  //方法
  methods: {
    //设置主菜单路由跳转
    handleMenuItem(event, item) {
      this.headTitle = item.title
      this.active = item.title
      this.is_show_menu_two_list = !this.is_show_menu_two_list
      this.menuTwoList = item.children || []
      document.querySelector('.app-menu-two').style.left = event.target.getBoundingClientRect().left + 'px'
    }
  }
}
</script>

<style scoped>
.pap {
  height: 100%;
  background-color: #284467;
}
/* 导航菜单区域块 */
.app-header {
  background-color: #3a67af;
  height: 66px;
  margin-bottom: 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  z-index: 1000;
}

/* 平台图片 */
.app-header img {
  display: inline-block;
  height: 43px;
  width: 202px;
  vertical-align: middle;
  padding-left: 20px;
  padding-right: 120px;
}

/* 导航菜单 */
.app-menu li {
  display: inline-block;
  cursor: pointer;
}

.app-menu-two {
  background-color: #3a67af;
  position: absolute;
  top: 66px;
}

.hidden {
  display: block !important;
}

.app-menu .active,
.app-menu-two .active {
  background-color: #184fa5;
  color: #FFFFFF;
}

.app-menu a,
.app-menu-two a {
  display: block;
  font-size: 16px;
  color: #c3c3c3;
  line-height: 66px;
  padding: 0px 20px;
  cursor: pointer;
}

.app-menu li:hover,
.app-menu-two li:hover {
  background-color: #3184d9;
}

.app-menu li:hover a,
.app-menu-two li:hover a {
  color: #FFFFFF;
}

.app-menu-two li {
  display: block;
}

.app-menu-two li a {
  line-height: 30px;
}

.pap-page {
  padding-top: 70px;
  padding-bottom: 50px;
}

/* 页脚样式调整 */
.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #3a67af;
}

.footer p {
  color: #FFFFFF;
  text-align: center;
  font-size: 12px;
  margin: 0px;
  padding: 10px 0px;
}

@media only screen and (max-width: 768px) {
  .app-full {
    margin-bottom: 10px;
  }

  .app-header img {
    padding-top: 15px;
  }

  .app-menu {
    display: none;
    position: absolute;
    right: 0;
    top: 66px;
    background-color: #3a67af;
  }

  .app-menu li {
    display: block;
  }

  .app-menu li a {
    padding: 0px 10px;
    text-align: center;
    /*text-align: justify;
            text-justify: distribute-all-lines;
            text-align-last: justify;
            -webkit-text-algin-last: justify;*/
  }

  .app-menu-right {
    display: block;
  }
}
</style>