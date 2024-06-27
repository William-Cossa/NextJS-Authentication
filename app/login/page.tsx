import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {
     
  return (
    <div>
        <Card className="w-[350px]">
      <CardHeader className='flex justify-center items-center'>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" placeholder="E-mail" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pasword">Password</Label>
              <Input id="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button className='w-full'>Entrar</Button>
      </CardFooter>
    </Card>
    </div>

  )
}

export default Login