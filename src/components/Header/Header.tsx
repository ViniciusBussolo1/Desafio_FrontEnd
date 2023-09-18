import Image from 'next/image'

import Logo from '@/assets/Logo-Nexaas.png'
import Shape from '@/assets/Shape.png'
import Notification from '@/assets/Notification.png'
import Avatar from '@/assets/avatar-admin.png'
import Arrow from '@/assets/Arrow.png'

export function Header() {
  return (
    <header className="w-full h-28 flex items-center px-6 gap-12 border-b border-gray-400">
      <Image src={Logo} alt="Logo Nexaas" />

      <div className="w-[1px] h-full bg-gray-400"></div>

      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image src={Shape} alt="Icon Shape" className="cursor-pointer" />
          <input
            type="text"
            placeholder="Busque por clientes"
            className="px-1 py-1 outline-blue-600"
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
