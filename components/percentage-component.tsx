import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

interface PercentageComponentProps {
    label1: string;
    label2: string;
}

export default function PercentageComponent({label1, label2}:PercentageComponentProps) {
    return (
        <Card className="w-full">
            <CardContent className="p-3">
                <div className="flex flex-col p-3">
                    <div>
                        <label className="whitespace-nowrap text-lg">{label1}</label>
                        <Input/>
                    </div>
                    <div>
                        <label className="text-lg">{label2}</label>
                        <Input/>
                    </div>
                    <div className="flex-1">
                        <label className="text-lg">Resultado</label>
                        <div className="min-w-[70px] w-full h-10 border rounded-md">

                        </div>
                        <Button className="w-full mt-4">Calcular</Button>
                        <Button className="w-full mt-2" variant="outline">Limpar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}