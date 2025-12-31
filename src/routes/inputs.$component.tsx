import Playground from '@components/components/playground'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/inputs/$component')({
  component: RouteComponent,
})

function RouteComponent() {
  const { component } = Route.useParams()

  try {
    if (!component) return notFound()
    return <Playground slug={component} />
  } catch (error) {
    console.error('Error fetching component data:', error)
    return notFound()
  }
}
