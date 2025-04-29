<template>
  <div class="users">
    <div v-for="user in users" :key="user.id">
      {{ user.firstName }} {{ user.lastName }}
    </div>
  </div>
</template>

<script setup>
const users = ref([])

// try {
  const res = await $fetch('/api/users')

  // if (status && status === 404 || status >= 500) {
  //   const cacheControlHeader = useResponseHeader('Cache-Control')
    
  //   cacheControlHeader.value = 'no-cache, no-store, must-revalidate';
  // }

  // users.value = usersData
// } catch(e) {
//   throw new Error('fetch Users error')
// }

</script>