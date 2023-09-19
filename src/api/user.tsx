import { api } from '@/lib/axios'
import { Bill, User } from '@/lib/types'

export async function getUserInfo(setUserInfo: React.Dispatch<React.SetStateAction<User | null>>){
  return api.get('/info/6896dcc4-2e86-472b-a203-ef9537fd2860').then(response => {
    setUserInfo(response.data)
  })
}

export async function updateUserExpenses(setExpenses: React.Dispatch<React.SetStateAction<number>>) {
  const expenses = await api.get('/bills/6896dcc4-2e86-472b-a203-ef9537fd2860').then(response => {
    return response.data.map((bill: Bill) => bill.amount).reduce((accumulator: number, currentValue: number) => {
      return accumulator + currentValue
    },0)
  })

  return api.post('/expenses/6896dcc4-2e86-472b-a203-ef9537fd2860', {
    expenses
  }).then(response => {
    setExpenses(response.data.expenses)
  })
}

export async function updateUserBalance(setBalance: React.Dispatch<React.SetStateAction<number>>) {
  const info = await api.get('/info/6896dcc4-2e86-472b-a203-ef9537fd2860').then(response => {
    return response.data
  })

  const balance = info.income - info.expenses + info.invested

  return api.post('/balance/6896dcc4-2e86-472b-a203-ef9537fd2860', {
    balance
  }).then(response => {
    setBalance(response.data.balance)
  })
}