import React from 'react';
import one from '../../assets/1.png';
import two from '../../assets/2.png'
//import one from '../../assets/3.png'
//import two from '../../assets/4.png'




const TrackGrids = ({col1, tools1, tools2, col2}) => {
    return (
        <div>
             <div className="row justify-content-center">
                <div className="text-white d-flex align-items-center col-4 trackGrids">
                   <div className="mr-5 d-flex font-weight-bold">
                       <img src={one} alt="track_id" />
                   </div>
                   <div >
                        <p className="font-weight-bold">{col1}</p>  
                        <p>{tools1} </p> 
                   </div>
                 </div>

                 <div className="text-white d-flex align-items-center col-4 trackGrids">
                   <div className="mr-5 d-flex font-weight-bold">
                       <img src={two} alt="track_id" />
                   </div>
                   <div>
                        <p className="font-weight-bold">{col2}</p>  
                        <p>{tools2} </p> 
                   </div>
                 </div>
               
            </div>
        </div>
    )
}

export default TrackGrids
