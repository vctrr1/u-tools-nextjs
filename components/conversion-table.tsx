import { formatNumber } from "@/lib/format-number";

type UnitType = "Tonelada" | "Quilograma" | "Hectograma" | "Decagrama" | "Grama" | "Decigrama" | "Centigrama" | "Miligrama";
type ConversionResult = { unit: UnitType; value: number };

type ConversionTableProps = {
    conversionResults: ConversionResult[];
    selectedUnit: UnitType | undefined;
};

function ConversionTable({conversionResults ,selectedUnit}: ConversionTableProps) {
    return (
        <div className="mt-5 w-full">
            <div className="flex justify-between text-lg mb-2 text-rose-300">
                <h1>Unidade de Medida</h1>
                <h1>Valor</h1>
            </div>
            <table className="w-full text-lg">
                <tbody className="w-full">
                    {conversionResults.map((result: ConversionResult) => (
                        <tr className="border-b w-full" key={result.unit}>
                            <td className={`${result.unit === selectedUnit ? "text-rose-300" : ""} flex justify-between w-full`}>
                                <span>{result.unit}</span>
                                <span>{formatNumber(result.value)}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ConversionTable;