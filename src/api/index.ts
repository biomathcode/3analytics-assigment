import axios from "./axios";

export async function getPosts() {
  const posts = await axios.get("/posts");
  return posts.data;
}

export async function getPostsById(id: string) {
  const post = await axios.get("/posts/" + id);
  return post.data;
}

export async function getUsers() {
  const users = await axios.get("/users");
  return users.data;
}

export async function getPostByUserId(userid: string) {
  const response = await axios.get("/posts?userId=" + userid);
  return response.data;
}

export async function getCommentsByPostId(postid: string) {
  const comments = await axios.get("/comments?postId=" + postid);
  return comments.data;
}
