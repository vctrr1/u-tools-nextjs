import { Weight, Thermometer, Gauge, Ruler, Box, Timer, Scan} from 'lucide-react';

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

interface UnitToggleProps {
  onSelected: (value: string) => void;
}

export function UnitToggle({onSelected}: UnitToggleProps) {
  return (
    <ToggleGroup size={"lg"} className="flex flex-wrap gap-2" type="single" onValueChange={onSelected}>
      <ToggleGroupItem value="Massa" aria-label="Toggle bold" className='flex flex-col pl-2 pr-2'>
        <Weight className="h-6 w-6" />
        Massa
      </ToggleGroupItem>
      <ToggleGroupItem value="Temperatura" aria-label="Temperatura" className='flex flex-col pl-2 pr-2 h-14'>
        <Thermometer className="h-6 w-6" />
        Temperatura
      </ToggleGroupItem>
      <ToggleGroupItem value="Velocidade" aria-label="Velocidade" className='flex flex-col pl-2 pr-2 h-14'>
        <Gauge className="h-6 w-6" />
        Velocidade
      </ToggleGroupItem>
      <ToggleGroupItem value="Comprimento" aria-label="Comprimento" className='flex flex-col pl-2 pr-2 h-14'>
        <Ruler className="h-6 w-6" />
        Comprimento
      </ToggleGroupItem>
      <ToggleGroupItem value="Volume" aria-label="Volume"className='flex flex-col pl-2 pr-2 h-14'>
        <Box className="h-6 w-6" />
        Volume
      </ToggleGroupItem>
      <ToggleGroupItem value="Tempo" aria-label="Tempo" className='flex flex-col pl-2 pr-2 h-14'>
        <Timer className="h-6 w-6" />
        Tempo
      </ToggleGroupItem>
      <ToggleGroupItem value="Area" aria-label="Area" className='flex flex-col pl-2 pr-2 h-14'>
        <Scan className="h-6 w-6" />
        Área
      </ToggleGroupItem>
      
    </ToggleGroup>
  )
}
