import React from 'react';

const Post = () => {
    return (
      <div class=" mb-3 p-2" style={{ maxWidth: "30rem", margin: "auto" }}>
        <div className="p-2 card">
          <img
            src="https://images.unsplash.com/photo-1648737965328-0c7f98c86f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
};

export default Post;