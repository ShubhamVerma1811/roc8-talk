import React from 'react'
import { RBLayout } from './RBLayout'
import { TamaguiLayout } from './TamaguiLayout'

const layouts = {
  OLD: RBLayout,
  NEW: TamaguiLayout,
}

interface LayoutWrapperProps {
  layout: 'OLD' | 'NEW'
}

const LayoutRenderer: React.FC<LayoutWrapperProps> = (props) => {
  const Layout = layouts[props.layout]

  if (Layout) return <Layout>{props.children}</Layout>
  else return null
}

export default LayoutRenderer
