'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import FontIcon from 'material-ui/FontIcon'

const nameCheck = (name) => {
  if (name.startsWith('fa-')) {
    return name
  } else {
    return `fa-${name}`
  }
}

const Icon = (props) => {
  let icon

  if (props.iconClassName) {
    let faClasses = ['fa']
    let iconClassName = Array.isArray(props.iconClassName)
      ? faClasses.concat(props.iconClassName.map(nameCheck)).join(' ')
      : faClasses.concat([props.iconClassName].map(nameCheck)).join(' ')
    icon = <i className={iconClassName} aria-hidden="true"></i>
  } else if (props.src) {
    icon = <img src={props.src} />
  }

  return (
    <FontIcon>
      {icon}
    </FontIcon>
  )
}

/**
 * Export
 */
export default Icon
