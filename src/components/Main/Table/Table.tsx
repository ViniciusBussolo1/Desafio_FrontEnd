'use client'

import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

import Avatar from '@/assets/avatar-admin.png'
import supabase from '@/services/supabase'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SearchBlocosContext } from '@/context/SearchCustomersContext'

import Spinner from '@/assets/Spinner.png'

interface Customers {
  created_at: string
  email: string | null
  id: string
  name: string | null
  phone: string | null
  status: string | null
  subscription_amount: number | null
}

export function Table() {
  const [customers, setCustomers] = useState<Array<Customers> | null>([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(5)

  const { results, loading } = useContext(SearchBlocosContext)

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data } = await supabase
        .from('Customers')
        .select('*')
        .range((page - 1) * perPage, page * perPage - 1)

      setCustomers(data)
    }

    fetchCustomers()
  }, [page, perPage])

  return (
    <>
      <div className="h-[37.5rem] overflow-x-hidden flex flex-col justify-between w-full pb-6 pt-9">
        {loading === true ? (
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex items-center gap-3">
              <Image
                src={Spinner}
                alt="Image Spinner"
                className={`rotate-animation`}
              />
              <h1 className="text-gray-700 text-lg">BUSCANDO...</h1>
            </div>
          </div>
        ) : (
          <table className="max-h-[33.688rem] w-full ml-5 ">
            <tbody className="divide-y-[50px]">
              {results?.length !== 8 ? (
                <>
                  {results?.length === 0 ? (
                    <tr>
                      <td>Nao Foi encontrado nenhum cliente</td>
                    </tr>
                  ) : (
                    <>
                      {results?.map((item) => {
                        return (
                          <tr key={item.id} className="">
                            <td>
                              <Image src={Avatar} alt="Icon Avatar" />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            {item.status === 'paying' ? (
                              <td>Adimpente</td>
                            ) : (
                              <td className="text-red-500">Inadimplente</td>
                            )}
                          </tr>
                        )
                      })}
                    </>
                  )}
                </>
              ) : (
                <>
                  {customers?.map((item) => {
                    return (
                      <tr key={item.id} className="">
                        <td>
                          <Image src={Avatar} alt="Icon Avatar" />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        {item.status === 'paying' ? (
                          <td>Adimpente</td>
                        ) : (
                          <td className="text-red-500">Inadimplente</td>
                        )}
                      </tr>
                    )
                  })}
                </>
              )}
            </tbody>
          </table>
        )}
        <div className="flex justify-end gap-4 pr-11">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            <ChevronLeft />
          </button>
          <button onClick={() => setPage(page + 1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}
