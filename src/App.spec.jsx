import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

jest.mock('./Login', () => ({ Login: () => <div>Login component</div>}))
jest.mock('./Map', () => ({ Map: () => <div>Map component</div>}))
jest.mock('./Profile', () => ({ Profile: () => <div>Profile component</div>}))

describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(<App />)
        expect(container.innerHTML).toMatch("Login component")
    })

    describe("when clicked on navigation buttons", () => {
        it("opens the corresponding page", () => {
            const { getByText, container } = render(<App />)

            fireEvent.click(getByText('Login'))
            expect(container.innerHTML).toMatch("Login component")
            fireEvent.click(getByText('Profile'))
            expect(container.innerHTML).toMatch("Profile component")
        })
    })
})