import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "./components/ui/dialog"
import { Label } from "./components/ui/label"
import { useEffect, useState } from "react"
import { getAllTodos } from "./services/AllAPI"
const App = () => {
  const [task,setTask]=useState("")
  const [todos,setToDos]=useState([])
  const handleDelete=()=>{
    alert("Deleted");
  }
  const fetchTodos=async ()=>{
    const res=await getAllTodos()
    setToDos(res.data)
  }
  useEffect(()=>{
    fetchTodos()
  },[])
  return (
    <main className="h-screen flex flex-col gap-10 justify-center items-center">
      <div className='flex flex-col gap-4'>
        <h1 className="text-3xl font-semibold text-left">TODO App</h1>
        <div className="flex items-center gap-5">
          <Input type="email" placeHolder="Enter your Email" onChange={(e)=>{
            setTask(e.target.value)
          }}/>
          <Button >ADD</Button>
        </div>
        <hr />
        <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Task</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo,index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{todo.id}</TableCell>
                <TableCell>{todo.task}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-between gap-x-3">
                  <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className='bg-black text-white'>Edit Profile</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              defaultValue="Pedro Duarte"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input
                              id="username"
                              defaultValue="@peduarte"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose>
                            <Button type="submit">Save changes</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button className="bg-red-500">Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="text-center text-gray-400" colSpan={3}>TODO</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        </div>
      </div>
    </main>
  )
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default App