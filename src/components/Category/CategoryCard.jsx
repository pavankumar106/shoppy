import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CategoryCard = ({category}) => {
  return <Link to={`category/${category}`}>
    <Card>
    <Card.Body>
    <Card.Text className="text-capitalize">
        {category}
    </Card.Text>
    </Card.Body>
    </Card>
  </Link>;
};

export default CategoryCard;
