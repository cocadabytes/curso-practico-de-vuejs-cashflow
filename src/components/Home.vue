<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #resume>
      <Resume
        label="Ahorro total"
        :total-amount="totalAmount"
        :amount="amount"
      >
        <template #graphic>
          <Graphic
            :amounts="amounts"
            @select="select"
          />
        </template>
        <template #action>
          <Action @create="create" />
        </template>
      </Resume>
    </template>
    <template #movements>
      <Movements
        :movements="state.movements"
        @remove="remove"
      />
    </template>
  </Layout>
</template>

<script setup>
import {
  computed, onMounted, reactive, ref,
} from 'vue'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Resume from '@/components/Resume'
import Graphic from '@/components/Resume/Graphic'
import Movements from '@/components/Movements'
import Action from '@/components/Action'

const state = reactive({ movements: [], })
const amount = ref(null)

onMounted(() => {
  const movements = JSON.parse(localStorage.getItem('movements'))

  if (Array.isArray(movements)) {
    state.movements = movements.map(m => {
      return {
        ...m,
        time: new Date(m.time),
      }
    })
  }
})

const amounts = computed(() => {
  return state.movements
    .filter((movement) => {
      const today = new Date()
      const oldDate = today.setDate(today.getDate() - 30)

      return movement.time >= oldDate
    })
    .map(movement => movement.amount)
    .reduce((accum, element) => {
      if (accum.length > 0) {
        return [
          ...accum,
          accum.slice(-1)[0] + element
        ]
      }
      return [element]
    }, [])
})

const totalAmount = computed(() => {
  return amounts.value.reduce((accum, curr) => accum + curr, 0)
})

const save = () => {
  localStorage.setItem('movements', JSON.stringify(state.movements))
}

const read = () => {
  state.movements = JSON.parse(localStorage.getItem('movements'))
}

const create = (movement) => {
  state.movements.push(movement)
  save()
  read()
}

const remove = (movementId) => {
  state.movements = state.movements.filter((movement) => {
    return movement.id !== movementId
  })
  save()
  read()
}

const select = (value) => {
  amount.value = value
}
</script>
