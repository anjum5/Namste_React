import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../Mocks/MockResList.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


test("should render body component with search button",async()=>{

    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
    })

    const searchButton=screen.getByRole("button",{name:"Search"})
    const searchInput=screen.getByTestId("searchID")
    fireEvent.change(searchInput,{target:{value:"Pizza"}})
    fireEvent.click(searchButton)
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length).toBe(3)
    
   
})