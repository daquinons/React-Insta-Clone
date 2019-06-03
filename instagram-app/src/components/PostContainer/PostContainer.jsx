import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Input, Img } from 'reactstrap';
import moment from 'moment';
import './PostContainer.css';

const PostContainer = ({ post }) => {

  const getDiffDateInWeeks = timestamp => {

    const now = moment(new Date());
    const toCompare = moment(timestamp, "MMMM Do YYYY, hh:mm:ss a")
    const duration = moment.duration(now.diff(toCompare));
    const diffDateInWeeks = Math.round(duration.asWeeks());
    
    return diffDateInWeeks;
  }

  return (
    <div className="card-post">
      <Card>
        <CardBody>
          <CardTitle className="blue-bold"><img className="thumbnail-image" alt="" srcSet={post.thumbnailUrl}/>&nbsp; {post.username}</CardTitle>
        </CardBody>
        <CardImg top width="100%" src={post.imageUrl} />
        <CardBody>
          
          <svg className="post-icon" width="48px" height="44px" viewBox="0 0 48 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Instagram-Feed-2017" transform="translate(-28.000000, -975.000000)" fill="#202120">
                <path d="M62.532,975.841 C58.526,975.841 54.616,977.845 52.004,981.485 C49.394,977.846 45.483,975.841 41.477,975.841 C39.194,975.841 36.878,976.493 34.756,977.866 C28.3,982.043 26.088,991.296 29.816,998.531 C32.855,1004.43 45.689,1014.68 50.325,1018.26 C50.824,1018.65 51.414,1018.84 52.004,1018.84 C52.595,1018.84 53.185,1018.65 53.684,1018.26 C58.32,1014.68 71.155,1004.43 74.195,998.531 C77.922,991.296 75.71,982.043 69.254,977.866 C67.131,976.493 64.816,975.841 62.532,975.841 Z M62.532,977.915 C64.506,977.915 66.464,978.507 68.195,979.626 C73.766,983.231 75.666,991.273 72.43,997.553 C69.545,1003.15 56.438,1013.55 52.489,1016.6 C52.309,1016.74 52.126,1016.77 52.004,1016.77 C51.883,1016.77 51.699,1016.74 51.52,1016.6 C47.572,1013.55 34.465,1003.15 31.58,997.553 C28.344,991.273 30.244,983.231 35.815,979.626 C37.544,978.507 39.503,977.915 41.477,977.915 C44.956,977.916 48.208,979.668 50.4,982.723 L52.004,984.959 L53.609,982.724 C55.801,979.668 59.054,977.915 62.532,977.915 Z" id="Fill-12"></path>
              </g>
            </g>
          </svg>

          <svg className="post-icon" width="42px" height="43px" viewBox="0 0 42 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Instagram-Feed-2017" transform="translate(-111.000000, -976.000000)" fill="#202120">
                <path d="M131.963,976.35 C118.572,976.348 108.116,988.934 111.729,1002.95 C113.4,1009.43 120.312,1016.14 126.802,1017.72 C128.557,1018.15 130.285,1018.35 131.963,1018.35 C135.565,1018.35 138.942,1017.42 141.9,1015.82 C142.23,1015.64 142.596,1015.54 142.964,1015.54 C143.143,1015.54 143.323,1015.56 143.499,1015.61 L152.339,1017.98 L152.481,1018 C152.82,1018 153.092,1017.68 152.997,1017.32 L150.565,1008.22 C150.426,1007.71 150.496,1007.17 150.734,1006.69 C152.855,1002.42 153.572,997.32 152.258,992.002 C150.478,984.799 144.867,979.023 137.711,977.116 C135.759,976.595 133.832,976.35 131.963,976.35 Z M131.961,978.35 L131.963,978.35 C133.699,978.35 135.46,978.585 137.198,979.048 C143.671,980.774 148.699,985.922 150.32,992.483 C151.46,997.09 150.985,1001.69 148.947,1005.8 C148.487,1006.72 148.377,1007.77 148.637,1008.74 L150.416,1015.4 L144.016,1013.68 C143.673,1013.59 143.32,1013.54 142.964,1013.54 C142.269,1013.54 141.573,1013.72 140.949,1014.06 C138.149,1015.58 135.125,1016.35 131.963,1016.35 C130.411,1016.35 128.833,1016.16 127.274,1015.78 C121.49,1014.37 115.13,1008.14 113.661,1002.45 C112.132,996.514 113.335,990.42 116.963,985.725 C120.586,981.038 126.053,978.349 131.961,978.35 Z" id="Fill-13"></path>
              </g>
            </g>
          </svg>
          <CardText className="blue-bold">{post.likes} likes</CardText>
          <CardText>{getDiffDateInWeeks(post.timestamp)} WEEKS AGO</CardText>
          <Input type="text" name="comment" id="commentForm" placeholder="Add a comment..." />
        </CardBody>
      </Card>
    </div>
  );
}

export default PostContainer;