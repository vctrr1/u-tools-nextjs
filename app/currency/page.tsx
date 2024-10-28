"use client"

import { SelectCurrency } from "@/components/select-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight  } from 'lucide-react';
import { useState } from "react";
import  axios from 'axios'

function Currency() {
    
    const [amount, setAmount] = useState(0)
    const [currencyBase, setCurrencyBase] = useState("")
    const [currencyTarget, setCurrencyTarget] = useState("")
    const [rates, setRate] = useState<number| null>(null);
    
    const handleSubmit = async () => {
        if (!currencyBase || !currencyTarget) {
            alert("Selecione as moedas.");
            return;
        }
        
        try {
            const api = process.env.NEXT_PUBLIC_CURRENCY_API_KEY
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/${api}/pair/${currencyBase}/${currencyTarget}`)
            setRate(response.data.conversion_rate)
        } catch (error) {
            console.error("Erro ao buscar câmbio:", error);
            setRate(null); // Em caso de erro, reseta a taxa para `null`
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
                    <Button onClick={handleSubmit} className="w-full">Converter</Button>
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