<template>
  <input
    id="button"
    ref="button"
    type="file"
    style="position: fixed; top: 0; left: 0"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { fileDialog } from 'file-select-dialog'

  export default defineComponent({
    name: 'App',

    setup() {
      const onClick = async () => {
        const file = await fileDialog({ multiple: false, accept: '.png,.pdf' })
        console.log(file)
      }

      return { onClick }
    },
  })
</script>
