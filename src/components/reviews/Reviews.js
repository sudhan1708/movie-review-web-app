import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import api from "../../api/axiosConfig";

const Reviews = ({ getMovieDataById, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    //axios get request to get the single movie data by id
    getMovieDataById(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const review = revText.current;
    console.log(review.value);
    try {
      const res = await api.post("/api/v1/reviews", {
        reviewBody: review.value,
        imdbId: movieId,
      });
      console.log(res);
      const updatedReviews = [...reviews, { body: review.value }];
      review.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <h2>Reviews</h2>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
