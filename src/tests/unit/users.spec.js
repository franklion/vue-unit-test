import "@testing-library/jest-dom"
import axiosMock from "axios"
import { render, fireEvent, cleanup } from "@testing-library/vue"
import Users from "@/components/Users.vue"
import { getShortName } from "@/utils/index.js"

const responseData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
]

export const escape = function (string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}

test("mocks an API call when load-greeting is clicked", async () => {
  beforeEach(cleanup)

  axiosMock.get = jest.fn()

  axiosMock.get.mockResolvedValueOnce({
    data: responseData
  })

  const { getByText } = render(Users, { props: { url: "/users" } })

  await fireEvent.click(getByText("Fetch"))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith("/users")

  responseData.forEach(user => {
    const shortName = getShortName(user.name)
    const escapeShortName = escape(shortName)
    expect(getByText(new RegExp(escapeShortName))).toBeInTheDocument()
  })
})
