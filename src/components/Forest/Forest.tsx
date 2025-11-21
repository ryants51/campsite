import { Tree } from './Tree'

function Forest() {
  return (
    <>
      <div className="absolute z-[12] h-[62dvh] w-auto left-[-6vw] bottom-6">
        <Tree />
      </div>
      <div className="absolute z-[11] h-[54dvh] w-auto left-[3vw] bottom-12">
        <Tree />
      </div>
      <div className="absolute z-[10] h-[45dvh] w-auto left-[8vw] bottom-34">
        <Tree />
      </div>
      <div className="absolute z-[13] h-[64dvh] w-auto left-[15.5vw] bottom-6">
        <Tree />
      </div>
      <div className="absolute z-[12] h-[52dvh] w-auto left-[22vw] bottom-12">
        <Tree />
      </div>
      <div className="absolute z-[11] h-[50dvh] w-auto left-[27vw] bottom-27">
        <Tree />
      </div>

      {/* right trees */}
      <div className="absolute z-[11] h-[54dvh] w-auto left-[67vw] bottom-12">
        <Tree />
      </div>
      <div className="absolute z-[10] h-[45dvh] w-auto left-[73vw] bottom-27">
        <Tree />
      </div>
      <div className="absolute z-[13] h-[62dvh] w-auto left-[79vw] bottom-8">
        <Tree />
      </div>
      <div className="absolute z-[11] h-[40dvh] w-auto left-[85vw] bottom-38">
        <Tree />
      </div>
      <div className="absolute z-[12] h-[58dvh] w-auto left-[88vw] bottom-10">
        <Tree />
      </div>
      <div className="absolute z-[13] h-[60dvh] w-auto left-[94vw] bottom-28">
        <Tree />
      </div>
    </>
  )
}

export { Forest }
