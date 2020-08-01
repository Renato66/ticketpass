export const authentication = async ({username, password}) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  // TODO: call an API to verify username and password
  // WARN: demo purpose only
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(elem => elem.username === username)
  if (!user) throw new Error('No user found')
  if (user.password !== password)  throw new Error('Wrong password')
  
  const token = Math.random().toString(36).substr(2, 9);
  localStorage.setItem('auth_token', token)
  localStorage.setItem('user', JSON.stringify({
      id: user.id,
      name: user.name
    })
  )
}
export const singUp = async ({name, username, password}) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  // TODO: call an API to verify username and password
  // TODO: validate all fields in backend 
  // WARN: demo purpose only
  const id = Math.random().toString(36).substr(2, 9);
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(elem => elem.username === username)
  if (user) throw new Error('Email already registered')
  users.push({
    id,
    name,
    username,
    password
  })
  localStorage.setItem('users', JSON.stringify(users))
  return {
    user: {
      id,
      name
    }
  }
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const logout = () => {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('user')
}