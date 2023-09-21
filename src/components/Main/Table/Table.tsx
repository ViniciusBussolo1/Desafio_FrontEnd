'use client'
import Image from 'next/image'

import Avatar from '@/assets/avatar-admin.png'
import supabase from '@/services/supabase'

import { useEffect, useState } from 'react'

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
      <table className="w-full mt-2 ml-5 border-separate border-spacing-y-11">
        <tbody>
          {customers?.map((item) => {
            return (
              <tr key={item.id}>
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
        </tbody>
      </table>
      <div className="flex justify-end gap-4 bg-emerald-600">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="text-red-500"
        >
          Previous Page
        </button>
        <button onClick={() => setPage(page + 1)} className="text-blue-400">
          Next Page
        </button>
      </div>
    </>
  )
}
