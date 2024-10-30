"use client"

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { formatNumber } from "@/lib/format-number";

interface PercentageComponentProps {
    label1: string;
    label2: string;
    label3?: string;
    onCalculate: (op1: number, op2: number) => number;
}

export default function PercentageComponent({label1, label2, label3, onCalculate}:PercentageComponentProps) {

    const formRef = useRef<HTMLFormElement>(null)

    const [result, setResult] = useState<number | null>(null)
    const [op1, setOp1] = useState(0)
    const [op2, setOp2] = useState(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!isNaN(op1) && !isNaN(op2)){
            const calculatedResult = onCalculate(op1, op2);
            setResult(calculatedResult)
        }
    }

    const clearResult = () => {
        setResult(null)
        formRef.current?.reset()
        setOp1(0)
        setOp2(0)
    }

    return (
        <Card className="w-full">
            <CardContent className="p-3">
                <form  ref={formRef} onSubmit={handleSubmit}>
                    <div className="flex flex-col p-3">
                        <div>
                            <label className="whitespace-nowrap text-lg">{label1}</label>
                            <Input type="text" onChange={(e) => setOp1(Number(e.target.value))}/>
                        </div>
                        <div>
                            <label className="text-lg">{label2}</label>
                            <Input type="text" onChange={(e) => setOp2(Number(e.target.value))}/>
                        </div>
                        <div className="flex-1">
                            <label className="text-lg">Resultado:</label>
                            <div className="min-w-[70px] w-full h-10 border rounded-md flex justify-center items-center text-lg">
                                {result !== null && (
                                    <h1 className="font-semibold">
                                        {label3 ? `${formatNumber(result)} ${label3}` : formatNumber(result)}
                                    </h1>
                                )}
                            </div>
                            <Button type="submit" className="w-full mt-4">Calcular</Button>
                            <Button type="button" onClick={clearResult} className="w-full mt-2" variant="outline">Limpar</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}