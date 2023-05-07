import { Link } from "react-router-dom"
import img from "./Images/img.png";

export default function Body() {

    return (
        <>
            <div className="card text-dark bg-light mb-3" >
                <div className="card-header">

                    <h5><span className="text-primary">Create Survey</span> - Career skills Feedback</h5>
                    <p>Home / My Survey /<span className="text-primary"> Create Survey </span></p>

                </div>
                <div className="d-flex w-100">
                    <div className="card-body w-50">
                        <span className="card-title d-flex justify-content-evenly">Question 1
                            <div className="float-end">
                                <span>Required</span>

                                <div className="form-check form-switch float-end ">

                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="sdropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                single Choice
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button className="dropdown-item" type="button">
                                        <Link to="/survey"> Yes/No</Link>
                                       </button></li>
                                      </ul>
                            </div>

                        </span>

                        <div>
                            <input type="text" className="w-50 border-bottom p-2 m-4 " placeholder="Type Your Question Here" />


                        </div>

                        <input type="text" className="p-2 m-4 btn btn-outline-warning" placeholder="Option 1" />

                        <input type="text" className="p-2 m-4 btn btn-outline-warning" placeholder="Option 2" />
                        <div>
                            <button className="btn btn-outline-primary p-2 m-4">+Add More Questions</button>
                        </div>
                    </div>
                    <div className=" mb-3 mt-5 m-auto w-25 h-style shadow">
                        <div className="border-bottom p-3">
                            Questions List
                        </div>
                        <p className="text-center">
                            Questions asked will <br />be visible here
                        </p>
                        <div className="mx-auto w-25">
                            <img src={img} alt="this is image" />
                        </div>

                    </div>
                </div>


                <div className="card-footer stylesfoot">

                    <button className="btn btn-outline-secondary">+  Add new Questions </button>
                    <button className="btn btn-outline-info float-end"> Share Survey</button>

                </div>
            </div>
        </>



    )


}