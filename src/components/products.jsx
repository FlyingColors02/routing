import React, { Component } from "react";
import { Link } from "react-router-dom";
class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[{
                id:1,
                name:"product1"
            },
            {
                id:2,
                name:"product2"
            },
            {
                id:3,
                name:"product3"
            }]
        }
    }
 render(){
        return(
            <div>
                <h1>products section</h1>
                {
                    this.state.products.map((item)=>
                    <ul key={item.id}>
                        <li>
                            <Link to={`/product/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    </ul>)
                }

            </div>
        )
    }
    
}
export default Products;