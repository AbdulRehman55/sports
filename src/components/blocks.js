import React from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';


const generateBlocks=({blocks})=>{
    if(blocks){
        return blocks.map((item)=>{
            return(
                <div className='item'>
                <Reveal key={item.id} effect="animated fadeInUp" className={`${item.type}`}>
                    <div className="veil"></div>
                    <div className="image"
                   style={{background:`url(/images/blocks/${item.image}) no-repeat`}}
                    >
                       
                    </div>
                    
                    <div className="title">
            <Link to={item.link}>{item.title}</Link>
                    </div>
                    
                </Reveal>
                </div>
            
            )
        })


    }
}

const Blocks=(props)=>{
    return(
        
        
        <div className="home_blocks">
            {generateBlocks(props)}
            
        </div>
        
    )

}
export default Blocks;