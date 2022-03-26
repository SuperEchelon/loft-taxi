import React from 'react'
import {Login} from './Login'
import { render } from '@testing-library/react'

describe("Login", () => {
    it("render correctly", () => {
        const {container} = render(<Login />)
        expect(container.innerHTML).toMatch('Войти')
    })
})