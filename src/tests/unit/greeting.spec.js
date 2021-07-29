import "@testing-library/jest-dom"
import axiosMock from "axios"
import { render, fireEvent, cleanup } from "@testing-library/vue"
import Greeting from "@/components/Greeting.vue"

test("mocks an API call when load-greeting is clicked", async () => {
  beforeEach(cleanup)

  axiosMock.get = jest.fn()

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" }
  })

  const { getByText } = render(Greeting, { props: { url: "/greeting" } })

  await fireEvent.click(getByText("Fetch"))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith("/greeting")
  expect(getByText("hello there")).toBeInTheDocument()
})
