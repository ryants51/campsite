import { FireSparks } from './FireSparks'
import styles from './Campfire.module.css'
import { FireSmoke } from './FireSmoke'

function Campfire() {
  return (
    <div className="absolute left-[34vw] bottom-12 h-[17dvh] w-auto z-[20]">
      <div className="relative h-full w-auto flex items-end justify-center">
        <Logs />
        <Fire />
      </div>
      <FireSparks />
      <FireSmoke />
    </div>
  )
}

function Logs() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[42%] w-auto relative z-[10]"
      viewBox="0 0 191 86"
      fill="none"
    >
      <g filter="url(#filter0_ng_35_18)">
        <path
          d="M11.6888 43.2612L6.68884 37.7612L4.68884 32.2612L3.68884 26.7612L6.68884 19.7612L13.6888 14.2612L21.6888 11.2612L33.6888 9.76123L42.6888 7.76123L52.1888 3.76123L70.1888 21.7612L60.1888 28.7612L48.6888 34.2612L38.6888 38.7612L29.6888 41.7612L18.6888 44.2612L11.6888 43.2612Z"
          fill="#3A2415"
        />
        <path
          d="M11.6888 43.2612L6.68884 37.7612L4.68884 32.2612L3.68884 26.7612L6.68884 19.7612L13.6888 14.2612L21.6888 11.2612L33.6888 9.76123L42.6888 7.76123L52.1888 3.76123L70.1888 21.7612L60.1888 28.7612L48.6888 34.2612L38.6888 38.7612L29.6888 41.7612L18.6888 44.2612L11.6888 43.2612Z"
          stroke="#3A2415"
        />
      </g>
      <g filter="url(#filter1_dng_35_18)">
        <path
          d="M65.6888 66.7612L59.1888 70.2612L51.1888 68.7612L45.6888 62.2612V53.7612L48.1888 46.2612L53.6888 40.7612L60.1888 36.2612L67.6888 30.7612L76.6888 25.7612L93.6888 31.7612L87.6888 40.7612L81.1888 48.7612L73.6888 58.2612L65.6888 66.7612Z"
          fill="#3A2415"
        />
        <path
          d="M65.6888 66.7612L59.1888 70.2612L51.1888 68.7612L45.6888 62.2612V53.7612L48.1888 46.2612L53.6888 40.7612L60.1888 36.2612L67.6888 30.7612L76.6888 25.7612L93.6888 31.7612L87.6888 40.7612L81.1888 48.7612L73.6888 58.2612L65.6888 66.7612Z"
          stroke="#3A2415"
        />
      </g>
      <g filter="url(#filter2_dng_35_18)">
        <path
          d="M132.689 74.2612L128.689 71.7612L125.189 67.7612L121.189 63.2612L115.189 56.7612L110.689 52.2612L106.189 46.7612L102.189 41.7612L98.1888 36.7612L95.1888 30.7612L117.689 24.2612L123.189 29.2612L129.689 35.2612L137.189 42.7612L144.189 50.7612L151.189 58.2612L149.689 63.2612L144.189 69.7612L138.189 74.2612H132.689Z"
          fill="#3A2415"
        />
        <path
          d="M132.689 74.2612L128.689 71.7612L125.189 67.7612L121.189 63.2612L115.189 56.7612L110.689 52.2612L106.189 46.7612L102.189 41.7612L98.1888 36.7612L95.1888 30.7612L117.689 24.2612L123.189 29.2612L129.689 35.2612L137.189 42.7612L144.189 50.7612L151.189 58.2612L149.689 63.2612L144.189 69.7612L138.189 74.2612H132.689Z"
          stroke="#3A2415"
        />
      </g>
      <g filter="url(#filter3_ng_35_18)">
        <path
          d="M183.689 46.7612L178.689 52.2612L170.689 50.2612L164.189 46.7612L156.689 43.2612L149.689 38.7612L142.689 34.7612L135.689 30.7612L129.689 27.2612L124.189 22.7612L134.689 10.7612L142.689 12.7612L148.189 13.7612L156.689 15.7612L165.689 17.7612L173.189 20.2612L180.189 22.7612L186.689 25.2612L187.689 32.2612V39.7612L183.689 46.7612Z"
          fill="#3A2415"
        />
        <path
          d="M183.689 46.7612L178.689 52.2612L170.689 50.2612L164.189 46.7612L156.689 43.2612L149.689 38.7612L142.689 34.7612L135.689 30.7612L129.689 27.2612L124.189 22.7612L134.689 10.7612L142.689 12.7612L148.189 13.7612L156.689 15.7612L165.689 17.7612L173.189 20.2612L180.189 22.7612L186.689 25.2612L187.689 32.2612V39.7612L183.689 46.7612Z"
          stroke="#3A2415"
        />
      </g>
      <defs>
        <filter
          id="filter0_ng_35_18"
          x="4.3869e-05"
          y="-7.82013e-05"
          width="74.1337"
          height="47.9394"
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
            baseFrequency="0.45454543828964233 0.45454543828964233"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="4759"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge result="effect1_noise_35_18">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.76923078298568726 0.76923078298568726"
            numOctaves="3"
            seed="418"
          />
          <feDisplacementMap
            in="effect1_noise_35_18"
            scale="6.3400001525878906"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect2_texture_35_18">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
        <filter
          id="filter1_dng_35_18"
          x="41.1888"
          y="22.0448"
          width="57.2726"
          height="59.7403"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_35_18"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.45454543828964233 0.45454543828964233"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="8200"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge result="effect2_noise_35_18">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
          <feBlend
            mode="normal"
            in="effect2_noise_35_18"
            in2="effect1_dropShadow_35_18"
            result="effect2_noise_35_18"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.76923078298568726 0.76923078298568726"
            numOctaves="3"
            seed="2264"
          />
          <feDisplacementMap
            in="effect2_noise_35_18"
            scale="6.3400001525878906"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect3_texture_35_18">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
        <filter
          id="filter2_dng_35_18"
          x="90.473"
          y="21.2934"
          width="65.2772"
          height="64.4679"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_35_18"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.45454543828964233 0.45454543828964233"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="4245"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge result="effect2_noise_35_18">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
          <feBlend
            mode="normal"
            in="effect2_noise_35_18"
            in2="effect1_dropShadow_35_18"
            result="effect2_noise_35_18"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82644623517990112 0.82644623517990112"
            numOctaves="3"
            seed="3354"
          />
          <feDisplacementMap
            in="effect2_noise_35_18"
            scale="4.820000171661377"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect3_texture_35_18">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
        <filter
          id="filter3_ng_35_18"
          x="120.892"
          y="7.62215"
          width="69.8767"
          height="47.7767"
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
            baseFrequency="0.45454543828964233 0.45454543828964233"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="4898"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge result="effect1_noise_35_18">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.45454543828964233 0.45454543828964233"
            numOctaves="3"
            seed="2935"
          />
          <feDisplacementMap
            in="effect1_noise_35_18"
            scale="5.1599998474121094"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect2_texture_35_18">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

