import React from 'react';

export const MapDemo6 = () => {

   
  const products = [
    {id:1, name:"iPhone 15", category:"Electronics", price:79999, stock:25, rating:4.7, brand:"Apple", discount:10, isAvailable:true, createdAt:"2026-01-10"},
    {id:2, name:"Samsung Galaxy S24", category:"Electronics", price:69999, stock:30, rating:2.4, brand:"Samsung", discount:12, isAvailable:true, createdAt:"2026-02-15"},
    {id:3, name:"Nike Running Shoes", category:"Footwear", price:4999, stock:0, rating:4.3, brand:"Nike", discount:20, isAvailable:true, createdAt:"2026-03-01"},
    {id:4, name:"Adidas Sneakers", category:"Footwear", price:4599, stock:40, rating:4.2, brand:"Adidas", discount:18, isAvailable:true, createdAt:"2026-01-20"},
    {id:5, name:"Dell Inspiron Laptop", category:"Computers", price:55999, stock:15, rating:4.4, brand:"Dell", discount:15, isAvailable:true, createdAt:"2026-02-05"},
    {id:6, name:"HP Pavilion Laptop", category:"Computers", price:58999, stock:12, rating:4.3, brand:"HP", discount:14, isAvailable:false, createdAt:"2026-03-10"},
    {id:7, name:"Sony Headphones", category:"Accessories", price:2999, stock:60, rating:4.6, brand:"Sony", discount:25, isAvailable:true, createdAt:"2026-01-25"},
    {id:8, name:"Boat Earbuds", category:"Accessories", price:1499, stock:0, rating:4.1, brand:"Boat", discount:30, isAvailable:false, createdAt:"2026-02-18"},
    {id:9, name:"LG Smart TV", category:"Electronics", price:45999, stock:20, rating:4.5, brand:"LG", discount:17, isAvailable:true, createdAt:"2026-03-05"},
    {id:10, name:"Mi Smart Watch", category:"Wearables", price:3999, stock:0, rating:1.2, brand:"Xiaomi", discount:22, isAvailable:true, createdAt:"2026-01-30"},
    {id:11, name:"Puma T-Shirt", category:"Clothing", price:999, stock:80, rating:4.0, brand:"Puma", discount:35, isAvailable:true, createdAt:"2026-02-12"},
    {id:12, name:"Levi's Jeans", category:"Clothing", price:2499, stock:45, rating:4.4, brand:"Levis", discount:28, isAvailable:false, createdAt:"2026-03-08"},
    {id:13, name:"Canon DSLR Camera", category:"Electronics", price:65999, stock:10, rating:4.6, brand:"Canon", discount:13, isAvailable:true, createdAt:"2026-01-18"},
    {id:14, name:"Philips Trimmer", category:"Personal Care", price:1999, stock:55, rating:4.3, brand:"Philips", discount:20, isAvailable:true, createdAt:"2026-02-22"},
    {id:15, name:"Wildcraft Backpack", category:"Bags", price:1799, stock:65, rating:4.2, brand:"Wildcraft", discount:27, isAvailable:true, createdAt:"2026-03-12"}
  ];

  return (
    <div style={{textAlign:"center"}}>
      <h1>MapDemo6</h1>

      <table  class = "table table-dark" border="1" >
        
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>STATUS</th>
            <th>RATING</th>
            <th>BRAND</th>
            <th>DISCOUNT</th>
            <th>AVAILABILITY</th>
            <th>DATE</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map((prd) => {
              return (
                <tr>

                  <td>{prd.id}</td>

                  <td>{prd.name}</td>

                  {/* CATEGORY */}
                  <td style={{
                    color: prd.category === "Electronics" ? "blue" : "black",
                    fontStyle: prd.category === "Clothing" ? "italic" : "normal"
                  }}>
                    {prd.category}
                  </td>

                  {/* PRICE */}
                  <td style={{color: prd.price > 5000 ? "red" : "black", backgroundColor: prd.price < 2000 ? "lightgreen" : ""}}>₹{prd.price}</td>

                  {/* STOCK NUMBER */}
                  <td>{prd.stock}</td>

                  {/* STOCK STATUS */}
                  <td style={{color: prd.stock === 0 ? "red" : prd.stock < 10 ? "orange" : "green"}}>
                    {prd.stock === 0 ? "Out of Stock" : "In Stock"}
                  </td>

                  {/* RATING */}
                  <td style={{ fontWeight: prd.rating >= 4.5 ? "bold" : "normal",color: prd.rating < 3 ? "red" : "black"}}>
                    {prd.rating}
                  </td>

                  {/* BRAND */}
                  <td style={{ color: prd.brand === "Apple" || prd.brand === "Sony" ? "purple" : "black"}}>
                    {prd.brand}
                  </td>

                  {/* DISCOUNT */}
                  <td style={{backgroundColor: prd.discount > 20 ? "yellow" : "white"}}>
                    {prd.discount >= 25 ? "🔥 Hot Deal" : ""}
                  </td>

                  {/* AVAILABILITY */}
                 <td style={{ opacity: prd.isAvailable === false ? 0.5 : 1 }}>
                  {prd.isAvailable ? "Available" : "Not Available"}
                 </td>

                  {/* DATE */}
                  <td>{prd.createdAt}</td>

                </tr>
              );
            })
          }
        </tbody>

      </table>
    </div>
  );
};