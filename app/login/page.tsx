
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register, useForm } from 'react-hook-form'

function Login() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
 

  const {register, handleSubmit} = useForm();

   function handleLogin(data:any){
    console.log(data);
}
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader className="flex justify-center items-center">
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="email" placeholder="E-mail" {...register('email')} />
              </div>
              <div className="flex flex-col space-y-1.5 mb-4">
                <Label htmlFor="password" >Password</Label>
                <Input id="password" placeholder="Password" {...register('password')} />
              </div>
            </div>
            <Button className="w-full mt-6"  type="submit"  >Entrar</Button>
          </form>
        </CardContent>

      </Card>
    </div>
  );
}

export default Login;
