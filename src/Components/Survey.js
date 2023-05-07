import { Link } from "react-router-dom";
import img from "./Images/img.png";
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";

import { MdCancel } from "react-icons/md";

export default function Survey() {
    return (
        <div>

            <>
                <div className="card text-dark bg-light mb-3" >
                    <div className="card-header">

                        <h5><span className="text-primary">Create Survey</span> - Career skills Feedback</h5>
                        <p>Home / My Survey /<span className="text-primary"> Create Survey </span></p>

                    </div>
                    <div className="d-flex w-100">
                        <div className="card-body w-50">
                            <span className="card-title d-flex justify-content-evenly">Question 2
                                <div className="float-end">
                                    <span>Required</span>

                                    <div className="form-check form-switch float-end ">

                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="sdropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Yes/No
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><button className="dropdown-item" type="button">
                                            <Link to="/survey">single Choice </Link>
                                        </button></li>
                                    </ul>
                                </div>


                            </span>

                            <div>
                                <input type="text" className="w-50 border-bottom p-2 m-4 " placeholder="Should i start with ui development?" />


                            </div>

                            <div className="d-flex m-4 p-2">
                                <div className="card btn btn-outline-warning"><BsHandThumbsUpFill style={{ fontSize: "30px" }} /> Yes</div>
                                <div className="card ms-2 btn btn-outline-warning"><BsHandThumbsDownFill style={{ fontSize: "30px" }} /> No</div>
                            </div>
                        </div>
                        <div className=" shadow w-style" >
                            <div className="border-bottom p-3">
                                Questions List
                            </div>
                            <div className="border border-warning rounded-pill m-2 p-2 d-flex">What is My biggest strength
                                <span className="float-end">
                                    <MdCancel /></span>
                            </div>
                            <div className="border border-warning  p-2 rounded-pill m-2 d-flex">Which softwares are good to get started with basic UI design?<span className="float-end">
                                <MdCancel /></span></div>
                            <div className="border border-warning rounded-pill p-2 m-2 d-flex">How will you define design?
                                <span className="float-end">
                                    <MdCancel /></span>
                            </div>
                            <div className="border border-warning rounded-pill p-2 m-2 d-flex">Explain why sketch is better than AdobeXD.And also is there any repalcement?
                                <span className="float-end">
                                    <MdCancel /></span></div>
                            <div className="border border-warning rounded-pill p-2 m-2 d-flex">How good am i in Adobe Photoshop?<span className="float-end">
                                <MdCancel /></span></div>
                            <div className="border border-warning rounded-pill p-2 m-2 d-flex">Rate me in communication skills
                                <span className="float-end">
                                    <MdCancel /></span>
                            </div>


                        </div>
                    </div>


                    <div className="card-footer stylesfoot">

                        <button className="btn btn-outline-secondary">+  Add new Questions </button>
                        <button className="btn btn-outline-info float-end"> Share Survey</button>

                    </div>
                </div>
            </>




        </div>
    )
}