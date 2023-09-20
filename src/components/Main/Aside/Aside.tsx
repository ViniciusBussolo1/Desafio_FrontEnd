'use client'

import Image from 'next/image'

import IconPainel from '@/assets/icon-1.png'
import IconConfig from '@/assets/icon-2.png'
import { useState } from 'react'

const itemsMenu = [
  {
    name: 'Painel',
    icon: IconPainel,
  },
  {
    name: 'Configurações',
    icon: IconConfig,
  },
]

export function Aside() {
  const [itemsMenuSelected, setItemMenuSelected] = useState<number | null>(null)

  return (
    <aside className="h-full max-w-[15.5rem] w-full border-r border-gray-400">
      <div>
        {itemsMenu.map((item, index) => {
          return (
            <div key={index}>
              {itemsMenuSelected === index ? (
                <div
                  className="h-14 flex items-center gap-5 cursor-pointer hover:bg-blue-300 hover:font-semibold"
                  onClick={() => setItemMenuSelected(index)}
                >
                  <div className="h-full w-1 bg-blue-600"></div>
                  <div className="flex items-center gap-3">
                    <Image src={item.icon} alt={`Icon ${item.name}`} />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                </div>
              ) : (
                <div
                  className="h-14 flex items-center pl-6 cursor-pointer hover:bg-blue-300 hover:font-semibold"
                  onClick={() => setItemMenuSelected(index)}
                >
                  <div className="flex items-center gap-3">
                    <Image src={item.icon} alt={`Icon ${item.name}`} />
                    <span>{item.name}</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
