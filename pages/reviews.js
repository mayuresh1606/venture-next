import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios";
export default function Reviews(){
    const [reviews, setReviews] = useState([]);
    useEffect(async() => {
        const {data: {reviews}} = await axios.get("/api/reviews");
        if (reviews){
            setReviews(reviews);
        }
    }, [])
    return <>
        <Navbar />
        <div className="my-container">
            <section className="movie-reviews">
                {reviews && reviews.map((review) => {
                    return <>
                        <div className="review" key={review._id}>
                            <span className="author-name">{review.authorName}</span>
                            <p>{review.review}</p>
                        </div>
                    </>
                })}
            </section>
        </div>
    </>
}