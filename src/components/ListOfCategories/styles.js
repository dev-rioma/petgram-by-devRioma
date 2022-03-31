import styled from 'styled-components'
import { scale } from '../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    ${scale({ time: '0.5s' })}
    z-index: 1;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
