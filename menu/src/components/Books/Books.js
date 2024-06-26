import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBooks = styled.div`
    color: black;
    background: rgba(199,167,38,.75);
    border: 1px solid black;
`

export const Books = ({children, ...rest}) => (
    <StyledBooks>{children}</StyledBooks>
)

Books.propTypes = {
    children: PropTypes.node.isRequired
}