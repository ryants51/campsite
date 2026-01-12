import { createFileRoute } from '@tanstack/react-router'
import {
  Moon,
  StarField,
  Forest,
  Mountains,
  Tent,
  Campfire,
  Sign,
} from '@/components'

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
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
        <div className="relative w-full max-w-[600px] ">
          <Tent />
          <Campfire />
          <Sign />
        </div>
      </div>
    </div>
  )
}