function Fire() {
  return (
    <div
      className={`absolute bottom-[23%] left-1/2 -translate-x-1/2 h-full w-auto z-[11] ${styles.fireWrapper}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-full w-auto ${styles.fireFlip}`}
        viewBox="0 0 145 210"
        fill="none"
      >
        <g filter="url(#filter0_ng_35_19)">
          <path
            d="M139.985 152.684L135.485 162.684L127.485 174.684L119.985 183.184L109.485 191.184L96.9849 199.184L82.4849 203.184L68.9849 204.684L55.4849 202.184L42.4849 196.684L31.4849 191.184L22.4849 183.184L15.4849 172.684L10.4849 162.684L6.98486 146.184L4.98486 131.184L6.98486 117.684L8.48486 107.184L13.4849 96.1842L19.9849 87.1842L25.9849 77.1842L29.9849 69.1842C29.9849 69.1842 32.9849 68.6842 34.4849 69.1842C35.9849 69.6842 37.9849 77.1842 37.9849 77.1842L42.4849 87.1842L45.9849 82.1842L47.4849 75.1842L52.4849 66.1842L57.4849 55.1842L62.4849 46.6842L65.9849 38.6842L68.9849 29.6842V23.6842V15.1842V8.1842L71.4849 5.1842L77.4849 10.1842L83.9849 17.6842L91.9849 29.6842L96.9849 40.6842L101.485 55.1842L103.485 69.1842L105.485 87.1842V101.184L109.485 98.1842L113.985 90.6842L117.985 82.1842L121.985 77.1842C125.114 78.6296 126.182 79.7934 127.485 82.1842L130.485 90.6842L135.485 103.184L139.985 118.184V134.684V152.684Z"
            fill="#C46520"
          />
          <path
            d="M139.985 152.684L135.485 162.684L127.485 174.684L119.985 183.184L109.485 191.184L96.9849 199.184L82.4849 203.184L68.9849 204.684L55.4849 202.184L42.4849 196.684L31.4849 191.184L22.4849 183.184L15.4849 172.684L10.4849 162.684L6.98486 146.184L4.98486 131.184L6.98486 117.684L8.48486 107.184L13.4849 96.1842L19.9849 87.1842L25.9849 77.1842L29.9849 69.1842C29.9849 69.1842 32.9849 68.6842 34.4849 69.1842C35.9849 69.6842 37.9849 77.1842 37.9849 77.1842L42.4849 87.1842L45.9849 82.1842L47.4849 75.1842L52.4849 66.1842L57.4849 55.1842L62.4849 46.6842L65.9849 38.6842L68.9849 29.6842V23.6842V15.1842V8.1842L71.4849 5.1842L77.4849 10.1842L83.9849 17.6842L91.9849 29.6842L96.9849 40.6842L101.485 55.1842L103.485 69.1842L105.485 87.1842V101.184L109.485 98.1842L113.985 90.6842L117.985 82.1842L121.985 77.1842C125.114 78.6296 126.182 79.7934 127.485 82.1842L130.485 90.6842L135.485 103.184L139.985 118.184V134.684V152.684Z"
            stroke="#C46520"
          />
        </g>
        <g filter="url(#filter1_ng_35_19)">
          <path
            d="M101.485 181.184L94.4849 187.184L88.4849 191.184L80.4849 194.184H69.4849L60.4849 192.184L52.9849 188.684L46.9849 184.684L41.4849 177.684L38.4849 172.684L36.4849 165.684V155.184V144.184L37.9849 135.184L40.4849 128.684L44.9849 130.184L48.9849 135.184L52.9849 142.684L54.9849 140.184L56.9849 132.684L60.4849 123.184L62.9849 115.184L65.9849 104.184L69.4849 93.6842L71.9849 86.1842L77.4849 81.1842L80.4849 84.1842L82.9849 90.6842L86.4849 99.1842L89.4849 110.684L92.4849 122.184L94.4849 132.684L96.9849 142.684L101.485 137.684L106.485 132.684L109.985 130.184V136.684L111.485 150.684L109.985 163.184L106.485 173.684L101.485 181.184Z"
            fill="#E2983C"
          />
          <path
            d="M101.485 181.184L94.4849 187.184L88.4849 191.184L80.4849 194.184H69.4849L60.4849 192.184L52.9849 188.684L46.9849 184.684L41.4849 177.684L38.4849 172.684L36.4849 165.684V155.184V144.184L37.9849 135.184L40.4849 128.684L44.9849 130.184L48.9849 135.184L52.9849 142.684L54.9849 140.184L56.9849 132.684L60.4849 123.184L62.9849 115.184L65.9849 104.184L69.4849 93.6842L71.9849 86.1842L77.4849 81.1842L80.4849 84.1842L82.9849 90.6842L86.4849 99.1842L89.4849 110.684L92.4849 122.184L94.4849 132.684L96.9849 142.684L101.485 137.684L106.485 132.684L109.985 130.184V136.684L111.485 150.684L109.985 163.184L106.485 173.684L101.485 181.184Z"
            stroke="#E2983C"
          />
        </g>
        <defs>
          <filter
            id="filter0_ng_35_19"
            x="-1.95503e-05"
            y="-1.95503e-05"
            width="144.965"
            height="209.669"
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
              baseFrequency="0.90909087657928467 0.90909087657928467"
              stitchTiles="stitch"
              numOctaves="3"
              result="noise"
              seed="4592"
            />
            <feColorMatrix
              in="noise"
              type="luminanceToAlpha"
              result="alphaNoise"
            />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA
                type="discrete"
                tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
              />
            </feComponentTransfer>
            <feComposite
              operator="in"
              in2="shape"
              in="coloredNoise1"
              result="noise1Clipped"
            />
            <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
            <feComposite
              operator="in"
              in2="noise1Clipped"
              in="color1Flood"
              result="color1"
            />
            <feMerge result="effect1_noise_35_19">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.45454543828964233 0.45454543828964233"
              numOctaves="3"
              seed="922"
            />
            <feDisplacementMap
              in="effect1_noise_35_19"
              scale="8.9600000381469727"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedImage"
              width="100%"
              height="100%"
            />
            <feMerge result="effect2_texture_35_19">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            id="filter1_ng_35_19"
            x="33.2249"
            y="77.7335"
            width="81.5232"
            height="119.711"
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
              baseFrequency="0.8849557638168335 0.8849557638168335"
              stitchTiles="stitch"
              numOctaves="3"
              result="noise"
              seed="3418"
            />
            <feColorMatrix
              in="noise"
              type="luminanceToAlpha"
              result="alphaNoise"
            />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA
                type="discrete"
                tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
              />
            </feComponentTransfer>
            <feComposite
              operator="in"
              in2="shape"
              in="coloredNoise1"
              result="noise1Clipped"
            />
            <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
            <feComposite
              operator="in"
              in2="noise1Clipped"
              in="color1Flood"
              result="color1"
            />
            <feMerge result="effect1_noise_35_19">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.45454543828964233 0.45454543828964233"
              numOctaves="3"
              seed="2032"
            />
            <feDisplacementMap
              in="effect1_noise_35_19"
              scale="5.5199999809265137"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedImage"
              width="100%"
              height="100%"
            />
            <feMerge result="effect2_texture_35_19">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export { Campfire }
