const initState = {
  posts: [
    {id: 1, title: '1st Blog', content: 'this is 1st blog'},
    {id: 2, title: 'second blog', content: 'this is another blog'},
  ],
};

const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      const newPost = state.posts.filter((post) => post.id !== action.id);
      return {
        posts: newPost,
      };
    case "ADD_POST":
      return {
        posts: [action.post, ...state.posts],
      };
    default:
      return state;
  }
};

export default PostReducer;
