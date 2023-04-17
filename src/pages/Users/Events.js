import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context";
import EditEventForm from "../Instructors/EditEventForm";
import ViewDetails from "../Instructors/ViewDetails";
const Events = () => {
  const userctx = useContext(UserContext);
  const navigate = useNavigate();
  const [events, setEvents] = useState();
  const [eventId, setEventId] = useState();
  const [selected, setSelected] = useState(0);
  const [deleteId, setDeleteId] = useState();
  const userCtx = useContext(UserContext);

  const handleSignUp = (e) => {
    setEventId(e.target.key);
    setSelected(e.target.value);
    const data = { user_id: userCtx.userDetails.id, event_id: e.target.value };
    console.log(data)
    eventSignUp({ data });
  };

  const handleDelete = async (e) => {
    console.log(e.target.value)
    await setDeleteId(e.target.value)
    await deleteEvent()
    getEvents()
  }


  //Gets list of events
  async function getEvents(url = "http://127.0.0.1:5001/api/events/get") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setEvents({ ...jResponse });
    }
    return jResponse;
  }

  //Sign up for event
  async function eventSignUp({
    url = "http://127.0.0.1:5001/api/event/signup",
    data,
  }) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      console.log({ ...jResponse });
    }
    return jResponse;
  }

  //Delete Event
  async function deleteEvent(
    url = `http://127.0.0.1:5001/api/event/${deleteId}`,
  ) {
    console.log(url)
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      console.log({ ...jResponse });
    }
    return jResponse;
  }

  useEffect(() => {
    getEvents();
  },[]);

  return (
    <>
      <h1 className="text-center m-4" style={{color:'#FFFFFF'}}>
        <u>Events</u>
      </h1>
      {events
        ? Object.values(events).map((event) => (
            <div className="row justify-content-center align-items-end mb-4">
              <div className="col-1"></div>
              <div className="col-4 d-flex justify-content-center flex-row  h-50">
                <img
                  src={event.image}
                  alt="title"
                  className="bg-dark"
                  width="400"
                />
              </div>
              <div className="col-3 d-flex flex-column align-item-center h-50">
                <h1 className="text-center m-4" style={{color:'#FFFFFF'}}>{event.title}</h1>
                <p style={{color:'#FFFFFF'}}>
                  Date: {event.start_date} - {event.end_date}
                </p>
                <p style={{color:'#FFFFFF'}}>
                  Time: {event.start_time} - {event.end_time}
                </p>
                <p className={`text-start d-flex m-0`} style={{color:'#FFFFFF'}}>{event.description}</p>
              </div>
              <div className="col-3 d-flex flex-column h-100">
                {userctx.userDetails.is_instructor ? <EditEventForm event={event}/> : " "}
                {userctx.userDetails.is_instructor ? (
                  <ViewDetails event={event}/>
                ) : (
                  <button
                    key={event.id}
                    className="btn btn-secondary w-25 mt-4 p-1"
                    type="submit"
                    disabled={event.id.toString() === selected ? true : false}
                    value={event.id}
                    onClick={(e) => handleSignUp(e)}
                    style={{
                      backgroundColor:
                    event.id.toString() === selected ? "red" : "",
                    }}
                  >
                    {event.id.toString() === selected ? "Signed Up" : "Sign up"}
                  </button>
                )}
                {userctx.userDetails.is_instructor ? (
                  <button
                    value={event.id}
                    className="btn btn-secondary w-25 mt-4"
                    type="submit"
                    onClick={(e)=>handleDelete(e)}
                  >
                    Delete event
                  </button>
                ) : (
                  " "
                )}
              </div>
            </div>
          ))
        : console.log(null)}
      <div className="row justify-content-center align-items-end mb-4">
        {userctx.userDetails.is_instructor ? (
          <button
            className="btn btn-info w-25 mt-4 text-center"
            type="submit"
            onClick={() => navigate("/event-form")}
          >
            Add New Event
          </button>
        ) : (
          " "
        )}
      </div>
    </>
  );
};

export default Events;
