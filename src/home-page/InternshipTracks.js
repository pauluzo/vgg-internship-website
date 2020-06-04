import React from 'react'
import InternshipTrackDetails from './Utils/InternshipTrackDetails'

const InternshipTracks = () => {
    return (
        <div>
              <div className="tracks">
        <h2 className="mb-5 green-text">Internship Tracks <br /> and Technologies</h2>
        <div className="row first">

        <InternshipTrackDetails 
            options={'C# | Java | Python (Separate tracks)'}
            tracks={'Backend Development'}
            TrackId={1}
        />
        <InternshipTrackDetails
            options={'HTML,CSS, & ReactJS'}
            tracks={'Frontend Development'}
            TrackId={2}

        />

        <InternshipTrackDetails
            tracks={'UI/UX Design'}
            options={'Figma'}
            TrackId={3}
        />
          
        <InternshipTrackDetails
            tracks={'Software QA/QT'}
            options={' Software testing & Quality assurance'}
            TrackId={4}
        />
       
        </div>
    </div>
        </div>
    )
}

export default InternshipTracks
