<template>
  <component class="app-link" :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AppLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const linkProps = to => {
      return {
        to: to
      }
    }
    return {
      type: 'router-link',
      linkProps
    }
  }
})
</script>
<style scoped>
.app-link {
  text-decoration: none;
}
</style>
