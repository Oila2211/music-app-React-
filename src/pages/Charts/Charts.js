import React, { useEffect } from 'react'
import { useState } from 'react'
import Songs from './Songs'
import { commonGet } from '../../Utilities'
import { useRouteProtector } from '../../use-route-protector.js'



export default function Charts() {
    useRouteProtector()

    const [items, SetItems] = useState([
        // {
        //     Id: '1',
        //     Title: 'Vibe',
        //     Rating: 5




        // },
        // {
        //     Id: '2',
        //     Title: 'Death bed',
        //     Artist: ' (feat. beabadoobee) Powfu',
        //     Rating: 3

        // },
        // {
        //     Id: '3',
        //     Title: 'Moral of Story',
        //     Artist: ' Ashe',
        //     Rating: 2

        // },
        // {
        //     Id: '4',
        //     Title: 'My Truck',
        //     Artist: ' Breland',
        //     Rating: 4

        // },
        // {
        //     Id: '5',
        //     Title: 'Pura pura',
        //     Artist: ' Mahen',
        //     Rating: 3

        // },
        // {
        //     Id: '6',
        //     Title: 'Bad to me',
        //     Artist: '  Wizkid',
        //     Rating: 4

        // },
        // {
        //     Id: '7',
        //     Title: 'Under the influence',
        //     Artist: ' by Chris Brown',
        //     Rating: 5

        // }

    ])


    const uploadAllSongs = () => {
        commonGet(`http://localhost:3001/uploads`)
            .then(response => {
                SetItems(response)
            })
    }

    useEffect(() => {
        uploadAllSongs();
    }, [])

    const sorted = () => {
        let copy = items.concat([])
        copy = copy.sort((a, b) => a.Artist > b.Artist ? 1 : -1)
        SetItems(copy)



    }


    const ratSort = () => {
        let copy = items.concat([])
        copy = copy.sort((a, b) => a.Rating > b.Rating ? 1 : -1)
        SetItems(copy)
    }

    const sortTitle = () => {
        let copy = items.concat([])
        copy = copy.sort((a, b) => a.Title > b.Title ? 1 : -1)
        SetItems(copy)
    }




    return (
        <div>
            <h2> SuperTunes - Song of the Week </h2>
            <hr />
            <button onClick={sorted} className="Mybutton"> Sort By Artist</button>
            <button onClick={ratSort} className="Mybutton">Sort By Rating </button>
            <button onClick={sortTitle} className="Mybutton">Sort By Title</button>

            {
                items.map(x => <div><Songs

                    Title={x.Title}
                    Artist={x.Artist}
                    Rating={x.Rating}
                    Id={x._Id}
                />

                </div>)
            }

        </div>
    )
}
