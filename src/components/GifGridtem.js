import React from 'react'

export const GifGridtem = ({title, url}) => {
    // console.log(props);
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
