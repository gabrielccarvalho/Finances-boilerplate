import { api } from '@/lib/axios'
import { Bill } from '@/lib/types'

export async function getBills(){
  return api.get('/bills/6896dcc4-2e86-472b-a203-ef9537fd2860').then(response => {
    return response.data
  })
}

export async function addBill(data: Omit<Bill, 'createdAt' | 'updatedAt' | 'id' | 'user' | 'userId' >) {
  return api.post('/bills/6896dcc4-2e86-472b-a203-ef9537fd2860', data).then(response => {
    return response.data
  })
}

export async function deleteBill(id: string) {
  return api.delete(`/bills/${id}`).then(response => {
    return response.data
  })
}