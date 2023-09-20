import Image from 'next/image'

import Avatar from '@/assets/avatar-admin.png'

export function Table() {
  return (
    <table className="w-full mt-2 ml-5 border-separate border-spacing-y-11">
      <tbody>
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
      </tbody>
    </table>
  )
}
