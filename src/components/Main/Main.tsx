import Image from 'next/image'

import { Aside } from './Aside/Aside'
import { ItemsOverview } from './ItemsOverview/ItemsOverview'

import Avatar from '@/assets/avatar-admin.png'

export function Main() {
  return (
    <main className="h-[calc(100vh-7rem)] flex">
      <Aside />
      <section className="flex-1 pt-7 px-6">
        <div className="flex items-center gap-3">
          <div className="h-5 w-1 bg-blue-600 "></div>
          <h1 className="font-semibold text-lg">Visão Geral</h1>
        </div>
        <div className="max-w-[84.375rem] w-full mt-8 flex justify-between items-center pl-5 ">
          <ItemsOverview title="Total de Clientes" result="7" />
          <ItemsOverview title="Clientes inadimplentes" result="4" />
          <ItemsOverview title="Clientes adimplentes" result="3" />
          <ItemsOverview title="Total arrecadado" result="R$ 2.856,93" />
        </div>

        <div className="flex items-center gap-3 mt-20">
          <div className="h-5 w-1 bg-blue-600 "></div>
          <h1 className="font-semibold text-lg">Clientes Cadastrados</h1>
        </div>
        <table className="w-full mt-2 ml-5 border-separate border-spacing-y-11">
          <tr>
            <td>
              <Image src={Avatar} alt="Icon Avatar" />
            </td>
            <td>Márcio Braga</td>
            <td>marcio.braga@minhaempresa.com</td>
            <td>(21) 98987-7650</td>
            <td>adimpente</td>
          </tr>
          <tr>
            <td>
              <Image src={Avatar} alt="Icon Avatar" />
            </td>
            <td>Márcio Braga</td>
            <td>marcio.braga@minhaempresa.com</td>
            <td>(21) 98987-7650</td>
            <td>adimpente</td>
          </tr>
        </table>
      </section>
    </main>
  )
}
