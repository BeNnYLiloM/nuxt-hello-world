setResponseHeaders(event, {
  "cache-control": 'no-cache, no-store, must-revalidate'
})

const getUsers = async (event) => {
  try {
    const response = await event.$fetch('https://dummyjson.com/users_sfgsdf')
    
    return response
  } catch(e) {
    setResponseStatus(event, e.response.status)

    if (e.response.status === 404 || e.response.status >= 500) {
      
    }
    
    return {
      statusCode: event.node.res.statusCode,
      message: e.response.message || 'Внутренняя ошибка сервера'
    }
  }
}

export default defineEventHandler(getUsers)