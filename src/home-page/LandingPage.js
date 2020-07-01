import React from 'react'
import Navbar from './Navbar';
import Introduction from './Introduction';
import InternActivities from './InternActivities';
import InternshipTracks from './InternshipTracks';
import Instructors from './Instructors';
import Footer from './Footer';
import {connect} from 'react-redux'


const LandingPage = (props) => {
    const homeInformation = props.home
    return (
        <div>
            <Navbar />
            <Introduction 
                headerTitle={homeInformation.headerTitle}
                headerBody={homeInformation.headerBody}
                headerButton={homeInformation.headerButton}
            />
            <InternActivities 
                activitiesTitle={homeInformation.activitiesTitle}
                activities={homeInformation.activities}
            />
            <InternshipTracks 
                tracksTitle={homeInformation.tracksTitle}
                tracks={homeInformation.tracks}
            />
            <Instructors 
                instructorsTitle={homeInformation.instructorsTitle}
                instructors={homeInformation.instructors}
            />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}

export default connect(mapStateToProps)(LandingPage)
