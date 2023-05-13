<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #resume>
      <Resume
        label="Ahorro total"
        :total-amount="70000"
        :amount="10000"
      />
    </template>
    <template #movements>
      <Movements />
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Resume from '@/components/Resume'
import Movements from '@/components/Movements'
</script>
