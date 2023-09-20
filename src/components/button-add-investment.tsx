import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useUser } from '@/contexts/user-context'
import { addInvestment } from '@/api/investments'

export function AddInvestment() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [security, setSecurity] = useState('medium')
  const { user, update } = useUser()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await addInvestment({
      name,
      amount,
      date: new Date(date).toISOString(),
      security,
    })

    update({
      ...user,
      invested: user.invested + amount,
      balance: user.balance + amount,
      investments: response
    })
  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
        >
          <Plus className='w-5 h-5' />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a new investment</DialogTitle>
            <DialogDescription>
              Add the informations below. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder='eg. BOVA11'
                value={name}
                onChange={e => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="amount" className="text-right">
                amount
              </Label>
              <Input
                id="amount"
                type='number'
                value={amount}
                onChange={e => setAmount(parseFloat(e.target.value))}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="date" className="text-right">
                date
              </Label>
              <Input
                id="date"
                type='date'
                value={date}
                onChange={e => setDate(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="security" className="text-right">
                security
              </Label>
              <Select onValueChange={value => setSecurity(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue id='security' defaultValue={security} placeholder='Medium' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={'safe'}>Safe</SelectItem>
                  <SelectItem value={'medium'}>Medium</SelectItem>
                  <SelectItem value={'risky'}>Risky</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
