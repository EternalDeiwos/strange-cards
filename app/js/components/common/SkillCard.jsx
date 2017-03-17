'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

import View from './View.jsx'
import BackgroundImage from '../../../img/light-background-a025.png'

const random = () => Math.round(Math.random() * 100)

const style = () => {
  return {
    backgroundStyle: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundPosition: `${random()}% ${random()}%`
    },
    contentStyle: {
      width: '500px'
    }
  }
}

const title = data => {
  let costs = []

  if (data.cost) {
    costs = Object.keys(data.cost).map(key => {
      let title
      switch (key.toLowerCase()) {
        case 'might':
          title = 'Might'
          break
        case 'speed':
          title = 'Speed'
          break
        case 'intellect':
          title = 'Intellect'
          break
        case 'luck':
          title = 'Luck'
          break
      }

      return `${data.cost[key]} ${title}`
    })

    return `${data.name} (${costs.join(', ')})`
  } else {
    return data.name
  }
}

const subtitle = data => {
  let { source, from, action } = data
  let sourceText, actionText, fromText

  actionText = `${data.action ? 'Action' : 'Enabler'}`

  if (source) {
    sourceText = source.map(src => {
      return `${src.book}, pg.${src.page}`
    }).join('; ')
  }

  fromText = from.join('; ')

  return `${actionText}. ${fromText}. (${sourceText})`
}

/**
 * Skill Card
 */
class SkillCard extends React.Component {

  save () {
    let node = ReactDOM.findDOMNode(this)

    domtoimage.toBlob(node, {
      height: node.offsetHeight,
      width: node.offsetWidth
    }).then(blob => {
      FileSaver.saveAs(blob, `${this.props.data.name}.png`)
    })
  }

  render () {
    let { backgroundStyle, contentStyle } = style()
    let { props: { data } } = this

    return (
      <div>
        <div style={{margin: '20px'}}>
          <Card style={backgroundStyle} containerStyle={contentStyle}>
            <CardTitle
              title={title(data)}
              subtitle={subtitle(data)}
            />
            <CardText>
              {data.desc}
            </CardText>
          </Card>
        </div>
      </div>
    )
  }

}

/**
 * Export
 */
export default SkillCard
