export const dynamic = 'force-dynamic'

export default function Page() {
  const randomValue = Math.random()
  console.log(randomValue)

  if (randomValue > 0.5) throw new Error('Boom!')

  return <p>All good</p>
}
