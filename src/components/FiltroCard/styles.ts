import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'legenda' | 'contador'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  backgound-color: ${(props) => (props.ativo ? '#fff' : '#FCFCFC')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border-redius: 8px;
`

export const Contador = styled.span`
  font-weight: bolde;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
