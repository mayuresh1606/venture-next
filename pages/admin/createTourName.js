import {useState} from "react";
import axios from "axios"
export default function CreateTourName(){
    const [message, setMessage] = useState();
    const [formValues, setFormValues] = useState({});
    const handleSubmit = async(e) => {
        try{
            e.preventDefault();
            const {data} = await axios.post("/api/tourhead", formValues);
            const {tour} = data;
            if (tour){
                setMessage(`Tour name: ${tour.tourName} created successfully`)
                setTimeout(() => {
                    setMessage(false)
                }, 5000)
            }else{
                setMessage(`Something went wrong please reload page and try again!!!`)
                setTimeout(() => {
                    setMessage(false)
                }, 5000)
            }
        }catch(err){
            setMessage(`Something went wrong... Maybe tourName you entered is not unique...`)
            setTimeout(() => {
                setMessage(false)
            }, 5000)
        }
    }
    return <>
        <div className="my-container">
            <form onSubmit={handleSubmit} className="tours-form">
                <div>
                <input onChange={(e) => setFormValues({...formValues, tourName:e.currentTarget.value})} type="text" placeholder="Enter new Tour Name" />
                </div>
                <div>
                <input onChange={(e) => setFormValues({...formValues, tourDescription:e.currentTarget.value})} type="text" placeholder="Enter new Tour Description" />
                </div>
                <div>
                <input onChange={(e) => setFormValues({...formValues, startingPrice:e.currentTarget.value})} type="text" placeholder="Enter new Tour Starting Price" />
                </div>
                <button type="submit">Create</button>
                {message? <p className="lightblue-color">{message}</p> :null}
            </form>
        </div>
    </>
}