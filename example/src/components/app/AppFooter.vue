<template>
  <footer class="text-center p-5">
    <npm />
    <github class="ml-16" />
  </footer>
</template>

<script lang="ts">
  import Github from '/@/components/app/Github.vue'
  import Npm from '/@/components/app/Npm.vue'

  export default {
    components: { Npm, Github },
  }
</script>
