import React from 'react';


const TravelCard = (props) => {


    return (
        <div className="card-container">
            <div className="card">
                <img src={props.item.imageUrl} alt="" className="card-image" />
                <div className="card-info-container">
                    <div className="maps-title">
                        <div className="maps-container">
                            <img src="/gmicon.svg" className="maps-icon" />
                            <p className="country">{props.item.location}</p>
                            <p className="maps-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                        </div>
                        <p className="title">{props.item.title}</p>
                    </div>
                    <div className="dates-description">
                        <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                        <div className="description">{props.item.description}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TravelCard