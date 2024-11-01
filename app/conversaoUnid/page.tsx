"use client"

import ConversionTable from "@/components/conversion-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectItem, SelectLabel, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UnitToggle } from "@/components/unit-toggle";
import { useState } from "react";

type UnitType = "Tonelada" | "Quilograma" | "Hectograma" | "Decagrama" | "Grama" | "Decigrama" | "Centigrama" | "Miligrama";
type ConversionResult = { unit: UnitType; value: number };

export default function Conversao() {

    const [conversionType, setConversionType] = useState("");
    const [amount, setAmount] = useState(0);
    const [unit, setUnit] = useState<UnitType | undefined>(undefined);
    const [conversionResults, setConversionResults] = useState<ConversionResult[]>([]);

    const conversionRates = {
        Tonelada: 1000000,
        Quilograma: 1000,
        Hectograma: 100,
        Decagrama: 10,
        Grama: 1,
        Decigrama: 0.1,
        Centigrama: 0.01,
        Miligrama: 0.001,
    };
    
    const convertUnits = (amount: number, fromUnit: UnitType) => {
        const baseAmountInGrams = amount * conversionRates[fromUnit];
        const results: ConversionResult[] = [];
    
        for (const [key, rate] of Object.entries(conversionRates)) {
            results.push({ unit: key as UnitType, value: baseAmountInGrams / rate });
        }
    
        return results;
    };

    const handleConvert = () => {
        if (!unit) {
            console.error("Selecione uma unidade de origem.");
            return;
        }
        
        const result = convertUnits(amount, unit);
        setConversionResults(result); // Atualiza os resultados para exibição
    };

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
                        <UnitToggle onSelected={setConversionType}/>
                    </div>
                    {conversionType && conversionType === "Massa" &&(
                        <>
                        <div className="flex gap-2 mt-5 mb-4 w-full">
                            <Input placeholder="Quantidade" className="w-[40%]" onChange={(e) => setAmount(Number(e.target.value))}/>
                            <Select onValueChange={(value) => setUnit(value as UnitType)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selcione uma unidade"/>
                                </SelectTrigger>
                                <SelectContent className="w-[60%]">
                                    <SelectGroup>
                                      <SelectLabel >Medidas de Massa</SelectLabel>
                                      <SelectItem value="Tonelada">Tonelada (T)</SelectItem>
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
                        <Button onClick={handleConvert} className="w-full">Transformar</Button>
                        {conversionResults.length > 0 && (
                            <ConversionTable conversionResults={conversionResults} selectedUnit={unit}/>
                        )}
                        </>
                    )}
                    {conversionType && conversionType === "Temperatura" && (
                        <div>
                            T
                        </div>
                    )}
                    {conversionType && conversionType === "Velocidade" && (
                        <div>
                            v
                        </div>
                    )}
                    {conversionType && conversionType === "Comprimento" && (
                        <div>
                            c
                        </div>
                    )}
                    {conversionType && conversionType === "Volume" && (
                        <div>
                            vo
                        </div>
                    )}
                    {conversionType && conversionType === "Tempo" && (
                        <div>
                            t
                        </div>
                    )}
                    {conversionType && conversionType === "Area" && (
                        <div>
                            a
                        </div>
                    )}

                </CardContent>
            </Card>
        </main>
     );
}