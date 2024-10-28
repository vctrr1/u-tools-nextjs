"use client"

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Plus, Minus, Slash, Asterisk} from 'lucide-react';
import { useTheme } from "next-themes";
import { formatNumber } from "@/lib/format-number";

export default function Imc() {

    const {theme} = useTheme()

    const [display, setDisplay] = useState("")
    const [previousValue, setPreviousValue] = useState("")
    const [operator, setOperatore] = useState("")
    const [inputTheme, setInputTheme] = useState("");
    
    useEffect(() => {
        // Define o tema do input após o componente montar no cliente
        setInputTheme(theme === "dark" ? "bg-[#030712]" : "bg-[#ffffff]");
    }, [theme]);

    const appendToDisplay = (arg: string) => {
        setDisplay((prev) => prev + arg)
    }

    const calculate = () => {
        if(previousValue && operator && display){
            // precisou fazer um split no display pois a logica é que a expressão fique toda no input
            // e eu queria que se ja tiver um operador e selecionar outro o mais novo fica no lutar
            // mas na hora de calcular isso dava erro
            const current = parseFloat(display.split(operator).pop() || "0")
            const previous = parseFloat(previousValue)
            let result

            if (isNaN(current) || isNaN(previous)) {
                console.error("Invalid input");
                return;
            }

            switch(operator){
                case "+":
                    result = previous + current
                    break
                case "-":
                    result = previous - current
                    break
                case "*":
                    result = previous * current
                    break
                case "/":
                    result = previous / current
                    break
                default:
                    return
            }
            setDisplay(formatNumber(result))
            setPreviousValue("")
            setOperatore("")
        }
    }
    const handleOperator = (op: string) => {
        if (display) {
            // Se já houver um operador, troca pelo novo
            if (operator) {
                setDisplay((prev) => prev.slice(0, -1) + op); // Troca o último operador pelo novo
            } else {
                setPreviousValue(display);
                setDisplay((prev) => prev + op);
            }
            setOperatore(op);
        }
    };

    const clearDisplay = () => {
        setDisplay("")
        setPreviousValue("")
        setOperatore("")
    }


    return ( 
        <main className=" flex w-full h-[100%] justify-center items-center">
            <Card className="w-[85%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mt-5 mb-5">
                <CardContent className="space-y-5 p-2">
                    <input readOnly type="text" value={display} className={`${inputTheme} h-16 w-full text-4xl text-right border-none mt-5 p-3 focus:outline-none`}/>
                    <div className="grid grid-cols-4 gap-2 p-2 space-y-2 justify-items-center">
                        <button className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-400 font-bold cursor-pointer mt-2" onClick={() => handleOperator('+')}><Plus size={19}/></button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('7')}>7</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('8')}>8</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('9')}>9</button>
                        <button className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-400 font-bold cursor-pointer" onClick={() => handleOperator('-')}><Minus size={19}/></button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('4')}>4</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('5')}>5</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('6')}>6</button>
                        <button className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-400 font-bold cursor-pointer" onClick={() => handleOperator('*')}><Asterisk size={19}/></button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('1')}>1</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('2')}>2</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('3')}>3</button>
                        <button className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-400 font-bold cursor-pointer" onClick={() => handleOperator('/')}><Slash size={18}/></button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('0')}>0</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => appendToDisplay('.')}>.</button>
                        <button className="h-14 w-14 rounded-full bg-slate-400 font-bold cursor-pointer text-xl" onClick={() => clearDisplay()}> C </button>
                        <button className="col-span-4 w-full h-14 rounded-full bg-orange-400 font-bold cursor-pointer" onClick={() => calculate()}> = </button>
                    </div>
                </CardContent>
            </Card>
        </main>
     );
}