import React from 'react'
import Navbar from './Navbar';
import Internship from './Internship'
import Introduction from './Introduction';
import InternActivities from './InternActivities';
import InternshipTracks from './InternshipTracks';
import Instructors from './Instructors';
import Footer from './Footer';


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Internship />
            <InternActivities />
            <InternshipTracks />
            <Instructors />
            <Footer />
        </div>
    )
}

export default LandingPage
