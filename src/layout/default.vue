<template>
    <div>
        <i-menu :data="mainMenu" router mode="horizontal" class="main-menu-inner"></i-menu>
        <el-container>
            <i-menu :data="menu" router class="aside-menu-inner"></i-menu>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
    components: {
        'i-menu': Menu
    },
    data() {
        return {
            mainMenu: [
                { name: '首页', url: '/home' },
                { name: '登录', url: '/login' },
                { name: 'Error', url: '',
                    children: [
                        { name: '404', url: '/404' },
                        { name: '401', url: '/401' }
                    ]
                }
            ],
            menu: []
        }
    },
    mounted() {
        const { options } = this.$router
        this.menu = this.getMenu(options.routes)
        console.log(this.menu)
    },
    methods: {
        getMenu(routes) {
            const menu = []
            routes.forEach(item => {
                const { meta: { title } = { title: '无效标题' }, path, children } = Object.assign({}, item)
                if (!['/', '*'].includes(path)) {
                    const menuItem = { name: title, url: path, children: [] }
                    if (children && children.length > 0) {
                        menuItem.url = ''
                        menuItem.children = this.getMenu(children)
                    }
                    menu.push(menuItem)
                }

            })
            return menu
        }
    }
}
</script>

<style lang="scss" scoped>
.main-menu-inner {
    margin-left: 200px;
}
.aside-menu-inner {
    border-top: 1px solid #eaeaea;
    width: 200px;
    height: 80vh;
}
</style>
