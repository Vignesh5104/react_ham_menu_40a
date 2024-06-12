import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const NotFoundContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
`

export const NotFoundResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
  margin: 20px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 360px;
`

export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 1.22;
  }
`

export const Description = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.75;
  margin-top: 16px;
  text-align: center;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 12px;
    line-height: 1.33;
    width: 241px;
    margin-top: 6px;
  }
`
