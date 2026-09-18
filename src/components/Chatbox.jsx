import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Chatbox () {

    const {res} = useContext(AppContext);

    return(
        <div>
            {
                res
            }
        </div>
    )

}