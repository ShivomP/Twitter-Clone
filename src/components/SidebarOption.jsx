import React from 'react'
import './css/sidebaroption.css'

function SidebarOption({active, text, Icon}) {
  return (
    <div className={`sidebar__option ${active && 'sidebar__option--active'}`}>
        <Icon/>
      <h2> {text} </h2>
    </div>
  )
}

export default SidebarOption
