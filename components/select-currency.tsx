import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel
} from "@/components/ui/select"
import { currencies, popularCurrencies } from "@/constants/corrency-codes"

export function SelectCurrency() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Principais Moedas</SelectLabel>
          {popularCurrencies.map((item) => 
            <SelectItem value={item.code} key={item.code}>
              {item.country} ({item.code})
            </SelectItem>
          )}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Outras</SelectLabel>
          {currencies.map((item) => 
            <SelectItem value={item.code} key={item.code}>
              {item.country} ({item.code})
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
