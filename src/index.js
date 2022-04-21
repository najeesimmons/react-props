import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello/Hello.js";
import Post from "./Post/Post.js";

const post = {
  title: "How to Win at Life - Loser",
  author: "Charlie Sheen",
  body: "It's easy. Just win.",
  comments: [
    "This wasn't very helpful.",
    "Your mom is a loser, bud.",
    "Get a life. This is condescenfing.",
  ],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* I'm passing in the data that I want my component to use.
    I'm passing it in where the component is RENDERED. */}
    <Hello name={"Najee"} age={31} job={"software developer"} />
    <Post
      // Here I'm adding in the properties of the post object declared
      // in this file to the Post component props object. I'm giving
      // each proprty a key the same as in the original object.
      title={post.title}
      author={post.author}
      body={post.body}
      comments={post.comments[1]}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
