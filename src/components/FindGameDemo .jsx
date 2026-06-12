import React, { useMemo, useState } from 'react'

export const FindGameDemo = () => {

    const gridSize = 5
    var totalTiles = gridSize * gridSize
    const [clickedTiles,setclickedTiles]= useState([])
    const[isGameover,setisGameover] = useState(false)

    const clickHandler=(index)=>{
        setclickedTiles([...clickedTiles,index])
        if(index==randomNo)
        {
            setisGameover(true)
        }
    }

    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*totalTiles) 
    },[])
    console.log(randomNo);
    const  score = clickedTiles.length
    return (
        <div style={{ textAlign: "center" }}>
            <h1>FindGameDemo</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${gridSize},50px)`,
                    gap: "10px",
                    justifyContent: "center"
                }}>
                {
                    Array.from({ length: totalTiles }).map((_, index) => {
                        return (
                            <div
                            onClick={()=>{clickHandler(index)}}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid black",
                                    backgroundColor: clickedTiles.includes(index)?"gray":"white",
                                    cursor: "pointer",
                                    pointerEvents:isGameover?"none":"auto"
                                }}>
                                {
                                    (isGameover && randomNo === index && "💣") || index
                                }
                            </div>
                        
                        )
                        
                    })
                }
               
            </div>
             <div>
                    <h1>Score = {score}</h1>
                </div>
            <button onClick={()=>{setisGameover(false),setclickedTiles([])}}>Restart</button>
        </div>
        
    )
}
