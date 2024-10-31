"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectItem, SelectLabel, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UnitToggle } from "@/components/unit-toggle";
import { useState } from "react";

export default function Conversao() {

    const [unit, setUnit] = useState("")

    return (
        <main className="flex w-full justify-center">
            <Card className="w-[90%] mt-5">
                <CardHeader className="text-center">
                    <CardTitle>
                        Conversão de Unidades
                    </CardTitle>
                    <CardDescription>
                        Selecione uma categoria
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <div className="flex flex-wap gap-2">
                        <UnitToggle onSelected={setUnit}/>
                    </div>
                    {unit && unit === "Massa" && (
                        <>
                        <div className="flex gap-2 mt-5 w-full">
                            <Input placeholder="Quantidade" className="w-[40%]"/>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selcione uma unidade"/>
                                </SelectTrigger>
                                <SelectContent className="w-[60%]">
                                    <SelectGroup>
                                      <SelectLabel>Medidas de Massa</SelectLabel>
                                      <SelectItem value="Quilograma">Quilograma (KG)</SelectItem>
                                      <SelectItem value="Hectograma">Hectograma (HG)</SelectItem>
                                      <SelectItem value="Decagrama">Decagrama (DAG)</SelectItem>
                                      <SelectItem value="Grama">Grama (G)</SelectItem>
                                      <SelectItem value="Decigrama">Decigrama (DG)</SelectItem>
                                      <SelectItem value="Centigrama">Centigrama (CG)</SelectItem>
                                      <SelectItem value="Miligrama">Miligrama (MG)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-5 w-[70%]">
                            <div className="flex justify-between text-lg mb-2 text-rose-400">
                                <h1>Unidade de Medida</h1>
                                <h1>Valor</h1>
                            </div>
                            <table className="w-full">
                                <tbody className="w-full">
                                    <tr className="border-b w-full">
                                        <td className="flex justify-between w-full">
                                            <span>Quilograma</span>
                                            <span>Valor</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="flex justify-between w-full">
                                            <span>Hectograma</span>
                                            <span>Valor</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="flex justify-between w-full">
                                            <span>Decagrama</span>
                                            <span>Valor</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="flex justify-between w-full">
                                            <span>Grama</span>
                                            <span>Valor</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="flex justify-between w-full">
                                            <span>Decigrama</span>
                                            <span>Valor</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="flex justify-between w-full">
                                            <span>Centigrama</span>
                                            <span>Valor</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="flex justify-between w-full">
                                            <span>Miligrama</span>
                                            <span>Valor</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </>
                    )}
                    {unit && unit === "Temperatura" && (
                        <div>
                            T
                        </div>
                    )}
                    {unit && unit === "Velocidade" && (
                        <div>
                            v
                        </div>
                    )}
                    {unit && unit === "Comprimento" && (
                        <div>
                            c
                        </div>
                    )}
                    {unit && unit === "Volume" && (
                        <div>
                            vo
                        </div>
                    )}
                    {unit && unit === "Tempo" && (
                        <div>
                            t
                        </div>
                    )}
                    {unit && unit === "Area" && (
                        <div>
                            a
                        </div>
                    )}

                </CardContent>
            </Card>
        </main>
     );
}

