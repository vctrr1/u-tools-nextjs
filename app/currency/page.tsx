"use client"

import { SelectCurrency } from "@/components/select-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight  } from 'lucide-react';
import { useState } from "react";
import  axios from 'axios'

function Currency() {
    const [amount, setAmount] = useState(1)
    const [currencyBase, setCurrencyBase] = useState("")
    const [currencyTarget, setCurrencyTarget] = useState("")
    const [rates, setRate] = useState<number| null>(null);

    const handleSubmit = async () => {
        if (!currencyBase || !currencyTarget) {
            alert("Selecione as moedas.");
            return;
        }
        
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/412d8df4c3c863136783440a/pair/${currencyBase}/${currencyTarget}`)
            setRate(response.data.conversion_rate)
            console.log("API response:", rates);
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
                            <Input type="number"/>
                        </div>
                        <div className="flex space-x-4 items-center w-full">
                            <div className="w-full">
                                <label>Moeda Origem</label>
                                <SelectCurrency/>
                            </div>
                            <ArrowLeftRight size={18} strokeWidth={1.25} className="flex-shrink-0 mt-5"/>
                            <div className="w-full">
                                <label>Moeda Destino</label>
                                <SelectCurrency/>
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleSubmit} className="w-full">Converter</Button>
                </CardContent>
            </Card>
        </main>
     );
}

export default Currency;