import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p>Layout here</p>
        {children}
        <p>Layout also here</p>
    </div>
  )
}

export default Layout