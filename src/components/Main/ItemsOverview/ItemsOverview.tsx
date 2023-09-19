interface itemsOverviewProps {
  title: string
  result: string
}

export function ItemsOverview({ title, result }: itemsOverviewProps) {
  return (
    <div className="flex flex-col justify-center ">
      <span className="text-lg">{title}</span>
      <span className="text-blue-600 font-semibold text-xl">{result}</span>
    </div>
  )
}
