<template>
  <main>
    <p>{{ label }}</p>
    <h1>{{ amountCurrency }}</h1>
    <div class="graphic">
      <slot name="graphic"></slot>
    </div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </main>
</template>

<script setup>
import {
  toRefs, computed,
} from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default: null,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
})

const {
  amount, label, totalAmount,
} = toRefs(props)

const amountVisual = computed(() => {
  return amount.value === null ? totalAmount.value : amount.value
})

const amountCurrency = computed(() => {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  })
  return formatter.format(amountVisual.value)
})
</script>


<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

h1,
p {
  margin: 0;
  text-align: center;
}

h1 {
  margin-top: 14px;
  color: var(--brand-green);
}

.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>
