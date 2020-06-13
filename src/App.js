import React, { Component } from "react";
import {Route,Switch} from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Posts from "./components/posts.jsx";
import Products from "./components/products.jsx";
import Product from "./components/product.jsx";
import ShowImages from "./components/Images.jsx";
class App extends Component{
    
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                 <div className="container">
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" render={()=><About element="in about"/>}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/posts" component={Posts}/> 
                        <Route path="/product/:id" component={Product}/>
                        <Route path="/Images" component={ShowImages}/>
                    </Switch>
                </div>
            </React.Fragment>
            
        )
    }
}
export default App;