import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown, faHandPointUp } from '@fortawesome/free-regular-svg-icons'

import Definition from '@/types/Definition'

import '@/styles/definition-card.css'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'


export default function DefinitionCard({ definition }: { definition: Definition }) {
  return (
    <div className='definition-card'>
      <h2 className='definition-card__phrase'>
        <FontAwesomeIcon icon={faAnglesRight} />
        {definition.phrase}
      </h2>
      <div className='definition-card__meaning'>{definition.meaning}</div>
      <div className='definition-card__meta'>
        <span>{definition.author.name}</span>
        <span>{definition.date.toDateString()}</span>
      </div>
      <div className='upvote-btns'>
        <button className='upvote-btn' type='button'>
          <FontAwesomeIcon icon={faHandPointUp} />
          {definition.upvotes}
          </button>
        <button className='upvote-btn' type='button'>
          {definition.downvotes}
          <FontAwesomeIcon icon={faHandPointDown} />
          </button>
      </div>
    </div>
  )
}