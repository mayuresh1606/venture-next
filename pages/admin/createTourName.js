import {useState} from "react";
import axios from "axios"
export default function CreateTourName(){
    const [message, setMessage] = useState();
    const [edit, setEdit] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [tourHead, setTourHead] = useState([]);
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

    const handleEdit = async(e) => {
        e.preventDefault();
        const {data} = await axios.get(`/api/tourhead?tourName=${formValues.tourName}`);
        const {tour} = data;
        console.log(tour, 'TOUR DATA', 121);
        setTourHead(tour);
        setEdit(false);
    }

    const handleEditSubmit = async(e, id) => {
        e.preventDefault();
        const {data} = await axios.patch(`/api/tourhead/${id}`, formValues);
        const {tour} = data;
        if (tour){
            setMessage(`Tour Head Updated successfully`);
        }
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    }

    return <>
        <div className="my-container">
            <div className="edit-btns">
                <button onClick={() => {
                    if(!edit){
                        setFormValues({})
                    }
                    setEdit(true)
                }} className="edit">Edit</button> 
                <button onClick={() => {
                    if (edit){
                        setFormValues({})
                    }
                    setEdit(false)
                }} className="edit">Create</button>
            </div>
            {edit?<form onSubmit={handleEdit} className="tours-form">
                <div>
                <input onChange={(e) => setFormValues({...formValues, tourName:e.currentTarget.value})} type="text" placeholder="Enter Tour Name" />
                </div>
                <button onClick={handleEdit} type="submit">Get Information</button>
                {message? <p className="lightblue-color">{message}</p> :null}
            </form>
            : !edit && tourHead.length ? 
            <form onSubmit={(e) => handleEditSubmit(e, tourHead[0]._id)} className="tours-form">
                <div>
                <input defaultValue={tourHead[0].tourName} onChange={(e) => setFormValues({...formValues, tourName:e.currentTarget.value})} type="text" placeholder="Enter new Tour Name" />
                </div>
                <div>
                <input defaultValue={tourHead[0].tourImageURL} onChange={(e) => setFormValues({...formValues, tourImageURL:e.currentTarget.value})} type="text" placeholder="Enter image URL" />
                </div>
                <div>
                <input defaultValue={tourHead[0].tourDescription} onChange={(e) => setFormValues({...formValues, tourDescription:e.currentTarget.value})} type="text" placeholder="Enter new Tour Description" />
                </div>
                <div>
                <input defaultValue={tourHead[0].tourInfo} onChange={(e) => setFormValues({...formValues, tourInfo:e.currentTarget.value})} type="text" placeholder="Enter new Tour Info" />
                </div>
                <div>
                <input defaultValue={tourHead[0].startingPrice} onChange={(e) => setFormValues({...formValues, startingPrice:e.currentTarget.value})} type="text" placeholder="Enter new Tour Starting Price" />
                </div>
                <button type="submit">Update</button>
                {message? <p className="lightblue-color">{message}</p> :null}
            </form>
            : 
            <form onSubmit={handleSubmit} className="tours-form">
                <div>
                <input onChange={(e) => setFormValues({...formValues, tourName:e.currentTarget.value})} type="text" placeholder="Enter new Tour Name" />
                </div>
                <div>
                <input onChange={(e) => setFormValues({...formValues, tourImageURL:e.currentTarget.value})} type="text" placeholder="Enter image URL" />
                </div>
                <div>
                <input onChange={(e) => setFormValues({...formValues, tourDescription:e.currentTarget.value})} type="text" placeholder="Enter new Tour Description" />
                </div>
                <div>
                <input onChange={(e) => setFormValues({...formValues, tourInfo:e.currentTarget.value})} type="text" placeholder="Enter new Tour Info" />
                </div>
                <div>
                <input onChange={(e) => setFormValues({...formValues, startingPrice:e.currentTarget.value})} type="text" placeholder="Enter new Tour Starting Price" />
                </div>
                <button type="submit">Create</button>
                {message? <p className="lightblue-color">{message}</p> :null}
            </form>
            }
        </div>
    </>
}