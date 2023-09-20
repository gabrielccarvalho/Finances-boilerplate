import { api } from '@/lib/axios'

export const userId = 'a18e7d47-bdba-4271-a6a8-23d4fec57d92'

export async function getUserInfo(){
  return api.get(`/info/${userId}`).then(response => {
    return response.data
  })
}