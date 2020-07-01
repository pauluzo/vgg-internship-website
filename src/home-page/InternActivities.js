import React from 'react'

const Activitiescard = (props) => {
    return (
        <div className="py-3 mb-3 media pl-xl-4 pr-xl-4 col-xl-10">
            <img src={props.activityIcon} className="mr-4 media-img" alt={props.activityTitle} />
            <div className="media-body">
                <h5 className="mb-2">{props.activityTitle}</h5>
                <p className="pr-5" style={{fontSize: "16px"}}>
                    {props.activityContent}
                </p>
            </div>
        </div>
    )
}
const InternActivities = (props) => {
    const activities = props.activities
    const activitiesComponent = activities.map((activity, index) => (
    <Activitiescard 
        key={index} 
        activityIcon={activity.activityIcon} 
        activityTitle={activity.activityTitle} 
        activityContent={activity.activityContent} 
    />))
    return (
        <div>
             <div className="activities mx-sm-auto px-sm-auto">
        <div>
            <div className="row activies-row">
                <div className="col-lg-6">
                    <h2 className="learn-and-fun">{props.activitiesTitle.slice(0,4)}<span className="green">{props.activitiesTitle.slice(4,9)}</span><br/>{props.activitiesTitle.slice(9,18)}<span className="orange">{props.activitiesTitle.slice(18,)}</span></h2>
                </div>
            </div>
            <div className="row activities-row">
                <div className="col-lg-6">
                    <p className="mt-4 text-uppercase font-weight-bold intern">INTERNSHIP ACTIVITIES</p>
                    <div>
                        {activitiesComponent}
                    </div>
                </div>
                <div className="col-lg-6 pix">
                    <div className="learning-pics">
                        <div className="col-9">
                            <img src="https://i.ibb.co/v383CsS/jefferson-santos-9-So-Cny-Qmkz-I-unsplash-1.png" alt="man coding"/>
                        </div>
                       <div className="col-9">
                            <img src="https://i.ibb.co/x7QNCLd/chris-montgomery-smg-Tvepind4-unsplash-1.png" alt="virtual chat"/>
                       </div>
                        <div className="col-9">
                            <img src="https://i.ibb.co/m4WgfcD/nesa-by-makers-Ig-UR1i-X0mq-M-unsplash-1.png" alt="interns colloborating"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default InternActivities
