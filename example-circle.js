const p = require(".") // eslint-disable-line

const body = document.querySelector(`body`)

const container = document.createElement(`div`)
container.innerHTML = p.circle(`personification`, 100)
body.appendChild(container)
