import { api } from '@/lib/axios'

export async function deleteBill(id: string) {
  return api.delete(`/bills/${id}`).then(response => {
    return response.data
  })
}

export async function addBill({
  name,
  amount,
  date,
  status,
}: {
  name: string,
  amount: number,
  date: string,
  status: number,
}) {
  return api.post('/bills/6896dcc4-2e86-472b-a203-ef9537fd2860', {
    name,
    amount,
    date,
    status
  }).then(response => {
    return response.data
  })
}