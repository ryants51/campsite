import { createFileRoute } from '@tanstack/react-router'
import { Moon, Mountains, StarField, Tree } from '@/components'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="relative">
      <Moon />
      <StarField />
      <Mountains />
      <Tree />
    </div>
  )
}
