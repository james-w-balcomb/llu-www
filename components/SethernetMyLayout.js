import React from 'react'
import SethernetHeader from './SethernetHeader'

export default function SethernetLayout(props) {
    return (
        <div>
            <SethernetHeader />
            <div>
                {props.children}
            </div>
        </div>

    )
}
