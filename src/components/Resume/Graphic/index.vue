<template>
  <div>
    <svg
      @touchstart="tap"
      @touchmove="tap"
      @touchend="untap"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <line
        stroke="#c4c4c4"
        stroke-width="2"
        x1="0"
        :y1="zero"
        :x2="width"
        :y2="zero"
      />
      <polyline
        fill="none"
        stroke="#0689B0"
        stroke-width="2"
        :points="points"
      />
      <line
        v-show="showPointer"
        stroke="#04b500"
        stroke-width="2"
        :x1="pointer"
        y1="0"
        :x2="pointer"
        :y2="height"
      />
    </svg>
    <p>Ultimos 30 dias</p>
  </div>
</template>

<script setup>
import {
  computed,
  toRefs,
  ref,
  watch,
} from 'vue'

const props = defineProps({
  amounts: {
    type: Array,
    default: () => [],
  },
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 200,
  },
})

const {
  amounts, width, height,
} = toRefs(props)

const min = computed(() => {
  return Math.min(...amounts.value)
})

const max = computed(() => {
  return Math.max(...amounts.value)
})

const range = computed(() => {
  return max.value + Math.abs(min.value)
})

const zero = computed(() => {
  const zero = Math.floor(height.value - (height.value * Math.abs(min.value)) / range.value)
  return zero
})

const points = computed(() => {
  const amountsCount = amounts.value.length

  const result = amounts.value.reduce((points, amount, idx) => {
    const x = (width.value / amountsCount) * (idx)

    const deviatedAmount = amount + Math.abs(min.value)
    const scaledAmount = Math.floor(height.value * (deviatedAmount) / (range.value))
    const y = height.value - scaledAmount

    if (idx === 0) {
      return `${x},${y}`
    }
    return `${points} ${x},${y}`
  }, '')

  return result
})

const showPointer = ref(false)
const pointer = ref(0)

const emit = defineEmits(['select'])

const tap = ({
  target,
  touches,
}) => {
  showPointer.value = true
  const elementWidth = target.getBoundingClientRect().width
  const elementX = target.getBoundingClientRect().x
  const touchX = touches[0].clientX
  pointer.value = ((touchX - elementX)  * 300) / elementWidth
  emit('select')
}

const untap = () => {
  showPointer.value = false
}

watch(pointer, (value) => {
  const index = Math.ceil((value / (width.value / amounts.value.length)))
  if (index < 0 || index >= amounts.value.length) return
  emit('select', amounts.value[index - 1])
})
</script>

<style scoped>
svg {
  width: 100%;
}

p {
  text-align: center;
}
</style>
