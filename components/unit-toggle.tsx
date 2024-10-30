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
      <ToggleGroupItem value="Massa" aria-label="Toggle bold" className='flex flex-col pl-3 pr-3'>
        <Weight className="h-6 w-6" />
        Massa
      </ToggleGroupItem>
      <ToggleGroupItem value="Temperatura" aria-label="Toggle italic" className='flex flex-col pl-3 pr-3'>
        <Thermometer className="h-6 w-6" />
        Temperatura
      </ToggleGroupItem>
      <ToggleGroupItem value="Velocidade" aria-label="Toggle underline" className='flex flex-col pl-3 pr-3'>
        <Gauge className="h-6 w-6" />
        Velocidade
      </ToggleGroupItem>
      <ToggleGroupItem value="Comprimento" aria-label="Toggle underline" className='flex flex-col pl-3 pr-3'>
        <Ruler className="h-6 w-6" />
        Comprimento
      </ToggleGroupItem>
      <ToggleGroupItem value="Volume" aria-label="Toggle underline"className='flex flex-col pl-3 pr-3'>
        <Box className="h-6 w-6" />
        Volume
      </ToggleGroupItem>
      <ToggleGroupItem value="Tempo" aria-label="Toggle underline" className='flex flex-col pl-3 pr-3'>
        <Timer className="h-6 w-6" />
        Tempo
      </ToggleGroupItem>
      <ToggleGroupItem value="Area" aria-label="Toggle underline" className='flex flex-col pl-3 pr-3'>
        <Scan className="h-6 w-6" />
        Area
      </ToggleGroupItem>
      
    </ToggleGroup>
  )
}
