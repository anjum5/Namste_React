import { render, screen } from "@testing-library/react"
import RestaurantsCard from "../RestaurantsCard"
import MOCK_DATA from "../Mocks/ResCardMocks.json"
import "@testing-library/jest-dom"

test("should test the props in rescard componet",()=>{

    render(<RestaurantsCard resData={MOCK_DATA}/>)
    const name=screen.getByText("Subway")
    expect(name).toBeInTheDocument()
})

