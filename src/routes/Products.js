import React from 'react'
import ProductCard from "components/appStyles/ProductCard";
import { AppLayout } from "components/appStyles/styles.tw";
const Products = () => {
  return (
    <AppLayout>
      <h1>Products</h1>
      <div class="grid gap-3 grid-cols-auto-fit">
          <ProductCard title="Jordan 4" price={699.00}/>
          <ProductCard title="Jordan 5" price={699.00}/>
          <ProductCard title="Kobe 3" price={399.00}/>
          <ProductCard title="Lebron 16" price={299.00}/>
      </div>
    </AppLayout>
  )
}

export default Products