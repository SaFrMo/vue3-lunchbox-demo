<template>
    <section class="wrapper">
        <h2>u is {{ u }}</h2>
        <button @click="numberOfShapes++">Add 1</button>
        <h3>Double "u" is {{ doubleU }}</h3>
        <h3>Quadruple "u" is {{ quadrupleU }}</h3>

        <Child :contentFromParent="quadrupleU" />
    </section>
</template>

<script setup lang="ts">
import { computed, inject, Ref, watch } from 'vue'
import { numberOfShapes, quadrupleValue } from './module'
import Child from './Child.vue'

const u = computed(() => numberOfShapes.value)
const doubleU = computed(() => u.value * 2)
const quadrupleU = quadrupleValue(u)

const foo = inject<Ref<number>>('foo')!
watch(
    foo,
    (newVal) => {
        console.log('foo changed to', newVal)
    },
    {
        immediate: true,
    }
)
</script>

<style>
#app {
    position: relative;
    z-index: 10;
}
</style>