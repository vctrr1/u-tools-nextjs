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
                    <div className="flex flex-col items-center space-y-2 pb-5">
                        <Input/>
                        <ArrowDownUp size={18} strokeWidth={1.25}/>
                        <Input/>
                    </div>
                    <Button className="w-full">Converter</Button>
                </CardContent>
            </Card>
        </main>
     );
}

export default Currency;