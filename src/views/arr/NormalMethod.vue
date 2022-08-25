<template>
  <div class="about">
    <h1>常用数组方法</h1>
    <el-radio-group v-model="selectValue" size="large">
      <el-radio-button
        :key="item"
        :label="item"
        v-for="item in methodsOption"
      />
    </el-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      arrList: [
        {
          name: '欣欣',
          age: '4',
          gender: '女'
        },
        {
          name: '小吴',
          age: '30',
          gender: '女'
        },
        {
          name: '小黄',
          age: '32',
          gender: '男'
        }
      ],
      methodsOption: ['map', 'forEach', 'filter', 'some', 'every'],
      selectValue: 'map'
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
