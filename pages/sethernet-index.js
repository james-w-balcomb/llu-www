import React from 'react'
import SethernetLayout from '../components/SethernetMyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const SethernetIndex = (props) => (

    <SethernetLayout>
        <h2>Table List</h2>
        <ul>
            {props.tables.map(table => (
                <li key={table._id}>
                    <Link as={`/sethernet-table/${table._id}`} href={`/sethernet-table?id=${table._id}`}>
                        <a>{table.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </SethernetLayout>
)

SethernetIndex.getInitialProps = async function() {
    const res = await fetch('http://localhost:3001/api/tables')
    const data = await res.json()
    return {
        tables: data
    }
}

export default SethernetIndex
