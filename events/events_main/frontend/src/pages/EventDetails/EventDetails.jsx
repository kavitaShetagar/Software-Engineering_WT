import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);
  const navigate = useNavigate();

  const filteredEvent = eventList.find(
    (eventDetail) => eventDetail.id === numId
  );

  const handleRegister = () => {
    navigate("/register", { state: { clubName: filteredEvent.heading } });
  };

  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Club Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">{filteredEvent.date.month}</span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Club Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>

          <div className="event-details">
            <h4>Upcoming Events</h4>
            <div className="event-cards">
              {filteredEvent.events?.map((event, index) => (
                <div key={index} className="event-card">
                  <h5>{event.eventName}</h5>
                  <p className="event-date">
                    <MdCalendarMonth className="icon" /> {event.eventDate}
                  </p>
                  <p className="event-time">
                    <i className="far fa-clock"></i> {event.eventTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
