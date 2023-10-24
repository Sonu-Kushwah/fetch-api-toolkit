import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../Redux/PostSlice";
function Index() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.post);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
      console.log(dispatch(fetchPosts()));
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="container">
        <h3>Redux toolkit use Fech API</h3>
        <div className="row">
          {posts.map((item) => {
            return (
              <div className="col-md-3 mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.email}
                    </Card.Text>
                    <Button variant="primary">Add Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Index;
