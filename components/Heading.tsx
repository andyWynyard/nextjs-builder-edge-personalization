import { Builder } from '@builder.io/react'
import { FC } from 'react'

import styled from 'styled-components'

type HeadingProps = {
  color: string
  title: string
}

const StyledHeading = styled.h1`
  color: ${(props) => props.theme.color?.primary || 'red'};
`

export const Heading: FC<HeadingProps> = ({ title }) => (
  <StyledHeading>{title}</StyledHeading>
)

Builder.registerComponent(Heading, {
  name: 'Heading',
  inputs: [
    {
      name: 'title',
      type: 'text',
      defaultValue: `bro`,
    },
  ],
})
