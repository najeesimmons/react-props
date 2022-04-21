function Post(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <div>
        <p>{props.body}</p>
      </div>
      <h3>Comments:</h3>
      <p>{props.comments}</p>
    </>
  );
}

export default Post;
