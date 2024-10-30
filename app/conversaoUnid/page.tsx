"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UnitToggle } from "@/components/unit-toggle";
import { useState } from "react";

export default function Conversao() {

    const [unit, setUnit] = useState("")

    return (
        <main className="flex w-full h-[100%] items-center justify-center">
            <Card className="w-[90%]">
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
                    <div>
                        {unit && (unit)}
                    </div>
                </CardContent>
            </Card>
        </main>
     );
}

