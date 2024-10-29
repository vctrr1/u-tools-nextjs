export function formatNumber (num: number, digits = 2){
    if(Number.isInteger(num)){
        return num.toString()
    }
    return num.toLocaleString('pt-BR', {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    })
}