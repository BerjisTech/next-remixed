import { ProPlanCategory } from "@/interfaces/membership";
import AdminHeader from "../../_header";
import { getProfessionalMembershipBenefits } from "@/server/data/membership";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";

// async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     return [
//         {
//             id: "728ed52f",
//             amount: 100,
//             status: "pending",
//             email: "m@example.com",
//         },
//         {
//             id: "a9f26e1b",
//             amount: 200,
//             status: "pending",
//             email: "john.doe@example.com",
//         },
//         {
//             id: "b40a7569",
//             amount: 50,
//             status: "failed",
//             email: "jane.smith@example.com",
//         },
//         {
//             id: "c59d3f62",
//             amount: 300,
//             status: "pending",
//             email: "alice@example.com",
//         },
//         {
//             id: "d4e1b1a3",
//             amount: 150,
//             status: "pending",
//             email: "bob@example.com",
//         },
//         {
//             id: "e83951d8",
//             amount: 80,
//             status: "failed",
//             email: "carol@example.com",
//         },
//         {
//             id: "f5b8d10a",
//             amount: 450,
//             status: "pending",
//             email: "daniel@example.com",
//         },
//         {
//             id: "g2c46f7e",
//             amount: 120,
//             status: "pending",
//             email: "emma@example.com",
//         },
//         {
//             id: "h7a1f83b",
//             amount: 230,
//             status: "pending",
//             email: "felix@example.com",
//         },
//         {
//             id: "i64e527d",
//             amount: 60,
//             status: "failed",
//             email: "grace@example.com",
//         },
//         {
//             id: "j91c383f",
//             amount: 500,
//             status: "pending",
//             email: "hannah@example.com",
//         },
//         {
//             id: "k4b15d92",
//             amount: 320,
//             status: "pending",
//             email: "irene@example.com",
//         },
//         {
//             id: "l2d9e1b3",
//             amount: 250,
//             status: "failed",
//             email: "james@example.com",
//         },
//         {
//             id: "m3a2f92b",
//             amount: 600,
//             status: "pending",
//             email: "katie@example.com",
//         },
//         {
//             id: "n9f2d51a",
//             amount: 180,
//             status: "pending",
//             email: "leo@example.com",
//         },
//         {
//             id: "o2c5a83b",
//             amount: 400,
//             status: "failed",
//             email: "mike@example.com",
//         },
//         {
//             id: "p6a9d40e",
//             amount: 90,
//             status: "pending",
//             email: "nancy@example.com",
//         },
//         {
//             id: "q7e5b15c",
//             amount: 350,
//             status: "pending",
//             email: "olivia@example.com",
//         },
//         {
//             id: "r8d1f23b",
//             amount: 50,
//             status: "failed",
//             email: "paul@example.com",
//         },
//         {
//             id: "s4b8c9f1",
//             amount: 1000,
//             status: "pending",
//             email: "quinn@example.com",
//         },
//         {
//             id: "t2a6e58d",
//             amount: 250,
//             status: "pending",
//             email: "rachel@example.com",
//         },
//         {
//             id: "u9c1f40b",
//             amount: 650,
//             status: "pending",
//             email: "steve@example.com",
//         },
//         {
//             id: "v3e6d25f",
//             amount: 700,
//             status: "failed",
//             email: "tina@example.com",
//         },
//     ];
// }

export default async function DemoPage() {
  // const data = await getData()
  const planBenefits: ProPlanCategory[] = await getProfessionalMembershipBenefits(false);

  // console.log(planBenefits)
  return (
    <div>
      <AdminHeader
        title="Membership benefits"
        description="Here Professional and Business membership benefits are listed."
      />
      <div className="rounded-md border">
        {/* <DataTable columns={columns} data={data} /> */}
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
