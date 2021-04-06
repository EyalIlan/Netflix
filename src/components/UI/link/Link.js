import React from 'react'
import {Link} from 'react-router-dom'

export default function LINK({url,title}) {
    return (
         <Link className="Link" to={url}>{title}</Link>
    )
}
