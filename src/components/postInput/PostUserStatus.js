import React from "react";

const PostUserStatus = () => {
  return (
    <div className="container mt-3 mb-3">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder="image"
        />
      </div>
      <div class="input-group">
        <textarea
          class="form-control"
          aria-label="With textarea"
          placeholder="whats in your mind"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary w-100 mt-2">
        Post
      </button>
    </div>
  );
};

export default PostUserStatus;
