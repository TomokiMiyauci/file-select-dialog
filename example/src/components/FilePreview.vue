<template>
  <div class="grid">
    <div
      class="col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full row-start-1 row-span-full xl:col-start-1 xl:col-end-5 xl:row-start-2 xl:row-end-5 lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0"
    >
      <div
        class="bg-gradient-to-br to-indigo-200 shadow-lg from-green-200 transform rotate-3 w-full flex-none rounded-3xl"
      ></div>
    </div>
    <div
      class="relative col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full xl:col-start-2 xl:col-end-3 row-start-2 row-end-3 xl:row-start-3 xl:row-end-4 self-center pr-8 sm:px-6 md:px-8 pb-6 md:pb-8 lg:px-0 lg:pb-0 -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-32 xl:mt-0"
    >
      <div class="max-w-xl xl:max-w-none flex items-center justify-center">
        <div class="w-full flex-none">
          <div class="xl:-mr-8">
            <div
              class="relative z-10 rounded-r-xl sm:rounded-xl shadow-xl text-black mx-auto lg:mx-0 xl:mx-auto"
              style="transform-origin: 50% 50% 0; width: 400px"
            >
              <div
                class="bg-white rounded-r-xl sm:rounded-xl overflow-hidden text-center p-8"
                style="transform-origin: 50% 50% 0"
              >
                <button-file-dialog @click="onClick" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <editor-preview />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import EditorPreview from '/@/components/EditorPreview.vue'
  import ButtonFileDialog from '/@/components/ButtonFileDialog.vue'
  import { fileDialog } from 'file-select-dialog'

  export default defineComponent({
    components: {
      EditorPreview,
      ButtonFileDialog,
    },

    setup() {
      const onClick = async () => {
        const file = await fileDialog({ multiple: false, accept: '.png,.pdf' })
        console.log(file)
      }

      return { onClick }
    },
  })
</script>
