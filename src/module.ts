import { computed, ref, Ref } from 'vue'

export const numberOfShapes = ref(1)

export const quadrupleValue = (ref: Ref<number>) => {
    return computed(() => ref.value * 4)
}
