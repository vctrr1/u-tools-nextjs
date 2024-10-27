"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatNumber } from "@/lib/format-number";
import { calculateIMC, imcResult } from "@/lib/imc";
import { useState } from "react";

function Imc() {

    const [imcData, setImcData] = useState<null |  {weight: number, height: number, imc: number, imcResult: string}>(null)

    function handleSubmit (e: React.FormEvent<HTMLFormElement>){

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData) as {weight: string, height: string}
        const {weight, height} = data

        if(!height || !weight){
            alert("Preencha todos os campos.")
            return
        }

        const parcedWeight = parseFloat(weight.replace(',','.'))
        const parcedHeight = parseFloat(height.replace(',','.')) / 100 //no calculo do imc a algutra é em metros

        if(isNaN(parcedHeight) || isNaN(parcedWeight)){
            alert("Digite números válidos.")
            return
        }

        if(parcedWeight < 2 || parcedWeight > 500){
            alert("Digite um peso válido.")
            return
        }else if(parcedHeight < 0.5 || parcedHeight > 2.5){
            alert("Digite uma altura válida.")
            return
        }

        const imc = calculateIMC(parcedWeight, parcedHeight)
        const result = imcResult(imc)

        setImcData({
            weight: parcedWeight,
            height: parcedHeight,
            imc: imc,
            imcResult: result,
        })

        e.currentTarget.reset()

    }

    return ( 
        <main className="flex justify-center items-center h-[100%]">
            <Card className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] mt-5 mb-5">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">
                        IMC
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <section id="form" className="pb-5">
                        <form onSubmit={handleSubmit} className="space-y-2 pt-5">
                            <div>
                                <label htmlFor="height" className="text-lg">Altura (cm):</label>
                                <Input type="text" id="height" name="height"/>

                            </div>
                            <div className="pb-4">
                                <label htmlFor="weight" className="text-lg">Peso (kg):</label>
                                <Input type="text" id="weight" name="weight"/>
                            </div>
                            {imcData ? (
                                <Button className="w-full text-base" type="submit">Refazer</Button>
                            ) : (
                                <Button className="w-full text-base" type="submit">Calcular</Button>
                            )}
                        </form>
                    </section>
                    <section id="result" className="w-full flex justify-center items-center pt-3 pb-3 border rounded-md shadow-md">
                        {imcData ? (
                            <table className="sm:w-[80%] w-full text-center">
                                <tbody>
                                    <tr className="font-bold">
                                        <td>Peso</td>
                                        <td className="text-right">Altura</td>
                                        <td className="text-right">IMC</td>
                                        <td className="text-center">Resultado</td>
                                    </tr>
                                    <tr>
                                        <td >{formatNumber(imcData.weight) }</td>
                                        <td className="text-right">{formatNumber(imcData.height * 100, 0)}</td>
                                        <td className="text-right">{formatNumber(imcData.imc) }</td>
                                        <td className="text-center">{imcData.imcResult}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-center text-lg">Saiba se está no peso ideal.</p>
                        )}
                    </section>
                    <section id="referenceTable" className="flex justify-center">
                        <table className="sm:w-[70%] w-[90%]">
                            <thead className="text-rose-300">
                                <tr>
                                    <th className="px-6 py-2 text-left">IMC</th>
                                    <th className="px-6 py-2 text-right">Classificação</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b">
                                    <td>Menor que 17</td>
                                    <td className="text-right">Muito abaixo do peso</td>
                                </tr>
                                <tr className="border-b">
                                    <td>Menor que 18,5</td>
                                    <td className="text-right">Abaixo do peso</td>
                                </tr>
                                <tr className="border-b">
                                    <td>Entre 18,5 e 24,9</td>
                                    <td className="text-right">Peso normal</td>
                                </tr>
                                <tr className="border-b">
                                    <td>Entre 25 e 29,9</td>
                                    <td className="text-right">Sobrepeso</td>
                                </tr>
                                <tr className="border-b">
                                    <td>Entre 30 e 34,9 </td>
                                    <td className="text-right">Obesidade grau 1</td>
                                </tr>
                                <tr className="border-b">
                                    <td>Entre 35 e 39,9</td>
                                    <td className="text-right">Obesidade grau 2</td>
                                </tr>
                                <tr className="border-b">
                                    <td>Acima de 40</td>
                                    <td className="text-right">Obesidade grau 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </CardContent>
            </Card>
        </main>
     );
}

export default Imc;