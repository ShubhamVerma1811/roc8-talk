import dynamic from 'next/dynamic'
import React from 'react'
// import { RBLayout } from './RBLayout'
// import { TamaguiLayout } from './TamaguiLayout'

const layouts = {
  // OLD: RBLayout,
  // NEW: TamaguiLayout,
  OLD: dynamic(() => import('./RBLayout').then((mod) => mod.RBLayout), { ssr: false }),
  NEW: dynamic(() => import('./TamaguiLayout').then((mod) => mod.TamaguiLayout), { ssr: false }),
}

interface LayoutWrapperProps {
  layout: 'OLD' | 'NEW'
}

const LayoutRenderer: React.FC<LayoutWrapperProps> = (props) => {
  const Layout = layouts[props.layout]

  if (Layout) return <Layout>{props.children}</Layout>
  else return <>{props.children}</>
}

export default LayoutRenderer
