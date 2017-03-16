'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import View from './View.jsx'
import SkillCard from './SkillCard.jsx'

const text = {
  name: 'Bash',
  cost: { might: 1 },
  small: 'A melee attack that deals 1 less point of damage but dazes the target for one round.',
  desc: 'This is a pummeling melee attack. Your attack inflicts 1 less point of damage than normal, but dazes your target for one round, during which time the difficulty of all tasks it performs is modified by one step to its detriment.',
  action: true,
  bought: true,
  source: [{ book: 'Core Rulebook', page: 0 }],
  type: 'type',
  from: ['Vector 1']
}

/**
 * Cards
 */
class Cards extends React.Component {

  render () {
    return (
      <View layout="row">
        <SkillCard data={text} />
      </View>
    )
  }

}

/**
 * Export
 */
export default Cards
