import React from 'react'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import styled from 'styled-components'

const Div = styled.div`
    width: 100px
`

export const LoginUser = (props) => {
  return (
    <>
        <Div>
            <Input></Input>
        </Div>
    </>
  )
}
