import { createFileRoute } from '@tanstack/react-router'
import { Moon, StarField, Forest, Mountains } from '@/components'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Moon />
      <StarField />
      <Mountains />
      <Forest />
    </div>
  )
}
