import React from 'react'
import InternshipTrackDetails from './Utils/InternshipTrackDetails'

const InternshipTracks = (props) => {
    const tracks = props.tracks.map((track, index) => (
    <InternshipTrackDetails 
        key={index} 
        options={track.trackText} 
        tracks={track.trackHeader}
        TrackId={index + 1}
    />))
    return (
        <div>
              <div className="tracks">
        <h2 className="mb-5 pr-5 green-text">{props.tracksTitle}</h2>
        <div className="row first">
            {tracks}
        </div>
    </div>
        </div>
    )
}

export default InternshipTracks
