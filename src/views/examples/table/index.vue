<template>
  <div>
    <table width="100%" border="1" cellpadding="0" cellspacing="0">
      <table-head :data="thead"></table-head>
      <table-body :columns="thead" :data="tbody" @on-expand="headleExpand"></table-body>
    </table>
  </div>
</template>

<script>
import TableHead from './components/table-head'
import TableBody from './components/table-body'
  export default {
    components: { TableHead, TableBody },
    data() {
      return {
        thead: [
          { id: 1, type: 'index', title: '序号' },
          { id: 2, key: 'name', title: '姓名', icon: ['icon-arrow-down', 'icon-arrow-right'] },
          { id: 3, key: 'age', title: '年龄' },
          { id: 4, key: 'sex', title: '性别' },
          { id: 5, key: 'address', title: '地址' },
          { id: 6, key: 'username', title: '用户名' },
          { id: 7, key: 'password', title: '密码' },
          { id: 8, key: 'type', title: '类别' },
          { id: 9, type: 'active', title: '操作',
            render(h, params) {
              return h('button', {
                on: {
                  click: () => {
                    console.log(params)
                  }
                }
              }, '操作')
            }
          }
        ],
        tbody: [
          { id: 1, index: 0, name: '张三', age: 23, sex: 0, address: '地址信息1', username: '张三', password: '123456', type: 1, Expand: false },
          { 
            id: 2, index: 1, name: '张三', age: 23, sex: 0, address: '地址信息2', username: '张三', password: '123456', type: 1, Expand: false,
            children: [
              { id: 21, index: 0, name: '张三', age: 23, sex: 0, address: '地址信息21', username: '张三', password: '123456', type: 1, Expand: false },
              { id: 22, index: 0, name: '张三', age: 23, sex: 0, address: '地址信息22', username: '张三', password: '123456', type: 1, Expand: false,
                children: [
                  { id: 21, index: 0, name: '张三', age: 23, sex: 0, address: '地址信息21', username: '张三', password: '123456', type: 1, Expand: false }
                ]
              }
            ]
          },
          { id: 3, index: 2, name: '张三', age: 23, sex: 0, address: '地址信息3', username: '张三', password: '123456', type: 1, Expand: false },
          { id: 4, index: 3, name: '张三', age: 23, sex: 0, address: '地址信息4', username: '张三', password: '123456', type: 1, Expand: false }
        ]
      }
    },
    methods: {
      headleExpand(item) {
        item.Expand = !item.Expand
      },
      headleClick(params) {
        console.log(params)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
