"use server"

import axios from "axios";

export default async function CurrencyConversion(currencyBase: string, currencyTarget: string): Promise<number | null> {
    const apiKey = process.env.CURRENCY_API_KEY; // Use a variável de ambiente sem NEXT_PUBLIC_

    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${currencyBase}/${currencyTarget}`);
        const conversionRate = response.data.conversion_rate;
        return conversionRate; // Retorne apenas a taxa de conversão
    } catch (error) {
        console.error("Erro ao buscar câmbio:", error);
        return null
    }
}
