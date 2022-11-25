import React from 'react'
import { useState } from 'react'
import { commonPost } from '../../../Utilities'
// import { useRouteProtector } from '../../use-route-protector.js'

export default function Upload() {
    // useRouteProtector()

    const [Title, setTitleName] = useState('')
    const [Artist, setArtistName] = useState('')

    const submitUpload = () => {

        let obj = {
            Artist: Artist,
            Title: Title
        }

        commonPost(`http://localhost:3001/uploads`, obj)
            .then(response => {
                setTitleName('')
                setArtistName('')
                alert('song uploaded')
            })

    }


    return (
        <div className='upload-data'>
            <input value={Title} placeholder="song title"
                onChange={e => setTitleName(e.target.value)} ></input>

            <br />
            <br />

            <input value={Artist} placeholder="Name of artist"
                onChange={e => setArtistName(e.target.value)} ></input>

            <hr />
            <button onClick={submitUpload}>Upload songs</button>

            {

            }


        </div>
    )
}
