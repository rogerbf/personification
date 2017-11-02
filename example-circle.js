const p = require(".") // eslint-disable-line

const onChangeHandler = (output, { target: { value } }) => {
  output.innerHTML = value ? p.circle(value, 100) : ``
}

window.addEventListener(`DOMContentLoaded`, () => {
  const output = document.createElement(`div`)

  const input = document.createElement(`input`)
  input.setAttribute(`type`, `text`)
  input.setAttribute(`placeholder`, `type something`)
  input.addEventListener(`input`, event => {
    onChangeHandler(output, event)
  })

  const body = document.querySelector(`body`)
  body.appendChild(input)
  body.appendChild(output)
})
