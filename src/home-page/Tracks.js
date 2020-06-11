import React from 'react'
import TrackGrids from './TrackGrids'
import './LandingPage.css';


const Tracks = () => {
    return (
        <div className="background">
            <div className="green-text">
               <h2>Internship Tracks<br/>
               and Technologies</h2>
            </div>
            <TrackGrids
                col1={'Backend Development'} 
                tools1={'C#, Python, Java (Three individual tracks)'}
                col2={'Frontend Development'}
                tools2={'HTML, CSS , ReactJS'}
            />
            <TrackGrids
                col1={'UI/UX Design'}
                tools1={'Figma'}
                col2={'Software QA/QT'}
                tools2={'Software Testing and Quality Assurance'}
             />
        </div>
    )
}

export default Tracks
