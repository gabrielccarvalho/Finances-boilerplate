import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "0000004JFGQMBR92QNF8X5SPBV",
      amount: 10,
      status: 1,
      origin: "Disney",
      date: "8/20/2023"
    },
    {
      id: "0000005KFHSLT3G5LJK5H8D9RA",
      amount: 15,
      status: 2,
      origin: "Netflix",
      date: "9/5/2023"
    },
    {
      id: "0000006PQWU3NX97RKTY2L9EPH",
      amount: 20,
      status: 3,
      origin: "Amazon Prime",
      date: "7/15/2023"
    },
    {
      id: "0000007V7RG9P1MBVDY0MQ8LDX",
      amount: 12,
      status: 1,
      origin: "Google Play",
      date: "8/12/2023"
    },
    {
      id: "0000008TSLRXK4N0U2YZN7PHWK",
      amount: 8,
      status: 2,
      origin: "Apple Music",
      date: "9/10/2023"
    },
    {
      id: "0000009KZBJHR6C3Y17U8L6FVP",
      amount: 18,
      status: 3,
      origin: "Microsoft Office",
      date: "7/25/2023"
    },
    {
      id: "0000010M9NE5X8W8UZR9S0RDFV",
      amount: 14,
      status: 1,
      origin: "Facebook Marketplace",
      date: "8/28/2023"
    },
    {
      id: "0000011M40WVPY53QJ2GLR0FJH",
      amount: 22,
      status: 2,
      origin: "Twitter Spaces",
      date: "9/2/2023"
    },
    {
      id: "0000012WQTN2Z0LRV3UVL8MD9F",
      amount: 11,
      status: 3,
      origin: "Instagram Reels",
      date: "7/19/2023"
    },
    {
      id: "0000013XHDNLRQY3GK6Q8B1DSE",
      amount: 9,
      status: 1,
      origin: "LinkedIn Premium",
      date: "8/8/2023"
    },
    {
      id: "0000014FHXLQS90KYVBNM9H2AT",
      amount: 16,
      status: 2,
      origin: "Snapchat Discover",
      date: "9/15/2023"
    },
    {
      id: "0000015HY0S6GRYTV7Z6J9NV4E",
      amount: 13,
      status: 3,
      origin: "TikTok Pro",
      date: "7/30/2023"
    },
    {
      id: "0000016NEKWQF3M2QVPTQ8D2TW",
      amount: 17,
      status: 1,
      origin: "Pinterest Trends",
      date: "8/3/2023"
    },
    {
      id: "0000017PTURVJ9BEXJZL0NC4SV",
      amount: 19,
      status: 2,
      origin: "Reddit Gold",
      date: "9/20/2023"
    },
    {
      id: "0000018F3LPSZ7X4TGNNK9BDLW",
      amount: 21,
      status: 3,
      origin: "Spotify Premium",
      date: "7/14/2023"
    },
    {
      id: "0000019D8LKRQ6FTJL6KSR9GQY",
      amount: 10,
      status: 1,
      origin: "YouTube Music",
      date: "8/16/2023"
    },
    {
      id: "0000020G6TVL2VQ7YLN6TY0TVQ",
      amount: 15,
      status: 2,
      origin: "LinkedIn Learning",
      date: "9/8/2023"
    },
    {
      id: "0000021ZSV8XWZ1BYLBYQ9ZC8D",
      amount: 20,
      status: 3,
      origin: "Twitter Ads",
      date: "7/22/2023"
    },
    {
      id: "0000022N4RVG6VLRTTVLRB7QWL",
      amount: 12,
      status: 1,
      origin: "Amazon Web Services",
      date: "8/7/2023"
    },
    {
      id: "0000023VPDXR6D7GZQN2XHY2GJ",
      amount: 8,
      status: 2,
      origin: "Facebook Gaming",
      date: "9/13/2023"
    },
    {
      id: "0000024VUJPKW8Z7D6W9XP3TMN",
      amount: 14,
      status: 3,
      origin: "Vimeo Pro",
      date: "7/10/2023"
    },
    {
      id: "0000025NSBLGT9E8RTKPQ2CYKG",
      amount: 9,
      status: 1,
      origin: "Dropbox Business",
      date: "8/25/2023"
    },
    {
      id: "0000026QVHJDX0AMK8RGT7Z9SL",
      amount: 18,
      status: 2,
      origin: "Slack Enterprise",
      date: "9/18/2023"
    },
    {
      id: "0000027XBMS2R3ULN5LPRB0QVK",
      amount: 11,
      status: 1,
      origin: "Zoom Pro",
      date: "7/8/2023"
    },
    {
      id: "0000028DRZP4T1YUVMWSV5AZKX",
      amount: 20,
      status: 3,
      origin: "Salesforce Enterprise",
      date: "8/30/2023"
    }
  ]
}

const data = await getData()

export function Transactions() {
  return (
    <div className="container mx-auto max-w-7xl">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
