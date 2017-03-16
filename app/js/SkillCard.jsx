'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'
import View from './View.jsx'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import BackgroundImage from '../img/light-background-a025.png'

const style = {
  backgroundStyle: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: 'right top'
  },
  contentStyle: {
    width: '500px'
  }
}

const title = data => {
  let costs = Object.keys(data.cost).map(key => {
    let title
    switch (key) {
      case 'might':
        title = 'Might'
        break
      case 'speed':
        title = 'Speed'
        break
      case 'intellect':
        title = 'Intellect'
        break
    }

    return `${data.cost[key]} ${title}`
  })

  return `${data.name} (${costs.join(', ')})`
}

const subtitle = data => {
  let { source, from, action } = data

  let actionText = `${data.action ? 'Action' : 'Enabler'}`
  let sourceText = source.map(src => {
    return `${src.book}, pg.${src.page}`
  }).join('; ')
  let fromText = from.join('; ')

  return `${actionText}. ${fromText}. (${sourceText})`
}

/**
 * Skill Card
 */
class SkillCard extends React.Component {

  save () {
    let node = ReactDOM.findDOMNode(this)
    console.log(node.offsetHeight, node.offsetWidth)

    domtoimage.toBlob(node, {
      height: node.offsetHeight,
      width: node.offsetWidth
    }).then(blob => {
      FileSaver.saveAs(blob, `${this.props.data.name}.png`)
    })
  }

  render () {
    let { backgroundStyle, contentStyle } = style
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
