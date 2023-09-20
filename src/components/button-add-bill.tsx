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
import { addBill } from '@/api/bills'

export function AddBill() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState('')
  const [status, setStatus] = useState(1)

  async function handleSubmit() {
    addBill({
      name,
      amount,
      date: new Date(date).toISOString(),
      status
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
        <DialogHeader>
          <DialogTitle>Add a new bill</DialogTitle>
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
                placeholder='eg. Internet'
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
                placeholder='eg. 11.200,00'
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
            <Label htmlFor="status" className="text-right">
                status
              </Label>
              <Select onValueChange={value => setStatus(parseInt(value))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue id='status' defaultValue={status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={1}>Pending</SelectItem>
                  <SelectItem value={2}>Paid</SelectItem>
                  <SelectItem value={3}>Late</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={handleSubmit}
            >
              Save changes
            </Button>
          </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
