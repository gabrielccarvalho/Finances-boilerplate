import { api } from '@/lib/axios'
import { Bill } from '@/lib/types'

export async function getBills(setBills: React.Dispatch<React.SetStateAction<Bill[] | null>>){
  return api.get('/bills/6896dcc4-2e86-472b-a203-ef9537fd2860').then(response => {
    setBills(response.data)
  })
}