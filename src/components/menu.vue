<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    router: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    collapse: {
      type: Boolean,
      default: false
    },
    collapseTransition: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    textColor: {
      type: String,
      default: '#303133'
    },
    activeTextColor: {
      type: String,
      default: '#409EFF'
    },
    defaultActive: {
      type: String
    },
    unipueOpeneds: {
      type: Boolean,
      default: false
    },
    menuTrigger: {
      type: String,
      default: 'hover'
    },
    icons: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    this.menu_level = 1
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  methods: {
    setMenuItem(menu) {
      const vnodes = []
      const currentLevel = this.menu_level
      for (let i = 0; i < menu.length; i++) {
        const item = menu[i]
        const { name, url, children } = item
        if (children && children.length > 0) {
          this.menu_level = this.menu_level + 1
          const { path } = this.$route
          const className = {
            'menu-submenu': true,
            'is-active-menu-submenu': url === path
          }
          vnodes.push(<el-submenu
            index={url}
            key={i}
            popper-class={`${this.popperClass} menu-group-${currentLevel}`}
            data-level={currentLevel}
            data-sort={i + 1}
            class={className}
            background-color={this.backgroundColor}>
            <template slot="title">
              { this.setMenuIcon(item) }
              { this.setMenuSubmenu(item, path) }
            </template>
            { this.setMenuItem(children) }
          </el-submenu>)
        } else {
          vnodes.push(<el-menu-item
            index={url}
            class="menu-item"
            data-level={currentLevel}
            data-sort={i + 1}>
            {name}
          </el-menu-item>)
        }
      }
      return vnodes
    },
    setMenuIcon({ icon, name }) {
      let className = []
      if (this.icons.length > 0) {
        const menuItem = this.icons.find(item => item.name === name) || {}
        className = ['iconfont', menuItem.icon || '']
      } else {
        className = ['iconfont', icon || '']
      }
      return <span class={className}></span>
    },
    setMenuSubmenu({ name, url }, path) {
      if (url) {
        const className = {
          'menu-submenu-url': true,
          'menu-name': true,
          'is-active': url === path
        }
        return <router-link to={url} class={className}>{name}</router-link>
      }
      return <span class="menu-name">{name}</span>
    },
    handleMenuOpen() {
      this.$emit('on-open')
    },
    handleMenuClose() {
      this.$emit('on-close')
    }
  },
  render() {
    this.menu_level = 1
    return (<el-menu
      ref="menu"
      mode={this.mode}
      collapse={this.collapse}
      collapse-transition={this.collapseTransition}
      background-color={this.backgroundColor}
      text-color={this.textColor}
      active-text-color={this.activeTextColor}
      default-active={this.defaultActive}
      unipue-openeds={this.unipueOpeneds}
      menu-trigger={this.menuTrigger}
      router={this.router}
      on-open={() => this.handleMenuOpen}
      on-close={() => this.handleMenuClose}>
        { this.setMenuItem(this.data) }
      </el-menu>)
  }
}
</script>