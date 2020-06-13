import React, { Component } from "react";
import Axios from "axios";
import ShowImages from "./Images";


class Product extends Component{
constructor(props){
    super(props);
    this.state={
        dataImages:[],
    }
}
async componentDidMount(){
    let response= await Axios.get(
        "https://pixabay.com/api/?key=16049560-3ba9262f7dc76fbd5f3772390&q=yellow+flowers&image_type=photo");
        this.setState({dataImages:response.data.hits});
        console.log(response.data.hits);
}
    render(){
        return(
            <div className="row">
                <ShowImages show={this.state.dataImages}/>
            </div>
        )
    }
}

export default Product;