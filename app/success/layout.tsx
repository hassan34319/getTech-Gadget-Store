import React from 'react'

function layout( {
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div>{children}</div>
  )
  }

export default layout

