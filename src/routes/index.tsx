import { Button } from '@rgba/ui/components/button'
import { H4 } from '@rgba/ui/components/typography'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <H4>Hello World</H4>
      <Button>Click Me</Button>
    </div>
  )
}
