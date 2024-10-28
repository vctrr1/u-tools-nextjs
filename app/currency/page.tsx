"use client"

import { SelectCurrency } from "@/components/select-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight  } from 'lucide-react';
import { useState } from "react";
import CurrencyConversion from "@/actions/currency-api";

function Currency() {
    
    const [amount, setAmount] = useState(0)
    const [currencyBase, setCurrencyBase] = useState("")
    const [currencyTarget, setCurrencyTarget] = useState("")
    const [rates, setRate] = useState<number| null>(null);
    
    const handleSubmit = async (currencyBase:string, currencyTarget: string) => {
        if (!currencyBase || !currencyTarget) {
            alert("Selecione as moedas.");
            return;
        }
        const result = await CurrencyConversion(currencyBase, currencyTarget)
        if(result) {
            setRate(result)
        }else {
            alert("Erro ao converter")
        }
    }

    return ( 
        <main className="flex w-full h-[100%] items-center justify-center">
            <Card className="w-[90%]">
                <CardHeader className="text-center text-lg">
                    Faça sua conversão
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-3 pb-5">
                        <div className="flex flex-col w-full">
                            <label>Digite a quantidade</label>
                            <Input type="number" onChange={(e) => setAmount(Number(e.target.value))}/>
                        </div>
                        <div className="flex space-x-4 items-center w-full">
                            <div className="w-full">
                                <label>Moeda Origem</label>
                                <SelectCurrency onChange={setCurrencyBase} value={currencyBase}/>
                            </div>
                            <ArrowLeftRight size={18} strokeWidth={1.25} className="flex-shrink-0 mt-5"/>
                            <div className="w-full">
                                <label>Moeda Destino</label>
                                <SelectCurrency onChange={setCurrencyTarget} value={currencyTarget}/>
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => handleSubmit(currencyBase, currencyTarget)} className="w-full">Converter</Button>
                    {amount !== 0 && rates !== null &&(
                        <div className="text-center mt-4 text-lg">
                          Resultado: {amount} {currencyBase} = {(amount * rates).toFixed(2)} {currencyTarget}
                        </div>
                    )}
                </CardContent>
            </Card>
        </main>
     );
}

export default Currency;