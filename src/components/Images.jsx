import React from "react";

const ShowImages=(props)=>{
    console.log(props);
return(
    <div className="row" >
      {
        props.show.map(data=>(
            <div className="card text-left" key={data.id} style={{height:"190px",width:"230px",margin:"10px"}}>
                <img className="card-img-top" src={data.largeImageURL} alt=""/>
        <h5 className="card-title">{data.tags}</h5>
            </div> 
))
     }  
    </div>
)

}
export default ShowImages;