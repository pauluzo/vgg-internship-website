import React from 'react'
import InstructorDetails from './Utils/InstructorDetails'
import {Carousel} from 'react-bootstrap';

const Instructors = (props) => {
    const instructors = props.instructors
    return (
        
            <div className="instructors">
    <h2 className="mb-5 text-center">{props.instructorsTitle}</h2>
    <div className="">

    <Carousel>
  <Carousel.Item>
        <InstructorDetails
            InstructorName={instructors[0].instructorName}
            InstructorTrack={instructors[0].instructorTrack}
            InstructorImage={instructors[0].instructorImage}
            
        />
  </Carousel.Item>
  <Carousel.Item>
        <InstructorDetails
            InstructorName={instructors[1].instructorName}
            InstructorTrack={instructors[1].instructorTrack}
            InstructorImage={instructors[1].instructorImage}
        />
  </Carousel.Item>

  <Carousel.Item>
        <InstructorDetails
            InstructorName={instructors[2].instructorName}
            InstructorTrack={instructors[2].instructorTrack}
            InstructorImage={instructors[2].instructorImage}
        />
  </Carousel.Item>

  <Carousel.Item>
       <InstructorDetails
            InstructorName={instructors[3].instructorName}
            InstructorTrack={instructors[3].instructorTrack}
            InstructorImage={instructors[3].instructorImage}
        />
  </Carousel.Item>
 </Carousel>   
</div>
</div>
    
    )
}

export default Instructors




