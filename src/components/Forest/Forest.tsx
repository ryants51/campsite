import { Tree } from './Tree'
import styles from './Forest.module.css'

export function Forest() {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-visible ${styles.forest}`}
    >
      {/* MOBILE — background only + two framing trees */}
      <div className="absolute left-[-24vw] bottom-16 h-[50dvh] z-[12]">
        <Tree />
      </div>
      <div className="absolute left-[7vw] bottom-40 h-[25dvh] z-[12]">
        <Tree />
      </div>
      <div className="absolute left-[24vw] bottom-16 h-[50dvh] z-[12]">
        <Tree />
      </div>
      <div className="absolute left-[60vw] bottom-24 h-[55dvh] z-[12]">
        <Tree />
      </div>

      {/* TABLET ≥640px — add some mid-foreground trees */}
      <div className="hidden sm:block absolute left-[-20vw] bottom-5 h-[60dvh] z-[12]">
        <Tree />
      </div>
      <div className="hidden sm:block absolute left-[44vw] bottom-40 h-[35dvh] z-[12]">
        <Tree />
      </div>
      <div className="hidden sm:block absolute right-[-15vw] bottom-30 h-[60dvh] z-[12]">
        <Tree />
      </div>

      {/* Laptop ≥1024px — remove middle, add flanking clusters */}
      <div className="hidden lg:block absolute left-[-13vw] bottom-6 h-[58dvh] z-[13]">
        <Tree />
      </div>
      <div className="hidden lg:block absolute left-[10vw] bottom-30 h-[47dvh] z-[12]">
        <Tree />
      </div>
      <div className="hidden lg:block absolute left-[36vw] bottom-44 h-[26dvh] z-[11]">
        <Tree />
      </div>
      <div className="hidden lg:block absolute right-[0vw] bottom-26 h-[38dvh] z-[13]">
        <Tree />
      </div>
      <div className="hidden lg:block absolute right-[10vw] bottom-40 h-[32dvh] z-[12]">
        <Tree />
      </div>
      <div className="hidden lg:block absolute right-[0vw] bottom-14 h-[66dvh] z-[13]">
        <Tree />
      </div>

      {/* Desktop ≥1280px — more trees, larger sizes */}
      <div className="hidden xl:block absolute left-[-3vw] bottom-26 h-[58dvh] z-[13]">
        <Tree />
      </div>
      <div className="hidden xl:block absolute left-[18vw] bottom-30 h-[38dvh] z-[13]">
        <Tree />
      </div>
      <div className="hidden xl:block absolute left-[35vw] bottom-20 h-[58dvh] z-[13]">
        <Tree />
      </div>
      <div className="hidden xl:block absolute right-[35vw] bottom-24 h-[66dvh] z-[13]">
        <Tree />
      </div>
      <div className="hidden xl:block absolute right-[15vw] bottom-24 h-[60dvh] z-[13]">
        <Tree />
      </div>
    </div>
  )
}
