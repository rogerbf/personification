const p = require(".") // eslint-disable-line

const linearGradient = color => `
<linearGradient id="${ color.slice(1) }">
  <stop offset="0%" stop-color="${ color }" stop-opacity="1" />
  <stop offset="100%" stop-color="${ color }" stop-opacity="0.02" />
</linearGradient>
`

const rect = ({ color, blendMode, rotation }) => `
<rect x="0" y="0" width="100%" height="100%" style="mix-blend-mode: ${ blendMode };" fill="url(${ color })" transform="rotate(${ rotation },150,150)" />
`

const circle = (colors, blendMode) => `
<svg version="1.1" baseProfile="full" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${ colors.map(color => linearGradient(color)).join(``) }
    <mask id="mask">
      <circle cx="50%" cy="50%" r="50%" fill="white" />
    </mask>
  </defs>
  
  <g mask="url(#mask)">
  ${ colors.map((color, index) =>
    rect({ color, blendMode, rotation: (360 / colors.length) * index })
  ) }
  </g>
</svg>
`

const body = document.querySelector(`body`)
body.style.fontFamily = `sans-serif`

// const blendModes = [
//   `hard-light`,
//   `luminosity`,
//   `color-dodge`,
//   `screen`
// ]

const blendModes = [
  `normal`,
  `multiply`,
  `screen`,
  `overlay`,
  `darken`,
  `lighten`,
  `color-dodge`,
  `color-burn`,
  `hard-light`,
  `soft-light`,
  `difference`,
  `exclusion`,
  `hue`,
  `saturation`,
  `color`,
  `luminosity`
]

const colors = p.triad(p.colorHash(`personification`).pop())

blendModes.map(blendMode => {
  const div = document.createElement(`div`)
  div.style.display = `flex`
  div.style.width = `60vw`
  div.style.justifyContent = `space-between`
  div.style.alignItems = `center`
  div.style.margin = `3rem auto`
  div.innerHTML = circle(colors, blendMode)
  const label = document.createElement(`h2`)
  label.textContent = blendMode
  div.appendChild(label)
  body.appendChild(div)
})
