import Navbar from "../../components/Navbar";
import {useState, useEffect} from "react";
import axios from "axios";
export default function(){
    const [formValues, setFormValues] = useState({})
    const [message, setMessage] = useState(false);
    const [reviews, setReviews] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues);
        const {data:{reviews}} = await axios.post("/api/reviews", formValues)
        if (reviews.acknowledged){
            setMessage("Review added successfully!");
        }
        setTimeout(() => {
            setMessage(false);
        }, 5000)
    }

    const handleDelete = async(id) => {
        const {data:{review, message}} = await axios.delete(`/api/reviews/${id}`);
        if (review.acknowledged){
            setMessage(message)
        }
        setTimeout(() => {
            setMessage(false)
        }, 5000)
    }
    
    useEffect(async () => {
        const {data:{reviews}} = await axios.get("/api/reviews");
        if (reviews){
            setReviews(reviews);
        }
    }, [])

    return <>
        <Navbar />
        <div className="my-container">
            <form className="tours-form" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="authorName">Author Name: </label>
                <input type="text" onChange={(e) => setFormValues({...formValues, authorName:e.currentTarget.value})} placeholder="Enter Author Name"/>
                </div>
                <div>
                <label htmlFor="authorName">Author review: </label>
                <textarea rows={5} cols={45} type="text" placeholder="Enter Review" onChange={(e) => setFormValues({...formValues, review:e.currentTarget.value})} />
                </div>
                <button className="edit" type={"submit"}>Submit</button>
                {message && <span className="red-color">{message}</span>}
            </form>
            <div className="allTours-flex">
                    <h3>REVIEWS</h3>
                    {reviews.map((review) => <div style={{display:"grid", gridTemplateColumns:"auto auto"}} key={review._id}>
                        <p><span>Author Name: {review.authorName}</span></p>
                        <p>{review.review}</p>
                        <button className="delete-btn" onClick={() => handleDelete(review._id)}>Delete</button>
                        </div>
                    )}
                </div>
        </div>
    </>
}