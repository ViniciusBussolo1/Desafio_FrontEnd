import { Aside } from './Aside/Aside'
import { ItemsOverview } from './ItemsOverview/ItemsOverview'

export function Main() {
  return (
    <main className="h-[calc(100vh-7rem)] flex">
      <Aside />
      <section className="flex-1 pt-7 px-6">
        <div className="flex items-center gap-3">
          <div className="h-5 w-1 bg-blue-600 "></div>
          <h1 className="font-semibold text-lg">Visão Geral</h1>
        </div>
        <div className="w-[1350px] mt-8 flex justify-between items-center pl-5">
          <ItemsOverview title="Total de Clientes" result="7" />
          <ItemsOverview title="Clientes inadimplentes" result="4" />
          <ItemsOverview title="Clientes adimplentes" result="3" />
          <ItemsOverview title="Total arrecadado" result="R$ 2.856,93" />
        </div>
      </section>
    </main>
  )
}
