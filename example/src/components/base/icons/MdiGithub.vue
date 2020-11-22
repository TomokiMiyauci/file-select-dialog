<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiGithub" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiGithub } from '@mdi/js'
  import { defineComponent } from 'vue'
  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: {
      BaseSvg,
    },

    setup() {
      return { mdiGithub }
    },
  })
</script>
