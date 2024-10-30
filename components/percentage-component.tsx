"use client"
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

interface PercentageComponentProps {
    label1: string;
    label2: string;
}

export default function PercentageComponent({label1, label2}:PercentageComponentProps) {

    const formRef = useRef<HTMLFormElement>(null)

    const [result, setResult] = useState<number | null>()
    const [op1, setOp1] = useState(0)
    const [op2, setOp2] = useState(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(op1 && op2){
            setResult((op1 * op2) / 100 )
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
                            <Input type="number" onChange={(e) => setOp1(Number(e.target.value))}/>
                        </div>
                        <div>
                            <label className="text-lg">{label2}</label>
                            <Input type="number" onChange={(e) => setOp2(Number(e.target.value))}/>
                        </div>
                        <div className="flex-1">
                            <label className="text-lg">Resultado:</label>
                            <div className="min-w-[70px] w-full h-10 border rounded-md flex justify-center items-center text-lg">
                                {result && (<h1>{result.toString()}</h1>)}
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