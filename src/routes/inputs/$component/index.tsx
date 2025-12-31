import { notFound } from '@tanstack/react-router'
import Playground from '../../../components/playground'

async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>
}) {
  const { component } = await params

  try {
    if (!component) return notFound()
    return <Playground slug={component} />
  } catch (error) {
    console.error('Error fetching component data:', error)
    return notFound()
  }
}

export default ComponentPage
