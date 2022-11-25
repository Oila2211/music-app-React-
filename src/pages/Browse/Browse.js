import React, { useEffect, useState } from 'react'
import Heading from '../Dashboard/Heading'
import BrowseData from './BrowseData'
import { useRouteProtector } from '../../use-route-protector'
import { Link } from 'react-router-dom'
import SquareButton from '../../SquareButton'

export default function Browse() {
    useRouteProtector()

    const [word, setWord] = useState("")
    const [items] = useState([
        { category: "Hits" }, { category: "Charts" }, { category: "Afro" }, { category: "RnB" },
        { category: "Soul" }, { category: "Pop" }, { category: "World" }, { category: "Asia" },
        { category: "Party" }, { category: "Latino" }, { category: "Culture" }, { category: "Ponk" },
        { category: "New" }, { category: "Christian" }, { category: "Hip-hop" }
    ])
    const [filterDisplay, setFilterDisplay] = useState([]);

    const handleChange = e => {
        setWord(e);
        let oldList = items.map(items => {
            return { category: items.category.toLowerCase() };
        });

        if (word !== "") {
            let newList = [];

            newList = oldList.filter(items =>
                items.category.includes(word.toLowerCase())
            );
            setFilterDisplay(newList);
        } else {
            setFilterDisplay(items);
        }
    };
    useEffect(() => {
        setFilterDisplay(items)
    }, [items])












    return (
        <div className='all-heading'>
            <Heading />
            <div className='browse-container'>
                <div>
                    <Link to='/Upload'>
                        <SquareButton label='Upload' />
                    </Link>

                    <Link to='/Charts'>
                        <SquareButton label='Charts' />
                    </Link>

                    <Link to='/Catfact'>
                        <SquareButton label='Catfact' />
                    </Link>
                </div>
                <h1>Search</h1>
                <input placeholder='search categories' className='browse-search'

                    onChange={e => handleChange(e.target.value)}>

                </input>
                <hr />
                <h2>Browse Categories</h2>


                {/* {
                    items.map(x => <>  <BrowseData category={x.category} /> </>)
                } */}

                {
                    filterDisplay.map(x => <span >  <BrowseData category={x.category} /> </span>)
                }




            </div>
        </div>
    )
}
