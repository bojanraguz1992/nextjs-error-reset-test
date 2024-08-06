'use client'

import { useRouter } from 'next/navigation'
import { startTransition, useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();

  function refreshAndReset() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }


  useEffect(() => {
    // TODO log error to error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={refreshAndReset}>Try again</button>
    </div>
  )
}
