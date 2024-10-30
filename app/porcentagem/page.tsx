"use client"

import PercentageComponent from "@/components/percentage-component";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Porcentagem() {

    const calculatePercentage = (op1: number, op2: number) => ((op1 * op2) / 100)
    const calculateProportion = (op1: number, op2: number) => ((op1 / op2) * 100)
    const calculateIncrease = (op1: number, op2: number) => ((op2 - op1) / op1) * 100
    const calculateDecrease = (op1: number, op2: number) => ((op1 - op2) / op1) * 100

    return ( 
        <main className="flex flex-col w-full h-[100%] mb-6 items-center">
            <CardHeader className="text-center">
                <CardTitle >
                    Calculadoras de porcentagem 
                </CardTitle>
                <CardDescription className="">
                    Permite calcular porcentagem de várias formas, aumentos, descontos, proporções, etc. 
                </CardDescription>
            </CardHeader>
            <div className="space-y-5 w-[85%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
                <PercentageComponent onCalculate={calculatePercentage} label1="Quanto é (%):" label2="de:"/>
                <PercentageComponent onCalculate={calculateProportion} label1="O valor:" label2="é qual porcentagem de:" label3="%"/>
                <PercentageComponent onCalculate={calculateIncrease} label1="Um valor de:" label2="Que AUMENTOU para:" label3="%"/>
                <PercentageComponent onCalculate={calculateDecrease} label1="Um valor de:" label2="que DIMINUIU para:" label3="%"/>
            </div>
        </main>
     );
}