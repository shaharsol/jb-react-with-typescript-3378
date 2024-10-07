import { FormEvent, useDeferredValue, useState } from 'react';
import './Defer.css'
import List from './List';

function Defer(): JSX.Element {

    const [query, setQuery] = useState<string>('')
    const deferredQuery = useDeferredValue(query)


    /*

    query: ''
    defered: ''

    query: 'ch'
    defered: ''

    query: 'ch'
    defered: 'ch'
    
    query: 'cha'
    defered: 'ch'

    query: 'chai'
    deferred 'cha'

    query: 'chai'
    defrred: 'chai'
    */


    function queryChanged(event: FormEvent<HTMLInputElement>) {
        setQuery(event.currentTarget.value)
        // now ignite a filter
        console.log(deferredQuery)
    }


    // useDeferredValue

    return (
        <div className='Defer'>
            <h2>Northind Producrts Autocomplete Defer</h2>
            <input type="text" value={query} onChange={queryChanged} />

            <List query={deferredQuery} />
        </div>
    )
}

export default Defer;