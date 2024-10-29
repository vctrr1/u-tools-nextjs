import PercentageComponent from "@/components/percentage-component";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function Imc() {
    return ( 
        <main className="flex flex-col w-full h-[100%] mb-6 items-center">
            <CardHeader className="text-center">
                <CardTitle >
                    Calculadora de porcentagem 
                </CardTitle>
                <CardDescription className="">
                    Permite calcular porcentagem de várias formas, aumentos, descontos, proporções, etc. 
                </CardDescription>
            </CardHeader>
            <div className="space-y-5 w-[85%]">
                <PercentageComponent label1="Quanto é:" label2="de:"/>
                <PercentageComponent label1="O valor:" label2="é qual porcentagem de:"/>
                <PercentageComponent label1="Um valor de:" label2="Que AUMENTOU para:"/>
                <PercentageComponent label1="Um valor de:" label2="que DIMINUIU para:"/>
            </div>
        </main>
     );
}

export default Imc;