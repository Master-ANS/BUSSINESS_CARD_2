
import { useState } from "react"

export function Createcard({cardAdded}){

    const [name , setName] = useState("");
    const [describe , setDescribe] = useState("");
    const [social , setSocial] = useState("");
    const [hobby , setHobby] = useState("");
    const [seen , setSeen] = useState("");

    return (
        <div>
            <input style = {{
                padding : 10,
                margin : 15
            }} type ="text" placeholder="Name" onChange={(e)=>{
                setName(e.target.value);
            }} ></input><br/>
            <input style = {{
                padding : 10,
                margin : 15
            }} type ="text" placeholder="description" onChange={(e)=>{
                setDescribe(e.target.value);
            }} ></input><br/>
            <input style = {{
                padding : 10,
                margin : 15
            }} type ="text" placeholder="Social_media" onChange={(e)=>{
                setSocial(e.target.value);
            }} ></input><br/>
            <input style = {{
                padding : 10,
                margin : 15
            }} type ="text" placeholder="interest" onChange={(e)=>{
                setHobby(e.target.value);
            }} ></input><br/>
            <input style = {{
                padding : 10,
                margin : 15
            }} type ="text" placeholder="status" onChange={(e)=>{
                setSeen(e.target.value);
            }} ></input><br/>
            <button onClick={async()=>{
                try{
                    const response = await fetch("http://localhost:3001/gettingCards",{
                    method : "POST",
                    body : JSON.stringify({
                        name : name,
                        description : describe,
                        social_media : social,
                        interest : hobby,
                        seen : seen
                    }),
                    headers : {
                        "Content-type" : "application/json"
                    }}
                );  
                    const data = await response.json();
                    alert("todo added");
                    cardAdded();
                }
                catch(error){
                    console.error("Error adding todo:", error);
                    alert("Failed to add todo");
                }
            }}>Add new card</button>
        </div>
    )
} 