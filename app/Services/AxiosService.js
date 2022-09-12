
// '/api/v1/characters?perPage=50&page=1' // TODO keep this


// @ts-ignore
export const avatarServer = axios.create({
  baseURL: 'https://last-airbender-api.herokuapp.com',
  timeout: 2000
})

// @ts-ignore
export const hpServer = axios.create({
  baseURL: 'https://hp-api.herokuapp.com',
  timeout: 2000
})

