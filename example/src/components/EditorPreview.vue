<template>
  <div
    class="relative md:px-8 lg:px-0 col-start-1 col-span-full lg:col-start-1 xl:col-start-3 xl:col-end-4 row-start-1 row-end-2 xl:row-start-2 xl:row-end-5 self-center pt-8 lg:pt-0 hover:shadow-2xl transition-shadow duration-200"
  >
    <div class="mx-auto lg:max-w-2xl xl:max-w-none">
      <div
        class="relative overflow-hidden md:rounded-xl shadow-2xl flex CodeWindow_root__1fMBP Hero_codeWindow__1W0zH bg-light-blue-500 pb-6 md:pb-0"
      >
        <div class="absolute inset-0 bg-black bg-opacity-75"></div>
        <div class="relative w-full flex flex-col">
          <div class="flex-none h-11 flex items-center px-4">
            <div class="flex space-x-1.5">
              <div class="w-3 h-3 border-2 rounded-full border-red-500"></div>
              <div class="w-3 h-3 border-2 rounded-full border-amber-400"></div>
              <div class="w-3 h-3 border-2 rounded-full border-green-400"></div>
            </div>
          </div>
          <div
            class="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col"
          >
            <div
              class="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25"
              style="width: 50px"
            ></div>
            <div class="w-full flex-auto flex min-h-0 overflow-auto">
              <div class="w-full relative flex-auto">
                <pre
                  class="flex min-h-full text-xs md:text-sm"
                ><div aria-hidden="true" class="hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none" style="width: 50px;">1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
</div>
<code class="px-3 text-white">
<pre>&lt;template></pre><pre>  &lt;button @click="onClick">Normal Button&lt;/button></pre><pre>&lt;/template></pre>
<pre>&lt;script></pre><pre>  import { defineComponent } from 'vue'</pre><pre>  import { fileDialog } from 'file-select-dialog'</pre>
<pre>  export default defineComponent({</pre><pre>    setup() {</pre><pre>    const onClick = async () => {</pre><pre>      const file = await fileDialog(<pre v-show="override" >        {
<pre-code v-show="multipleRef" :value="multipleRef" /><pre-code v-show="acceptRef" :value="acceptRef" />        }</pre><span v-show="override">      </span>)</pre>
<pre>    return { onClick }</pre><pre>  })</pre><pre>&lt;/script></pre>

</code>
</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject, computed } from 'vue'
  import counter, { CounterStore } from '../components/useForm'
  import PreCode from '/@/components/PreCode.vue'
  export default defineComponent({
    components: {
      PreCode,
    },

    setup() {
      const { accept, multiple } = inject(counter) as CounterStore

      const acceptRef = computed(() => {
        if (!accept.value || accept.value === '*') return
        return `accept: ${accept.value}`
      })

      const multipleRef = computed(() => {
        if (!multiple.value) return
        return `multiple: ${multiple.value},`
      })

      const override = computed(() => {
        return (accept.value !== '*' && accept.value) || multiple.value
      })
      return { acceptRef, multipleRef, override }
    },
  })
</script>
