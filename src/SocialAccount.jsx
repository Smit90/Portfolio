import React from 'react'

const SocialAccount = (props) => {
    return (
        <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <a href={props.link} target="_blank" rel="noopener noreferrer" >
            <i className={`fa fa-${props.name} fa-stack-1x fa-inverse`}></i>
            </a>
        </span>
    )
}

export default SocialAccount
