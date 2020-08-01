export const authentication = async ({username, password}) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  // TODO: call an API to verify username and password
  // WARN: demo purpose only
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(elem => elem.username === username)
  if (!user) throw new Error('No user found')
  if (user.password !== password)  throw new Error('No user found')
  
  const token = Math.random().toString(36).substr(2, 9);
  localStorage.setItem('auth_token', token)
  localStorage.setItem('user', JSON.stringify({
      id: user.id,
      name: user.name
    })
  )
}
