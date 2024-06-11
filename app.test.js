const app = require('./App')
const axios = require('axios')
  
describe('2015 horoscope', () => {
  test('2015 should return Goat (since not using lunar calendar)', async () => {
    const url = 'http://localhost:3000/horoscope/2015';
    const res = await axios.get(url)

    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual('Goat')
  })
})

describe('2000-10-10 horoscope', () => {
  test('2000-10-10 should return Dragon', async () => {
    const url = 'http://localhost:3000/horoscope/2000-10-10';
    const res = await axios.get(url)

    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual('Dragon')
  })
})

describe('December 17, 1995 03:24:00 horoscope', () => {
  test('December 17, 1995 03:24:00 should return Pig', async () => {
    const url = 'http://localhost:3000/horoscope/December 17, 1995 03:24:00';
    const res = await axios.get(url)

    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual('Pig')
  })
})

describe('Unknown route', () => {
  test('date/something/ should return error', async () => {
    // axios will throw an error if it receives a response with a error code
    try {
      const url = 'http://localhost:3000/horoscope/2015/something';
      await axios.get(url)
    } catch(err) {
      expect(err.response).toBeTruthy()
      expect(err.response.status).toBe(404)
      expect(err.response.data).toContain('Page not Found')
    }
  })
})

describe('Invalid Date', () => {
  test('Invalid date should return error', async () => {
    // axios will throw an error if it receives a response with a error code
    try {
      const url = 'http://localhost:3000/horoscope/20a15';
      await axios.get(url)
    } catch(err) {
      expect(err.response).toBeTruthy()
      expect(err.response.status).toBe(400)
      expect(err.response.data).toEqual('Invalid date format !')
    }
  })
})