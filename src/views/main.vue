<template>
  <div>
    <el-container>
      <el-aside width="4rem">
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <template v-for="(item, index) in menuList.rights" :key="item.id" >
            <el-submenu :index="index + ' '" v-if="item.children">
              <template #title>
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item-group v-for="(itemChild, index) in item.children" :key="itemChild.id">
                <template #title>{{itemChild.authName}}</template>
                <el-menu-item :index="index + ' '">
                  <router-link :to="itemChild.path">{{itemChild.path}}</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="index + ' '" v-else>
                <router-link :to="item.path">{{item.authName}}</router-link>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- Main -->
        <!-- <router-link to="/footer">asdsa</router-link> -->
         <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import {reactive ,toRefs} from 'vue'
export default {
  name: 'main',
  components: {
  },
  data() {
    return {
      isCollapse: true
    }
  },
  setup(props, ctx) {
    let menuList = reactive({
      id: 2,
      username: '管理员',
      password: 'admin',
      rights: [
        {
          id: 1,
          authName: '一级菜单',
          icon: 'icon-menu',
          children: [{
            id: 11,
            authName: '一级项目1',
            path: '/footer',
            rights: ['view', 'edit', 'add', 'delete']
          }, {
            id: 11,
            authName: '一级项目2',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete']
          }]
        }, 
        {
        id: 2,
        authName: '二级菜单',
        icon: 'icon-menu',
        children: [{
          id: 22,
          authName: '二级项目1',
          path: '/header',
          rights: ['view', 'edit', 'add', 'delete']
        }]
        },
        {
        id: 3,
        authName: '大屏',
        icon: 'icon-menu',
        path: '/Screen',
        }
      ]
    })
    let data = reactive({
      todoList: [
        {
        title: '测试1',
        content: '内容1'
        },
        {
        title: '测试2',
        content: '内容2'
        }
      ]
    })
    return {
      menuList,
      ...toRefs(data, menuList)
    }
  }
}
</script>
<style >
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    height: 100vh;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>