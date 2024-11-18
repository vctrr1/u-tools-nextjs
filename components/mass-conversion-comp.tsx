import ConversionTable from "@/components/conversion-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectItem, SelectLabel, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

type UnitType = "Tonelada" | "Quilograma" | "Hectograma" | "Decagrama" | "Grama" | "Decigrama" | "Centigrama" | "Miligrama";
type ConversionResult = { unit: UnitType; value: number };

function MassConversionComp() {

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
        <>
        <div className="flex gap-2 mt-5 mb-4 w-full">
            <Input placeholder="Quantidade" className="w-[40%]" onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                const numericValue = Number(value);
                // Verifique se o valor é um número válido
                if (!isNaN(numericValue)) {
                    setAmount(numericValue);
                } else {
                    // Se não for um número válido, você pode definir amount como 0 ou deixar como está
                    setAmount(0);
                }
            }}/>
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
    );
}

export default MassConversionComp;