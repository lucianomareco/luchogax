import axios from 'axios'
const CLIENT_NAME: string = process.env.BACKEND_URL ?? ''

export const updateCounter = async (amount: number, password: string) => {
  try {
    const config = {
      method: 'PUT',
      url: `${CLIENT_NAME}/api/counter`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        amount,
        password
      }
    }
    const { data } = await axios(config)
    return data
  } catch (e) {
    return false
  }
}

export const getCounter = async () => {
  const config = {
    method: 'GET',
    url: `${CLIENT_NAME}/api/counter`,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const { data } = await axios(config)
  return data
}
