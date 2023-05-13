<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #resume>
      <Resume />
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Resume from '@/components/Resume'
</script>
