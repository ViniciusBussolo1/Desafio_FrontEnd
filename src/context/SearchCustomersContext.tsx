import supabase from '@/services/supabase'
import { createContext, ReactNode, useState } from 'react'

interface Customers {
  created_at: string
  email: string | null
  id: string
  name: string | null
  phone: string | null
  status: string | null
  subscription_amount: number | null
}

interface SearchBlocosContextDataProps {
  fetchCustomers: (searchValue: string) => void
  results: Array<Customers> | null
  loading: boolean
}

interface SearchBlocosContextProvidersProps {
  children: ReactNode
}

export const SearchBlocosContext = createContext(
  {} as SearchBlocosContextDataProps,
)

export function SearchBlocosContextProvider({
  children,
}: SearchBlocosContextProvidersProps) {
  const [results, setResults] = useState<Array<Customers> | null>([])
  const [loading, setLoading] = useState(false)

  const fetchCustomers = async (searchValue: string) => {
    setLoading(true)

    const { data } = await supabase
      .from('Customers')
      .select('*')
      .ilike('name', `%${searchValue}%`)

    setLoading(false)

    setResults(data)
  }

  return (
    <SearchBlocosContext.Provider value={{ results, fetchCustomers, loading }}>
      {children}
    </SearchBlocosContext.Provider>
  )
}
