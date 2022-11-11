import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>

      <p>
        go back:{" "}
        <span>
          <Link to="/">Home</Link>
        </span>
      </p>
    </div>
  );
};

export default NotFound;
