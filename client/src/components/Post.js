import React from 'react'

const Post = props => {
    const {title, contents, id} = props.post
    return (
        <div className="LOTRCard">
            <h1>LOTR Trivia Card {id}</h1>
            <section>
                <p>Challenge: {contents}</p>
                <h2>Quote: {title}</h2>
                
            </section>

        </div>
    )
}

export default Post;