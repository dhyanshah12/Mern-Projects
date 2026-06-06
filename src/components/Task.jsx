import React from 'react'

export const Task = () => {

    const products = [
        { id: 1, name: "iPhone 15", category: "Electronics", price: 79999, stock: 25, rating: 4.7, brand: "Apple", discount: 10, isAvailable: true, createdAt: "2026-01-10" },
        { id: 2, name: "Samsung Galaxy S24", category: "Electronics", price: 69999, stock: 30, rating: 2.4, brand: "Samsung", discount: 12, isAvailable: true, createdAt: "2026-02-15" },
        { id: 3, name: "Nike Running Shoes", category: "Footwear", price: 4999, stock: 0, rating: 4.3, brand: "Nike", discount: 20, isAvailable: true, createdAt: "2026-03-01" },
        { id: 4, name: "Adidas Sneakers", category: "Footwear", price: 4599, stock: 40, rating: 4.2, brand: "Adidas", discount: 18, isAvailable: true, createdAt: "2026-01-20" },
        { id: 5, name: "Dell Inspiron Laptop", category: "Computers", price: 55999, stock: 15, rating: 4.4, brand: "Dell", discount: 15, isAvailable: true, createdAt: "2026-02-05" },
        { id: 6, name: "HP Pavilion Laptop", category: "Computers", price: 58999, stock: 12, rating: 4.3, brand: "HP", discount: 14, isAvailable: false, createdAt: "2026-03-10" },
        { id: 7, name: "Sony Headphones", category: "Accessories", price: 2999, stock: 60, rating: 4.6, brand: "Sony", discount: 25, isAvailable: true, createdAt: "2026-01-25" },
        { id: 8, name: "Boat Earbuds", category: "Accessories", price: 1499, stock: 0, rating: 4.1, brand: "Boat", discount: 30, isAvailable: false, createdAt: "2026-02-18" },
        { id: 9, name: "LG Smart TV", category: "Electronics", price: 45999, stock: 20, rating: 4.5, brand: "LG", discount: 17, isAvailable: true, createdAt: "2026-03-05" },
        { id: 10, name: "Mi Smart Watch", category: "Wearables", price: 3999, stock: 0, rating: 1.2, brand: "Xiaomi", discount: 22, isAvailable: true, createdAt: "2026-01-30" },
        { id: 11, name: "Puma T-Shirt", category: "Clothing", price: 999, stock: 80, rating: 4.0, brand: "Puma", discount: 35, isAvailable: true, createdAt: "2026-02-12" },
        { id: 12, name: "Levi's Jeans", category: "Clothing", price: 2499, stock: 45, rating: 4.4, brand: "Levis", discount: 28, isAvailable: false, createdAt: "2026-03-08" },
        { id: 13, name: "Canon DSLR Camera", category: "Electronics", price: 65999, stock: 10, rating: 4.6, brand: "Canon", discount: 13, isAvailable: true, createdAt: "2026-01-18" },
        { id: 14, name: "Philips Trimmer", category: "Personal Care", price: 1999, stock: 55, rating: 4.3, brand: "Philips", discount: 20, isAvailable: true, createdAt: "2026-02-22" },
        { id: 15, name: "Wildcraft Backpack", category: "Bags", price: 1799, stock: 65, rating: 4.2, brand: "Wildcraft", discount: 27, isAvailable: true, createdAt: "2026-03-12" }
    ]
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Task</h1>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>CATEGORY</td>
                        <td>PRICE</td>
                        <td>STOCK</td>
                        <td>STATUS</td>
                        <td>RATING</td>
                        <td>BRAND</td>
                        <td>DISCOUNT</td>
                        <td>AVAILABLITY</td>
                        <td>DATE</td>

                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((p) => {
                            return <tr>

                                {/* {ID} */}
                                <td>{p.id}</td>

                                {/* {NAME} */}
                                <td>{p.name}</td>

                                {/* {CATEGORY} */}
                                <td style={{ color: p.category === "Electronics" ? "blue" : "black", fontStyle: p.category === "Clothing" ? "italic" : "white" }}>{p.category}</td>

                                {/* {PRICE} */}
                                <td style={{ color: p.price > 5000 ? "red" : "black", backgroundColor: p.price < 2000 ? "lightgreen" : "" }}>₹{p.price}</td>

                                {/* {STOCK} */}
                                <td style={{ color: p.stock < 10 ? "orange" : "green" }}>{p.stock}</td>

                                {/* {STOCK STATUS} */}
                                <td style={{ color: p.stock === 0 ? "red" : p.stock < 10 ? "orange" : "green" }}>{p.stock === 0 ? "Out of Stock" : "InStock"}</td>

                                {/* {RATING} */}
                                <td style={{ fontWeight: p.rating >= 4.5 ? "bold" : "normal", color: p.rating < 3 ? "red" : "black" }}>{p.rating}</td>

                                {/* {BRAND} */}
                                <td style={{ color: p.brand == "Apple" || p.brand == "Sony" ? "purple" : "black" }}>{p.brand}</td>

                                {/* {DISCOUNT}  */}
                                <td style={{ backgroundColor: p.discount > 20 ? "yellow" : "white" }}>{p.discount >= 25 ? "🔥 Hot Deal" : "-"}</td>

                                {/* {AVAILIBLITY} */}
                                <td style={{ opacity: p.isAvailable == false ? 0.5 : 1 }}>{p.isAvailable ? "Available" : "NotAvailable"}</td>

                                {/* {CREATEDAT} */}
                                <td>{p.createdAt}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


// 2.

// If stock === 0, show text "Out of Stock" in red, otherwise show **"In Stock" in green`.

