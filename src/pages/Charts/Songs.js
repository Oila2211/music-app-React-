import React from 'react'
import Stars from 'react-rating-stars-component'


export default function Songs({ Title, Artist, Rating, }) {
    const expandButton = () => {

        const score = document.getElementById('before-comment-click');
        score.style.display = 'block'
    }
    return (
        <div className='song-list'>
            <span>{Title}</span>
            <span>{Artist}</span>
            <span>{Rating}</span>
            <Stars value={Rating} />
            <span className='comment-box'>
                <div>
                    <button onClick={expandButton} className='comment-button'>comment</button>
                </div>
                <div id='before-comment-click'>
                    <input className='comment-body' placeholder='write your review'></input>
                    <button className='send-button'>send</button>
                </div>

            </span>

        </div >
    )
}
