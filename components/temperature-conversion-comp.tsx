import TemperatureConversionTable from "@/components/temperature-conversion-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type TemperatureType = "Celsius" | "Fahrenheit" | "Kelvin";
type ConversionResultTemp = { unit: TemperatureType; value: number };

function TemperatureConversionComp() {
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState<TemperatureType | undefined>(undefined);
  const [conversionResults, setConversionResults] = useState<
    ConversionResultTemp[]
  >([]);

  const conversionRatesTemperature = {
    Celsius: 1,
    Fahrenheit: 1.8,
    Kelvin: 1, // Usamos a mesma base para Kelvin, mas precisamos ajustar a conversão
  };

  const convertUnits = (amount: number, fromUnit: TemperatureType) => {
    let baseAmountInCelsius;

    // Converter a entrada para Celsius
    if (fromUnit === "Celsius") {
      baseAmountInCelsius = amount;
    } else if (fromUnit === "Fahrenheit") {
      baseAmountInCelsius =
        (amount - 32) / conversionRatesTemperature.Fahrenheit;
    } else if (fromUnit === "Kelvin") {
      baseAmountInCelsius = amount - 273.15;
    } else {
      throw new Error("Unidade de temperatura não reconhecida");
    }

    const results: ConversionResultTemp[] = [];

    // Calcular a conversão para todas as unidades
    for (const [key, rate] of Object.entries(conversionRatesTemperature)) {
      if (key === "Fahrenheit") {
        results.push({
          unit: key as TemperatureType,
          value: baseAmountInCelsius * rate + 32,
        });
      } else if (key === "Kelvin") {
        results.push({
          unit: key as TemperatureType,
          value: baseAmountInCelsius + 273.15,
        });
      } else {
        results.push({
          unit: key as TemperatureType,
          value: baseAmountInCelsius,
        });
      }
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
        <Input
          placeholder="Valor"
          className="w-[40%]"
          onChange={(e) => {
            const value = e.target.value.replace(",", ".");
            const numericValue = Number(value);
            // Verifique se o valor é um número válido
            if (!isNaN(numericValue)) {
              setAmount(numericValue);
            } else {
              // Se não for um número válido, você pode definir amount como 0 ou deixar como está
              setAmount(0);
            }
          }}
        />
        <Select onValueChange={(value) => setUnit(value as TemperatureType)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma escala" />
          </SelectTrigger>
          <SelectContent className="w-[60%]">
            <SelectGroup>
              <SelectLabel>Escalas de Temperatura</SelectLabel>
              <SelectItem value="Celsius">Celsius (°C)</SelectItem>
              <SelectItem value="Fahrenheit">Fahrenheit (°F)</SelectItem>
              <SelectItem value="Kelvin">Kelvin (K)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleConvert} className="w-full">
        Transformar
      </Button>
      {conversionResults.length > 0 && (
        <TemperatureConversionTable
          conversionResults={conversionResults}
          selectedUnit={unit}
        />
      )}
    </>
  );
}

export default TemperatureConversionComp;
