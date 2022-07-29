<template>
    <Lunchbox transparent :cameraPosition="[0, 5, 5]" :cameraLook="[0, 0, 0]">
        <mesh :scale="0.5" v-for="n in numberOfShapes" :key="n" :position-x="n">
            <icosahedronGeometry />
            <meshBasicMaterial color="black" wireframe />
        </mesh>
    </Lunchbox>
</template>

<script setup>
import { numberOfShapes } from './module'
</script>