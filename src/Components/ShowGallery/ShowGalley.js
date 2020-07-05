import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ShowGalley.css'

const ShowGallery = (props) => {
    const {images} = props;
    const MyImage = images.images;
    let dis = props.display;
    const display = MyImage.map((element) => {
        if(element.type == dis)
            return(
                        <img src={require("../Images/"+element.src+"") } />
                )
        else if(dis == 'General Section'){
            return(
                <img src={require("../Images/"+element.src+"") } />
            )
        }
        
            }
        
   
        
    );
    
    const check = () =>{if(dis == "notFound"){
        return (
            <div>Not Items were found</div>
        )
    } 
}
    return (
        <div className="container">  
           {display}
        </div>
      );
}


export default ShowGallery;