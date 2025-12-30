import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@rgba/ui/components'
export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="font-medium">Hello World</div>
      <Button>Click Me</Button>
    </div>
  )
}
