import React from "react";
import Keyboard from './Keyboard'
import Screen from './Screen'

export default function BodyCalc() {
    return (
        <div id="interface" className="container-xl">
            <Screen />
            <Keyboard />
        </div>

    )
}