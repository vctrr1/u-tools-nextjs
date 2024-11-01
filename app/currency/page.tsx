"use client"

import { SelectCurrency } from "@/components/select-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight  } from 'lucide-react';
import { useState } from "react";
import CurrencyConversion from "@/actions/currency-api";
import {motion} from "framer-motion"

export default function Currency() {
    
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
        <main className="flex flex-col w-full items-center mt-5">
            <Card className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] mt-5 mb-5">
                <CardHeader className="text-center text-lg">
                    <CardTitle className="text-center text-2xl">
                        Faça sua conversão
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-3 pb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-lg">Digite a quantidade:</label>
                            <Input type="number" onChange={(e) => setAmount(Number(e.target.value))}/>
                        </div>
                        <div className="flex space-x-4 items-center w-full">
                            <div className="w-full">
                                <label className="text-lg">Moeda Origem:</label>
                                <SelectCurrency onChange={setCurrencyBase} value={currencyBase}/>
                            </div>
                            <ArrowLeftRight size={18} strokeWidth={1.25} className="flex-shrink-0 mt-5"/>
                            <div className="w-full">
                                <label className="text-lg">Moeda Destino:</label>
                                <SelectCurrency onChange={setCurrencyTarget} value={currencyTarget}/>
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => handleSubmit(currencyBase, currencyTarget)} className="w-full text-base">Converter</Button>
                </CardContent>
            </Card>
            {amount !== 0 && rates !== null && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} // Início da animação: invisível e um pouco abaixo
                    animate={{ opacity: 1, y: 0 }} // Animação final: visível e na posição original
                    transition={{ duration: 0.9, ease: "easeOut" }} // Duração e tipo da animação
                    className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
                >
                    <div className="border shadow-sm p-4 rounded-lg text-center font-semibold text-lg">
                        Resultado: {amount} {currencyBase} = {(amount * rates).toFixed(2)} {currencyTarget}
                    </div>
                </motion.div>
            )}
        </main>
     );
}