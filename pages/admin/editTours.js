import axios from "axios"
import { useEffect, useState } from "react"

export default function EditTours(){
    const [tourData, setTourData] = useState({
        tourNames:[],
        tours:[]
    });
    const [message, setMessage] = useState("");
    const [dialog, setDialog] = useState({name:"", state:false, tourType:"", id:""});
    useEffect(async() => {
        const {data: {tour}} = await axios.get("/api/tourhead")
        const {data: {prices}} = await axios.get("/api/tours")
        console.log(prices, "PRICES")
        console.log(tour, "TOUR")
        setTourData({
            tourNames:tour,
            tours:prices
        })
    }, [])

    const handleClick = async() => {
        try{
        const {id, tourType} = dialog
        if (tourType === "tourNames"){
            const {data} = await axios.delete(`/api/tourhead/${id}`)
            const {tour, message} = data;
            setTourData({...tourData, tourNames:tourData.tourNames.filter((tour) => tour._id !== id)});
            if (message){
                setMessage(`${message}`);
                setTimeout(() => {
                    setMessage(false)
                }, 5000);
            }
            setDialog({
                state:false,
                name:"",
                tourType:"",
                id:""
            })
        }else{
            const {data} = await axios.delete(`/api/tours/${id}`);
            const {prices, message} = data;
            if (prices){
                setTourData({...tourData, tours:tourData.tours.filter((tour) => tour._id !== id)});
                console.log(message, "MESS")
            }
            if (message){
                setMessage(`${message}`);
            }
            setDialog({
                state:false,
                name:"",
                tourType:"",
                id:""
            })
        }
        }catch(err){
            setDialog({
                state:false,
                name:"",
                tourType:"",
                id:""
            })
            console.log(err)
        }
    }

    return <>
        <div className="my-container">
            <div className={`dialog-box ${dialog.state !== true && "hiddenNone"}`}>
                <p>{`Do you want to delete existing ${dialog.name}?`}</p>
                <div>
                    <button className="edit" onClick={() => setDialog({state:false})}>Cancel</button>
                    <button className="delete-btn" onClick={handleClick}>Confirm</button>
                </div>
            </div>
            <div className="edit-tours-flex">
                {message && <p>{message}</p>}
                <div className="toursName-flex">
                    <h3>Tour Names</h3>
                    {tourData.tourNames.map((tour) => <div key={tour._id}>
                        <p>{tour.tourName}</p>
                        <button className="delete-btn" onClick={() => setDialog({
                            state:true,
                            name:`Name: ${tour.tourName} `,
                            tourType: "tourNames",
                            id:tour._id
                        })}>Delete</button>
                        {/* <p>{message.length ? message.id === tour.id && message.message: null}</p> */}
                        </div>
                    )}
                </div>
                <div className="allTours-flex">
                    <h3>Tours</h3>
                    {tourData.tours.map((tour) => <div key={tour._id}>
                        <p>{tour.tourName} <span>Tour Number: {tour.tourNumber}</span></p>
                        <button className="delete-btn" onClick={() => setDialog({
                            state:true,
                            name:`Name: ${tour.tourName} Tour Number: ${tour.tourNumber} `
                        })}>Delete</button>
                        <p>{message.length ? message.id === tour.id && message.message: null}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
}