const getUsers = async (event) => {
  try {
    const response = await $fetch('https://dummyjson.com/users_dfg')
    
    return response
  } catch(e) {
    setResponseStatus(event, e.response.status)
  }
}

export default defineEventHandler(getUsers)