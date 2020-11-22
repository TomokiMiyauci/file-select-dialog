import { reactive, toRefs, Ref, InjectionKey } from 'vue'

export const useForm = (): {
  accept: Ref<string>
  multiple: Ref<boolean>
} => {
  const state = reactive({
    accept: '*',
    multiple: false,
  })

  return { ...toRefs(state) }
}

const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore')
export default CounterKey
export type CounterStore = ReturnType<typeof useForm>
