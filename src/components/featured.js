import React from 'react';
import Slider from 'react-slick';


const settings={
    arrow:false,
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1
    }


    const generateSlides=({slides})=>{
        if(slides){
            return (
                <Slider {...settings}>
                    {slides.map((item)=>{
                        return(
                            <div key={item.id} className="item-slider"
                               //style={{backgroundImage:`url(/images/covers/${item.cover})`}}
                            
                                   >
                                       <div 
                                       style={{backgroundImage:`url(/images/covers/${item.cover})`,width:'100%',height:'700px'}}
                                       
                                       >

                                      
                                       
                                       
                                    
                                    <div className="caption">
                        <h4>{item.topic}</h4>
                        <p>{item.title}</p>
                        </div>
                            </div>
                            </div>
                        );
        
        
                    })
                }
                </Slider>
            )
            
        
        }
        }






const Featured=(props)=>{
console.log(props)
return(
<div>

{generateSlides(props)}    

</div>
)


}
export default Featured;