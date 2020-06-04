import React from 'react'

const InstructorDetails = ({InstructorName, InstructorTrack, InstructorImage}) => {
    return (
        <>
            <div className="item col-4">
                <img className="vector" src="https://i.ibb.co/f1Sh0Vq/Vector-2.png" alt="placeholder" border="0"/>
                <img className="tutor" src={InstructorImage} alt={InstructorName} />
                <div style={{textAlign:"center"}}>
                    <h5>{InstructorName}</h5>
                    <p className="instructor-text">{InstructorTrack} </p>
                </div>
            </div>
        </>
    )
}

export default InstructorDetails
