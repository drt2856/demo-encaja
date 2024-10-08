import { useState } from "react"

export function useGain() {


    const [showGain, setShowGain] = useState(!get() ? false : get())

    function get() {
        return JSON.parse(localStorage.getItem("showGain"))
    }
    function set(data) {
        return localStorage.setItem("showGain", JSON.stringify(data))
    }

    function seeShow(component) {
        if (showGain == true) {
            return component
        } else {
            return ""
        }
    }

    function settingShowGain(event) {
        set(event.target.checked)
        setShowGain(event.target.checked)
    }

    const checkShowGain = <div>
        <label htmlFor="">Mostrar ganancias</label>
        <input
        style={{width:25, height:25}} 
         type="checkbox" 
         id="ckecked" 
         checked={showGain}
         onChange={settingShowGain} 
         />
    </div>


    return ({
        seeShow,
        checkShowGain
    })

}