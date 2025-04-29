<template>
  <div class="users">
    <div v-for="user in users" :key="user.id">
      {{ user.firstName }} {{ user.lastName }}
    </div>
  </div>
</template>

<script setup>
const users = ref([])

const { users: fetchedUsers } = await $fetch('/api/users')

users.value = fetchedUsers || []

</script>