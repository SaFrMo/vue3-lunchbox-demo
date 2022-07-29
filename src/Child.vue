<template>
    <section>Child says: {{ contentFromParent }}</section>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const { contentFromParent } = defineProps<{
    contentFromParent: string | number
}>()
</script>