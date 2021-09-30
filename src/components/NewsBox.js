import React, { Component } from "react";

export class NewsBox extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <div className="card" style={{ marginBottom: "10px" }}>
              <div class="card-header">source: {source}</div>
            </div>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              style={{ backgroundColor: "#b7cfcf" }}
              className="btn btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsBox;
