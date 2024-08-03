import Definition from '@/types/Definition'

import list from '@/data/definition-list'

import DefinitionCard from '@/components/definition-card'

import '@/styles/definition-list.css'

export default function Home() {
  const definitions: Definition[] = list
  
  return (
    <main className='content'>
      <ul className='definition-list'>
        {definitions.map((definition, index) => (<li key={index}><DefinitionCard definition={definition} /></li>))}
      </ul>
    </main>
  )
}
