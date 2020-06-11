import React from 'react'

const InternshipTrackDetails = ({TrackId, tracks, options}) => {
    return (
        <>
             <div className="col-lg-6">
                <div className="py-3 mb-3 media-2 pr-xl-4 col-xl-11">
                    <span className="mr-4">{TrackId}</span>
                    <div className="media-body">
                      <h5 className="mb-2">{tracks}</h5>
                     {options}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InternshipTrackDetails
