import styles from './Moon.module.css'

function Moon() {
  return (
    <div className={`${styles.moon} ${styles.glow}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="245"
        height="245"
        viewBox="0 0 245 245"
        fill="none"
      >
        <g filter="url(#filter0_g_31_51)">
          <circle cx="122.25" cy="122.25" r="115" fill="#F5F3E8" />
          <ellipse cx="57.25" cy="179.25" rx="17" ry="16" fill="#E2DFD2" />
          <ellipse cx="211.25" cy="97.25" rx="17" ry="16" fill="#E2DFD2" />
          <ellipse cx="95.25" cy="138.25" rx="17" ry="16" fill="#E2DFD2" />
          <ellipse cx="148.25" cy="57.25" rx="17" ry="16" fill="#E2DFD2" />
          <ellipse cx="43.75" cy="110.25" rx="27.5" ry="29" fill="#E2DFD2" />
          <ellipse cx="171.75" cy="179.25" rx="33.5" ry="40" fill="#E2DFD2" />
        </g>
        <defs>
          <filter
            id="filter0_g_31_51"
            x="0"
            y="0"
            width="244.5"
            height="244.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.54644805192947388 0.54644805192947388"
              numOctaves="3"
              seed="8963"
            />
            <feDisplacementMap
              in="shape"
              scale="14.5"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedImage"
              width="100%"
              height="100%"
            />
            <feMerge result="effect1_texture_31_51">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export { Moon }
