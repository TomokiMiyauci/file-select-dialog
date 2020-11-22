<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiNpm" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiNpm } from '@mdi/js'
  import { defineComponent } from 'vue'
  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: {
      BaseSvg,
    },

    setup() {
      return { mdiNpm }
    },
  })
</script>
