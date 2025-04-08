"use client";
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
import { checkoutPayment } from "@/services/actions/payments-actions";
import { Label } from "@radix-ui/react-label";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export const dynamic = "force-dynamic";
function PaymentForm() {
  const [valor, setValor] = useState(Number);
  const searchParams = useSearchParams();
  const resultIndicator = searchParams.get("resultIndicator");
  const [returnUrl, setReturnUrl] = useState("");

  useEffect(() => {
    const urlBase = window.location.origin;
    setReturnUrl(urlBase + "/millenium-bim");
  }, []);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await checkoutPayment(valor, returnUrl);

      if (response.success) {
        console.log("Pagameto efectuado com sucesso", response.data);
        window.location.href = response.data.url;
      } else {
        console.error("Error", response.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="flex h-[calc(100vh-56px)]  w-full  items-center justify-center">
        {resultIndicator ? (
          <div className=" flex flex-col items-center justify-center">
            <span className="font-semibold text-2xl text-green-700">
              Pagamento efectuado com sucesso{" "}
            </span>
            <div className="font-semibold text-slate-900">
              Codigo: <span className="font-bold">{resultIndicator}</span>
            </div>
          </div>
        ) : (
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Pagamento</CardTitle>
              <CardDescription>Digite o valor para continuar.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="valor">Valor</Label>
                    <Input
                      id="valor"
                      name="valor"
                      placeholder="Digite o valor"
                      type="number"
                      onChange={(e) => setValor(Number(e.target.value))}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Return URL</Label>
                    <Input
                      id="returnUrl"
                      name="returnUrl"
                      defaultValue={returnUrl}
                      onChange={(e) => setReturnUrl(e.target.value)}
                      placeholder="Digite a url de retorno/resposta..."
                      type="text"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="w-full" type="submit">
                  {loading ? "Processando..." : "Pagar"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}
      </div>
    </Suspense>
  );
}

export default PaymentForm;
