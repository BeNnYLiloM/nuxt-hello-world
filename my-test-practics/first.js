function getGreeting(name, age) {
  if (age < 18) {
     return 'you are not allowed'
  } else {
    return `hey ${name}, you are ${age} old`
  }
}

export default {
  getGreeting: getGreeting,
}