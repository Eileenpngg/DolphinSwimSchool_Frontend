import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context";
const ClassSchedule = () => {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const nowDate = new Date().toISOString().split("T")[0];
  const currentDay = weekDay[new Date().getDay()];
  const userCtx = useContext(UserContext);
  const [sessions, setSessions] = useState();
  const [schedule, setSchedule] = useState();

  const handleClick = (e) => {
    const instructor_name = userCtx.userDetails.name;
    const date = nowDate;
    const session_id = e.target.value;
    getSchedule({ instructor_name, date, session_id });
  };
  
  //To populate sessions drop down
  async function getSessions(url = "http://127.0.0.1:5001/api/sessions/get") {
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
      setSessions({ ...jResponse });
    }
    return jResponse;
  }

  //To get schedule
  async function getSchedule({
    url = "http://127.0.0.1:5001/api/schedule/get",
    instructor_name,
    date,
    session_id,
  }) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ instructor_name, date, session_id }),
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setSchedule({ ...jResponse });
    }
    return jResponse;
  }

  useEffect(() => {
    getSessions();
  }, []);
  return (
    <>
      <section
        style={{
          marginTop: "10vh",
        }}
      >
        <h2
          className="display-5 text-center"
          style={{
            color: "#FFFFFF",
          }}
        >
          <u>Class Schedule For The Day</u>
        </h2>
        <section className="container-md" id="book_class">
          <div className="row justify-content-center align-items-end mb-4">
            <div className="col-4 mt-4 text-center">
              <div class="card">
                <div class="card-body">Date: {nowDate}</div>
              </div>
            </div>
            <div className="col-4 mt-4 text-center">
              <div class="card">
                <div class="card-body">Day: {currentDay}</div>
              </div>
            </div>
            <div className="col-4 mt-4 text-center">
              <div class="card">
                <div class="card-body">Level: {userCtx.userDetails.level}</div>
              </div>
            </div>

            <div className="row justify-content-center align-items-end mb-4">
              <div class="accordion" id="accordionExample">
                {sessions
                  ? Object.values(sessions).map((session) => (
                      <div class="accordion-item mt-4">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseOne${session.id}`}
                            aria-expanded="true"
                            aria-controls={`collapseOne${session.id}`}
                            value={session.id}
                            onClick={(e) => handleClick(e)}
                          >
                            {session.start_time} - {session.end_time}
                          </button>
                        </h2>
                        <div
                          id={`collapseOne${session.id}`}
                          class="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <strong>Students Name</strong>{" "}
                            {schedule
                              ? Object.values(schedule).map((name) => (
                                  <p>{name.name}</p>
                                ))
                              : ""}
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default ClassSchedule;
