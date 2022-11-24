import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product1 from './Product1'

function Products() {
    return (
        <div>
            <Link to="/products/product1">
                <button>
                    product 1
                </button>
            </Link>
            <button>
                product 2
            </button>

            <Routes>
                <Route path="/product1" element={<Product1 />} />
                {/* <Route path="/products/product1/:productid" element={<Product1 />} />
                <Route path="/products/product2" element={<Product1 />} /> */}
            </Routes>
        </div>
    )
}

export default Products