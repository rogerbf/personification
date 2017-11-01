const linearGradient = color => `
<linearGradient id="${ color.slice(1) }">
  <stop offset="0%" stop-color="${ color }" stop-opacity="1" />
  <stop offset="100%" stop-color="${ color }" stop-opacity="0.02" />
</linearGradient>
`

const rect = ({ color, rotation, diameter }) => `
<rect x="0" y="0" width="100%" height="100%" style="mix-blend-mode: screen;" fill="url(${ color })" transform="rotate(${ rotation },${ diameter /
  2 },${ diameter / 2 })" />
`

export default (colors, diameter) => `
<svg version="1.1" baseProfile="full" width="${ diameter }" height="${ diameter }" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${ colors.map(color => linearGradient(color)).join(``) }
    <mask id="mask">
      <circle cx="50%" cy="50%" r="50%" fill="white" />
    </mask>
  </defs>
  
  <g mask="url(#mask)">
  ${ colors.map((color, index) =>
    rect({ color, diameter, rotation: 360 / colors.length * index })
  ) }
  </g>
</svg>
`
