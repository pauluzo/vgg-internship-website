import React from "react";
import PropTypes from "prop-types";

const FacilitatorItems = ({ facilitator }) => {
  const { name, track, twitter, instagram, image, bio } = facilitator;

  return (
    <div className="card border-0 facilitator-card" style={{ width: "90%" }}>
      <img
        src={require(`../images/${image}`)}
        height="130"
        width="150"
        className="card-img-top"
        alt={name}
      />

      <div className="">
        <div className="card-title track">
          <span>{name}</span> <br />
          <small>{track}</small>
        </div>
        <p className="bio">{bio}</p>
        <p className="text-center">
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i
                className="fa fa-twitter follow-icon"
                title={`Follow ${name} on twitter`}
              ></i>
            </a>
          )}{" "}
          &nbsp; &nbsp;
          {instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i
                className="fa fa-instagram follow-icon"
                title={`Follow ${name} on instagram`}
              ></i>
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

FacilitatorItems.propTypes = {
  facilitator: PropTypes.object,
};

export default FacilitatorItems;
