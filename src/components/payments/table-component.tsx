import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

function getData(): Payment[] {
  return [
    {
      id: "0000004JFGCPH5HDC9906DCHQZ",
      amount: 100,
      status: 2,
      origin: "Netflix",
      date: '08/11/2023'
    },
    {
      id: "0000004JFG1PK89KSP3J7SMWS2",
      amount: 200,
      status: 3,
      origin: "Rent",
      date: '1/12/2023'
    },
    {
      id: "0000004JFGV92XC73XYZ1NWC2A",
      amount: 150,
      status: 3,
      origin: "Amazon",
      date: '1/30/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 1,
      origin: "Disney",
      date: '8/20/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 1,
      origin: "Car Insurance",
      date: '8/09/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 2,
      origin: "Light Bill",
      date: '8/20/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 3,
      origin: "Water Bill",
      date: '9/01/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 2,
      origin: "Internet Bill",
      date: '9/12/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 2,
      origin: "Inter",
      date: '8/20/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 3,
      origin: "DDBurger",
      date: '9/01/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 2,
      origin: "Camaroes",
      date: '9/12/2023'
    },
    {
      id: "0000004JFGCPH5HDC9906DCHQZ",
      amount: 100,
      status: 2,
      origin: "Netflix",
      date: '08/11/2023'
    },
    {
      id: "0000004JFG1PK89KSP3J7SMWS2",
      amount: 200,
      status: 3,
      origin: "Rent",
      date: '1/12/2023'
    },
    {
      id: "0000004JFGV92XC73XYZ1NWC2A",
      amount: 150,
      status: 3,
      origin: "Amazon",
      date: '1/30/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 1,
      origin: "Disney",
      date: '8/20/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 1,
      origin: "Car Insurance",
      date: '8/09/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 2,
      origin: "Light Bill",
      date: '8/20/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 3,
      origin: "Water Bill",
      date: '9/01/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 2,
      origin: "Internet Bill",
      date: '9/12/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 2,
      origin: "Inter",
      date: '8/20/2023'
    },
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 3,
      origin: "DDBurger",
      date: '9/01/2023'
    },
  ]
}

export function Transactions() {
  const data = getData()

  return (
    <div className="container max-w-7xl mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
