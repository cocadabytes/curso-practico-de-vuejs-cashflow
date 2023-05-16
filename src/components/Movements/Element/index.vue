<template>
  <div class="movement">{{movement.title}}</div>
</template>

<script setup>
import { toRefs, } from 'vue'


const props = defineProps({
  movement: {
    type: Object,
    required: true,
  },
})

const { movement, } = toRefs(props)
</script>
