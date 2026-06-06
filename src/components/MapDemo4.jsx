import React from 'react'

export const MapDemo4 = () => {

    var list = [

        {id:1,Productname:"Tea",qty:1,price:1000},
        {id:2,Productname:"Gud",qty:2,price:2000},
        {id:3,Productname:"Pickle",qty:3,price:3000},
        {id:4,Productname:"Haldi",qty:4,price:4000},
        {id:5,Productname:"Ghee",qty:5,price:5000}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo4</h1>
       {
            <table border={5} class = "table table-dark">
                    <thead>
                            <tr>
                                <th>ID</th>
                                <th>PRODUCTS</th>
                                <th>QTY</th>
                                <th>PRICE</th>
                            </tr>
                    </thead>
                    <tbody>
                            {
                                list.map((m)=>{
                                    return <tr>
                                            <td>{m.id}</td>
                                            <td>{m.Productname}</td>
                                            <td>{m.qty}</td>
                                            <td>{m.price}</td>
                                    </tr>
                                })
                            }
                    </tbody>
            </table>
       }
    </div>
    
  )
}
