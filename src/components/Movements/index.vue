<template>
  <div class="movements">
    <h2 class="title">Historial</h2>
    <div class="content">
      <div
        v-for="movement in movements"
        :key="movement.id"
      >
        <Movement
          :movement="movement"
          @remove="remove"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, } from 'vue'
import Movement from '@/components/Movements/Element'


const props = defineProps({
  movements: {
    type: Array,
    default: () => [],
  },
})

const { movements, } = toRefs(props)

const remove = (movementId) => {
  // movements.value = movements.value.filter((movement) => {
  //   return movement.id != movementId
  // })
  console.log(movementId)
}
</script>

<style scoped>
.movements {
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
}

.title {
  margin: 8px 16px 24px 16px;
  color: var(--brand-blue);
}

.content {
  max-height: 68vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}
</style>
