import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
const EventForm=()=>{
        // To Do: Connect to back end 
        // Convert time to unix before sending to backend
        //Autopoulate name, level, contact and age
    
        const navigate= useNavigate();
    
     //react-hook-forms functionality
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        console.log(data)
        createEvent({data})
        navigate('/create-event-success')
      };
      
      const onError = (errors) => {
        console.log(errors);
      };

      // Creates Event
      async function createEvent({
        url = "http://127.0.0.1:5001/api/event/create", 
        data
      }) 
          {
        console.log(url)
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
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

        return(
          
            <div>
              <h1 className="display-5 text-center">Event Form</h1>
                  <section className="container-md" id="book_class">
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <h5 className="m-4"><u>Picture</u></h5>
                    <div className="form-outline m-4 row justify-content-start">
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Insert image url"
                            {...register("image", {
                              required: {
                                value: true,
                                message: "Please insert image url"
                              },
                            })}
                          />
                          <p className="text-danger text-center mt-2">{errors.image?.message}</p>
                        </div>
                        <div className='col-md-4'></div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2 flex-column">
                            <button className="btn btn-secondary w-100 mb-4" type='submit'>Add Event</button>
                            <button className="btn btn-secondary w-100" type='cancel' onClick={()=>navigate('/instructor')}>Cancel</button>
                        </div>             
                      </div> 
                      <h5 className="m-4"><u>Event Details</u></h5>
                        <div className="form-outline m-4 row justify-content-start">
                        <div className="col-md-4">
                          <textarea
                            type="description"
                            className="form-control"
                            placeholder="description"
                            {...register("description", {
                              required: {
                                value: true,
                                message: "Please enter description"
                              },
                            })}
                          />
                          <p className="mt-2 text-danger text-center">{errors.description?.message}</p>
                        </div>
                        <div className="col-md-4 text-end">
                          <input
                            type="title"
                            className="form-control"
                            placeholder="Event Title"
                            {...register("title", {
                              required: {
                                value: true,
                                message: "Please enter event title"
                              },
                            })}
                          />
                          <p className="mt-2 text-danger text-center">{errors.title?.message}</p>
                        </div>
                        </div>

                      <div className="form-outline m-4 row justify-content-start">
                        <div className="col-md-4">
                          <input
                            type="date"
                            className="form-control mt-2"
                            placeholder="Start Date"
                            {...register("start_date", {
                              required: {
                                value: true,
                                message: "Please insert start date"
                              },
                            })}
                          />
                        <p className="mt-2 text-danger text-center">{errors.start_date?.message}</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            type="date"
                            className="form-control mt-2"
                            placeholder="End Date"
                            {...register("end_date", {
                              required: {
                                value: true,
                                message: "Please insert end date"
                              },
                            })}
                          />
                          </div>
                        <p className="mt-2 text-danger text-center">{errors.end_date?.message}</p>

                        <div className="col-md-1"></div>
                        <div className="col-md-3 align-self-end">
                        </div>
                        </div>
                        <div className="form-outline m-4 row justify-content-start">
                        <div className="col-md-4">
                          <input
                            type="time"
                            className="form-control mt-2"
                            placeholder="Preferred Time"
                            {...register("start_time", {
                              required: {
                                value: true,
                                message: "Please insert start time"
                              },
                            })}
                          />
                        <p className="mt-2 text-danger text-center">{errors.start_time?.message}</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            type="time"
                            className="form-control mt-2"
                            placeholder="End_time"
                            {...register("end_time", {
                              required: {
                                value: true,
                                message: "Please insert end time"
                              },
                            })}
                          />
                        <p className="mt-2 text-danger text-center">{errors.end_time?.message}</p>
                        <div className="col-md-4"></div>
                        <div className="col-md-2">
                        <img src="/xlab_logo.png" alt="" width="300px"/>
                        </div>
                        </div>
                        </div>
                    </form>
                  </section>
                </div>
            )
}
export default EventForm