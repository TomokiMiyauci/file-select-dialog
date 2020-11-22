<template>
  <h1 class="p-2 text-3xl text-gray-700">file-select-dialog</h1>
  <div class="container mx-auto mt-32">
    <h2 class="text-3xl text-gray-700">Example</h2>

    <file-preview class="mt-10" />
    <h3 class="text-xl text-center text-gray-700 mt-5">
      <span
        class="bg-green-300 px-3 py-1 shadow hover:shadow-md transition-shadow duration-200 rounded-full"
        >Vue</span
      >
    </h3>
  </div>
  <app-footer class="fixed bottom-0 w-full" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import FilePreview from '/@/components/FilePreview.vue'
  import AppFooter from './components/app/AppFooter.vue'

  export default defineComponent({
    components: {
      FilePreview,
      AppFooter,
    },
  })
</script>
