import { render } from "@testing-library/vue"
import "@testing-library/jest-dom"
import HelloWorld from "@/components/HelloWorld.vue"

const propsData = {
  msg: "Hello Vue 3 + Vite"
}

test("h1 title is correct", () => {
  const { getByText } = render(HelloWorld, { props: propsData })

  getByText("Hello Vue 3 + Vite")
})

test("h2 title is correct", () => {
  const { getByText } = render(HelloWorld, { props: propsData })

  getByText("Hey! Frank")
})

test("p tag className is corrent", () => {
  const { getByTestId } = render(HelloWorld, { props: propsData })

  const descElement = getByTestId("desc")

  expect(descElement).toHaveClass("desc")
})
