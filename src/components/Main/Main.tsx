'use client'

import { Aside } from './Aside/Aside'
import { ItemsOverview } from './ItemsOverview/ItemsOverview'
import { Table } from './Table/Table'
import { useQueries } from '@tanstack/react-query'

import supabase from '@/services/supabase'

export function Main() {
  const getCustomers = async () => {
    const { data } = await supabase.from('Customers').select('*')

    return data
  }

  const getCountStatusPaying = async () => {
    const { data } = await supabase
      .from('Customers')
      .select('status')
      .eq('status', 'paying')

    return data
  }

  const getCountStatusOverdue = async () => {
    const { data } = await supabase
      .from('Customers')
      .select('status')
      .eq('status', 'overdue')

    return data
  }

  const getTotalSubscriptionAmount = async () => {
    const { data } = await supabase
      .from('Customers')
      .select('subscription_amount')

    const totalAmount = data?.reduce((total, item) => {
      if (item.subscription_amount !== null) {
        return total + item.subscription_amount
      }

      return total
    }, 0)

    const totalFixed = totalAmount?.toFixed(2)

    return totalFixed
  }

  const [
    customersQuery,
    statusPayingQuery,
    statusOverdueQuery,
    totalSubscriptionAmountQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ['customers'],
        queryFn: getCustomers,
      },
      {
        queryKey: ['statusPaying'],
        queryFn: getCountStatusPaying,
      },
      {
        queryKey: ['statusOverdue'],
        queryFn: getCountStatusOverdue,
      },
      {
        queryKey: ['totalSubscriptionAmount'],
        queryFn: getTotalSubscriptionAmount,
      },
    ],
  })

  return (
    <main className="h-[calc(100vh-7rem)] flex">
      <Aside />
      <section className="flex-1 pt-7 px-6">
        <div className="flex items-center gap-3">
          <div className="h-5 w-1 bg-blue-600 "></div>
          <h1 className="font-semibold text-lg">Visão Geral</h1>
        </div>
        <div className="max-w-[84.375rem] w-full mt-8 flex justify-between items-center pl-5 ">
          <ItemsOverview
            title="Total de Clientes"
            result={customersQuery.data?.length}
          />
          <ItemsOverview
            title="Clientes inadimplentes"
            result={statusPayingQuery.data?.length}
          />
          <ItemsOverview
            title="Clientes adimplentes"
            result={statusOverdueQuery.data?.length}
          />
          <ItemsOverview
            title="Total arrecadado"
            result={`R$ ${totalSubscriptionAmountQuery.data}`}
          />
        </div>

        <div className="flex items-center gap-3 mt-20">
          <div className="h-5 w-1 bg-blue-600 "></div>
          <h1 className="font-semibold text-lg">Clientes Cadastrados</h1>
        </div>
        <Table />
      </section>
    </main>
  )
}
