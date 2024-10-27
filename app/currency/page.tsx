import { SelectCurrency } from "@/components/select-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowDownUp } from 'lucide-react';

function Currency() {
    return ( 
        <main className="flex w-full h-[100%] items-center justify-center">
            <Card className="w-[90%]">
                <CardHeader className="text-center text-lg">
                    Faça sua conversão
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-3 pb-5">
                        <div className="flex space-x-2 w-full">
                            <SelectCurrency/>
                            <Input/>
                        </div>
                        <ArrowDownUp size={18} strokeWidth={1.25}/>
                        <div className="flex space-x-2 w-full">
                            <SelectCurrency/>
                            <Input/>
                        </div>
                    </div>
                    <Button className="w-full">Converter</Button>
                </CardContent>
            </Card>
        </main>
     );
}

export default Currency;