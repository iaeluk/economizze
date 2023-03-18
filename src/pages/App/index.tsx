import { useEffect, useState, useContext } from 'react'
import { MetaContext } from '../../contexts/MetaContext'

export default function Home() {
    const [valorInput, setValorInput] = useState<string>('');

    const { montante, setMontante, setHasMontante } = useContext(MetaContext)

    return (
        <>
            <main className="flex flex-col items-center justify-center gap-16 min-w-full min-h-screen bg-black text-white">
                <button className="absolute top-2 right-2" onClick={() => {
                    setHasMontante(false)
                }}>MUDAR META</button>
                <h1 className="text-5xl font-bold">R${montante >= 0 ? montante.toFixed(2).replace(".", ",") : Number(0).toFixed(2).replace(".", ",")}</h1>
                <div className="flex flex-col gap-3">
                    <input id="valor" className="bg-black outline-none border-2 border-white rounded-md p-3 font-bold text-lg text-center" type="number" value={valorInput} placeholder="INSIRA UM VALOR" onChange={(e) => setValorInput(e.target?.value)} />
                    <button className="bg-green-600 hover:bg-green-500 rounded-md p-4 font-bold text-lg" onClick={() => {
                        const value = valorInput ? Number(valorInput) : 0;
                        setMontante((prevMontante) => prevMontante - value);
                        setValorInput('');
                    }}>INVESTIR</button>
                </div>
            </main>
        </>
    );
}
