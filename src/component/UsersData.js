import React, { useState } from "react";

import axios from "axios";
function UserData(){

    const [data,setData]= useState([])
    const getNews =() =>{
        axios.get(" https://gnews.io/api/v4/top-headlines?token=dbfdf1f82e13569655d05c666c1b0563")
        .then((Response)=>{
          console.log(Response);
          setData(Response.data.articles)
        })
    }
    return(
        <>
        <div className="container my-3">
            <button className="btn btn-primary" onClick={getNews} >fetch News</button>

        </div> 

        <div>
            <div className="row">
                {
                data.map((value)=>{
                    return(
                        
                        <div className="col-3" > 

                <div  className="card" style={{width: "18rem"}}>
                <img src={ value.image}className="card-img-top" alt="..."/>
                <div className="card-body">
 
                  <h5 className="card-title">{value.title}</h5>
                     <p className="card-text">{value.description}</p>
                     
                
        </div>
        </div>

                </div>

                    )

                })
            }
            </div>

        </div>
        </> 
    )
}

export default UserData;