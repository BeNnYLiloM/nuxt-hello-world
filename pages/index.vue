<template>
  <div class="users">
    <div data-testid="user" v-for="user in users" :key="user.id">
      {{ user.firstName }} {{ user.lastName }}
    </div>
  </div>
</template>

<script setup>

const users = ref([])
const isFailed = ref(false)

try {
  const { users: fetchedUsers } = await $fetch('/api/users')

  users.value = fetchedUsers || []
} catch(e) {
  isFailed.value = true
}

</script>