import Comment from "../Comment/Comment.js";

function Post(props) {
  const comments = props.comments.map((comment, index) => (
    <Comment message={comment} key={index} />
  ));
console.log({comments})
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <div>
        <p>{props.body}</p>
      </div>
      <h3>Comments:</h3>
      {comments}
    </>
  );
}

export default Post;
