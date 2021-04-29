import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stormy-retreat-53136.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews);
    return (
        <section className="services-container mt-5 ">
            <div className="text-center">
             
                <h2>Testimonials</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2 pt-5">
                    {
                        reviews.map(review => <ReviewDetails review={review}></ReviewDetails>)
                    }
                </div>
        </div>
        </section>
    );
};

export default Review;