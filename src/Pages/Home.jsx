import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from "../Components";

//rendering cards and passing the props to Card component.
const RenderCards = ({data,title}) => {
    if(data?.length > 0) {
      return data.map((post) => <Card key = {post.id} {...post} />)
    }

    return (
        <h2 className = "mt-5 font-bold text-[#f59145] text-xl uppercase">
          {title}
        </h2>
      )
    }
const Home = () => {
//fetch products from API.
     const [allProducts, setAllProducts] = useState(null);
    useEffect(() => {

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');

            if(response.status === 200) {
                const result = response.data.products;
                console.log(result);
                setAllProducts(result);
                console.log(allProducts);
            }
                } catch (error) {
         alert(error)
               }
    }

        fetchProducts();     

    }, [])
    

    return (
        <section className = "max-w-7xl mx-auto" >
          <div>
                <h1 className= "font-extrabold text-[#222328] text-[32px]" >
                Explore deals</h1>
                <p className= "mt-2 text-[#666e75] text-[16px] max-w-[500px]" >
                    Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards.
                </p>
           </div>
            <div className= "mt-10" >
               
                <div className= "grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3" >
                        <RenderCards 
                            data = {allProducts}
                            title = "No posts found"
                                />
                </div>                                               
        
            </div>   
        </section>
    )
}

export default Home;