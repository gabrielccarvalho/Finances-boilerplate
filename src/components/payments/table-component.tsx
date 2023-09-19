import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Bill } from '@/lib/types'
import { getBills } from '@/api/bills'

export function Transactions() {
  const [bills, setBills] = useState<Bill[] | null>(null)

  useEffect(() => {
    getBills(setBills)
  }, [])

  return (
    <div className="container mx-auto max-w-7xl">
      {bills && (
        <DataTable columns={columns as unknown as ColumnDef<Bill, unknown>[]} data={bills} />
      )}
    </div>
  )
}
