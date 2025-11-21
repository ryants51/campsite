import { Tree } from './Tree'

export function Forest() {
  return (
    <>
      {/* LEFT — Always visible (2 trees) */}
      {/* Always visible (2 trees) */}
      <div className="absolute z-[12] h-[62dvh] w-auto left-[-12vw] bottom-6">
        <Tree />
      </div>
      <div className="absolute z-[11] h-[54dvh] w-auto left-[0vw] bottom-12">
        <Tree />
      </div>
      <div className="hidden sm:block  absolute z-[11] h-[50dvh] left-[5vw] bottom-20">
        <Tree />
      </div>

      {/* LEFT — Show at >=800px (md) */}
      <div className="hidden md:block absolute left-[8vw] bottom-34 h-[45dvh] z-[10]">
        <Tree />
      </div>

      <div className="hidden md:block absolute left-[15.5vw] bottom-6 h-[64dvh] z-[13]">
        <Tree />
      </div>

      {/* LEFT — Show at >=1300px (xl) */}
      <div className="hidden xl:block absolute left-[22vw] bottom-12 h-[52dvh] z-[12]">
        <Tree />
      </div>

      {/* RIGHT — Always visible (2 trees) */}
      <div className="absolute left-[79vw] bottom-8 h-[62dvh] z-[13]">
        <Tree />
      </div>

      <div className="absolute left-[85vw] bottom-38 h-[40dvh] z-[11]">
        <Tree />
      </div>

      {/* RIGHT — Show at >=800px (md) */}
      <div className="hidden md:block absolute left-[88vw] bottom-10 h-[58dvh] z-[12]">
        <Tree />
      </div>

      <div className="hidden md:block absolute left-[94vw] bottom-28 h-[60dvh] z-[13]">
        <Tree />
      </div>

      {/* RIGHT — Show at >=1300px (xl) */}
      <div className="hidden xl:block absolute left-[73vw] bottom-27 h-[45dvh] z-[11]">
        <Tree />
      </div>
    </>
  )
}
