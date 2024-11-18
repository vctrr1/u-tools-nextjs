"use client"

import MassConversionComp from "@/components/mass-conversion-comp";
import TemperatureConversionComp from "@/components/temperature-conversion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UnitToggle } from "@/components/unit-toggle";
import { useState } from "react";

export default function Conversao() {

    const [conversionType, setConversionType] = useState("");


    return (
        <main className="flex w-full justify-center">
            <Card className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] mt-5 mb-5">
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
                        <MassConversionComp/>
                    )}
                    {conversionType && conversionType === "Temperatura" && (
                        <TemperatureConversionComp/>
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