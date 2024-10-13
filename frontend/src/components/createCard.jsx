import { useState } from "react"

export function createCards({todoAdded}){

    const [name , setName] = useState("");
    const [describe , setDescribe] = useState("");
    const [social , setSocial] = useState("");
    const [hobby , setHobby] = useState("");

    return (
        <div>
            <input style {{
                padding : 10,
                margin : 15
            }} type ></input>
        </div>
    )

}