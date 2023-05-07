import { BsFillBellFill } from 'react-icons/bs';
import { BiChevronDown } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
export default function Her() {

    return (
        <div className="bg-primary ">
           <div className="d-flex justify-content-evenly text-style">
            <div>Learn <BiChevronDown/></div>
            <div>Network <BiChevronDown /></div>
            <div>Evaluate <BiChevronDown/></div>
            <div>Jobs</div>
            <div>

                1305
                <p>Profile score</p>
            </div>
            <div>
                400
                <p>Tokens</p>
            </div>
            <div>
                <FcCalendar style={{fontSize:"35px"}}/>
            </div>
            <div>
                <BsFillBellFill style={{fontSize:"35px"}}/>
            </div>
            <div>
                <FiUser style={{fontSize:"35px"}}/>
                Chandra
                <BiChevronDown style={{fontSize:"25px"}}/>

            </div>
           </div>

        </div>
    )


}