import { api } from '@/lib/axios'
import { User } from '@/lib/types'

export async function getUserInfo(setUserInfo: React.Dispatch<React.SetStateAction<User | null>>){
  return api.get('/info/6896dcc4-2e86-472b-a203-ef9537fd2860').then(response => {
    setUserInfo(response.data)
  })
}