import { api } from '@/lib/axios'

export async function getBills(){
  return api.get('/bills/6896dcc4-2e86-472b-a203-ef9537fd2860').then(response => {
    return response.data
  })
}