import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";
import AuthActions from "@/services/actions/auth-actions";

export const dynamic = "force-dynamic";
export function SignUpForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cadastro</CardTitle>
        <CardDescription>
          Preencha os campos abaixo pra criar uma conta.
        </CardDescription>
      </CardHeader>
      <form action={AuthActions.createAccount}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                placeholder="Digite o seu nome"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Digite o seu email"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                placeholder="Digite o senha"
                type="password"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Criar conta</Button>
          <Link href="/login" className={buttonVariants({ variant: "link" })}>
            Já tenho conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
