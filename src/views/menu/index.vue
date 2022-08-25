<template>
  <el-row class="tac">
    <el-col>
      <h5 class="mb-2">Hello Vue</h5>
      <el-menu
        default-active="/"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <div v-for="menu in menuList" :key="menu.name">
          <el-sub-menu
            :index="menu.path"
            v-if="menu.children && menu.children.length > 0"
          >
            <template #title>
              <span>{{ menu.name }}</span>
            </template>
            <div v-for="submenu in menu.children" :key="submenu.name">
              <app-link :to="submenu.path">
                <el-menu-item :index="submenu.path">
                  <span>{{ submenu.name }}</span></el-menu-item
                >
              </app-link>
            </div>
          </el-sub-menu>
          <app-link :to="menu.path" v-if="!menu.children">
            <el-menu-item :index="menu.path">
              <span>{{ menu.name }}</span>
            </el-menu-item>
          </app-link>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { routes } from '../../router'
import { defineComponent, reactive, toRefs } from 'vue'
import AppLink from './link.vue'
export default defineComponent({
  name: 'LeftMenu',
  components: { AppLink },
  setup() {
    console.log(routes, 'routes')
    const state = reactive({
      menuList: routes
    })
    console.log(routes)
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
      ...toRefs(state),
      handleOpen,
      handleClose,
      Document,
      Location,
      Setting
    }
  }
})
</script>
<style scoped>
.tac {
  width: 200px;
}
</style>
