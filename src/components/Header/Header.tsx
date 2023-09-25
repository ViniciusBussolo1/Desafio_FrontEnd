'use client'
import Image from 'next/image'

import Logo from '@/assets/Logo-Nexaas.png'
import Shape from '@/assets/Shape.png'
import Notification from '@/assets/Notification.png'
import Avatar from '@/assets/avatar-admin.png'
import Arrow from '@/assets/Arrow.png'

import { useState, useEffect, ChangeEvent, useContext } from 'react'
import { useDebounce } from 'usehooks-ts'
import { SearchBlocosContext } from '@/context/SearchCustomersContext'

interface Customers {
  created_at: string
  email: string | null
  id: string
  name: string | null
  phone: string | null
  status: string | null
  subscription_amount: number | null
}

export function Header() {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce<string>(inputValue, 500)

  const { fetchCustomers } = useContext(SearchBlocosContext)

  const handleSearchUser = async (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    const searchCustomers = async () => {
      await fetchCustomers(debouncedValue)
    }

    searchCustomers()
  }, [debouncedValue])

  return (
    <header className="w-full h-28 flex items-center px-6 gap-12 border-b border-gray-400">
      <Image src={Logo} alt="Logo Nexaas" />

      <div className="w-[1px] h-full bg-gray-400"></div>

      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image src={Shape} alt="Icon Shape" className="cursor-pointer" />
          <input
            type="search"
            placeholder="Busque por clientes"
            className="max-w-[20rem] w-full px-1 py-1 outline-blue-600"
            value={inputValue}
            onChange={handleSearchUser}
          />
        </div>
        <div className="flex items-center gap-20">
          <Image
            src={Notification}
            alt="Icon Notification"
            className="cursor-pointer"
          />
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={Avatar} alt="Icon Avatar" />
            <Image src={Arrow} alt="Icon Arrow" />
          </div>
        </div>
      </div>
    </header>
  )
}
