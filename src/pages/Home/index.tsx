import { useEffect, useState, useContext } from 'react'
import { MetaContext } from '../../contexts/MetaContext'

export default function Home() {
    const [valorInput, setValorInput] = useState<string>('');
    const { setMontante, setHasMontante } = useContext(MetaContext)

    return (
        <>
            <main className="flex flex-col items-center justify-center gap-16 min-w-full min-h-screen bg-black text-white">
                <h1 className="text-5xl font-bold">Economizze</h1>
                <div className="flex flex-col gap-5">
                    <input id="valor" className="bg-black outline-none border-2 border-white rounded-md p-3 font-bold text-lg text-center" type="number" value={valorInput} placeholder="INSIRA UM VALOR" onChange={(e) => setValorInput(e.target?.value)} />
                    <button className="bg-white rounded-md p-4 font-bold text-lg text-black" onClick={() => {
                        if (Number(valorInput) > 0) {
                            setMontante(Number(valorInput))
                            setHasMontante(true)
                            setValorInput('');
                        }
                    }}>DEFINIR META</button>
                </div>
            </main>
        </>
    );
}
