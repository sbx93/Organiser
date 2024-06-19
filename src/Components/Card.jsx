import { useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Card({stage}) {
    const [show, setShow] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [dateBooked, setDateBooked] = useState(new Date());
    const onChange = () => {
        setShow(!show);
        console.log(show);
    }
    return (
        <div className={show ? "border-2 mb-2 p-2" : "hidden"}>
            <div className="flex h-20">
                <h1 className="font-bold text-xl">{stage}</h1>
                <button className="ml-auto border p-2 h-10" onClick={onChange}>Completed</button>
            </div>
            <p>Date booked:</p>
            <DatePicker className="border-2 border-gray-600"
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                        }
                        }
                        showIcon
            />
            <p>Date completed:</p>
            <DatePicker className="border-2 border-gray-600"
                        selected={dateBooked}
                        onChange={(date) => {
                            setDateBooked(date)
                        }
                        }
                        showIcon
            />
        </div>
    );
}

export default Card;
