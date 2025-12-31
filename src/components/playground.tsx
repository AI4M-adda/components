import React, { useEffect, useState } from 'react'

type Props = {
  slug: string
}

export default function Playground({ slug }: Props) {
  const [Comp, setComp] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    let mounted = true

    import(`./example/${slug}/playground.tsx`)
      .then((mod) => {
        if (!mounted) return
        if (mod && mod.default)
          setComp(() => mod.default as React.ComponentType<any>)
        else setComp(() => () => null)
      })
      .catch((err) => {
        console.error('Failed to load playground', err)
        if (mounted) setComp(() => () => null)
      })

    return () => {
      mounted = false
    }
  }, [slug])

  if (!Comp) return <div>Loading component...</div>

  return <Comp slug={slug} />
}
