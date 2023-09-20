import { api } from '@/lib/axios'
import { userId } from './user'

export async function deleteInvestment(id: string) {
  return api.delete(`/investments/${id}`).then(response => {
    return response.data
  })
}

export async function addInvestment({
  name,
  amount,
  date,
  security,
}: {
  name: string,
  amount: number,
  date: string,
  security: string,
}) {
  return api.post(`/investments/${userId}`, {
    name,
    amount,
    date,
    security
  }).then(response => {
    return response.data
  })
}