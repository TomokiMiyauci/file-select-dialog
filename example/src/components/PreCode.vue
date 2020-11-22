<template>
  <pre>           <span class="bg-green-700 rounded p-1">{{value}}</span></pre>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      value: {
        type: String,
        default: '',
      },
    },
  })
</script>
