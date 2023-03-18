'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [montante, setMontante] = useState(Number);
  const [valorInput, setValorInput] = useState<string | undefined>(undefined);


  useEffect(() => {
    const montante = localStorage.getItem("montante");
    setMontante(montante ? JSON.parse(montante) : 50000);
  }, []);

  useEffect(() => {
    montante < 0 ? localStorage.setItem("montante", JSON.stringify(0)) : localStorage.setItem("montante", JSON.stringify(montante))
  }, [montante]);

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-16 min-w-full min-h-[90%] bg-black text-white">
        <button className="absolute top-2 right-2" onClick={() => setMontante(50000)}>REDEFINIR</button>
        <h1 className="text-5xl font-bold">R${montante >= 0 ? (montante.toFixed(2)).replace(".", ",") : Number(0).toFixed(2).replace(".", ",")}</h1>

        <div className="flex flex-col gap-3">
          <input id="valor" className="bg-black outline-none border-2 border-white rounded-md p-3 font-bold text-lg text-center" type="number" value={valorInput} onChange={(e) => setValorInput(e.target?.value)} />
          <button className="bg-green-700 rounded-md p-4" onClick={() => setMontante(valorInput ? montante - Number(valorInput) : montante)}>INVESTIR NO FUTURO</button>
        </div>
      </main>
    </>
  )
}
