import { FcSearch } from "react-icons/fc";
import { BsBuildingAdd } from "react-icons/bs";
export default function Sidebar() {

    return (
        <div className="m-3 p-2">
            
            <h4 className="border-bottom">Survey</h4>
            <div>
                <b className="text-info mt-3"><FcSearch />My surveys</b>
                <div className="mt-3"><BsBuildingAdd />Requested Surveys</div>
                <div className="styles">
                    "Hard work will pay off later,laziness"<br/>
                                               -Adam Smith

    
                </div>

            </div>

        </div>
    )


}