import React, { useState } from 'react'

export default function Catfact() {
    const [fact, SetFact] = useState()
    const Info = () => {
        SetFact('loading...')

        fetch('https://catfact.ninja/fact')
            .then(x => x.json())
            .then(x => {
                SetFact(x.fact)
            })
    }
    const [Activity, SetActivity] = useState()
    const pushing = () => {

        SetActivity('loading...')

        fetch('https://catfact.ninja/fact')
            .then(a => a.json())
            .then(res => {
                SetActivity(res.Activity)
            })
    }
    return (
        <div>
            <button onClick={Info}>Cat-Fact</button>
            <div>fact: {fact} </div>
            <hr />
            <button onClick={pushing}>Entries</button>
            <div>activity: {Activity}</div>
        </div>



    )
}
