import React from 'react'
import Button from './Button'


export default function Keyboard(){
    return(
        <table>
            <thead>
                <tr>
                    <th><Button value={'C'}/></th>
                    <th><Button value={'/'}/></th>
                    <th><Button value={'*'}/></th>
                    <th><Button value={'-'}/></th>
                </tr>
                <tr>
                    <th><Button value={7}/></th>
                    <th><Button value={8}/></th>
                    <th><Button value={9}/></th>
                    <th><Button value={'+'}/></th>
                </tr>
                <tr>
                    <th><Button value={4}/></th>
                    <th><Button value={5}/></th>
                    <th><Button value={6}/></th>
                    <th><Button value={'.'}/></th>
                </tr>
                <tr>
                    <th><Button value={1}/></th>
                    <th><Button value={2}/></th>
                    <th><Button value={3}/></th>
                    <th rowSpan={2}><Button value={'='}/></th>
                </tr>
                <tr>
                    <th><Button value={0}/></th>
                    <th><Button value={'('}/></th>
                    <th><Button value={')'}/></th>
                </tr>
            </thead>
        </table>
    )
}

