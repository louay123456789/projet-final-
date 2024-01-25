import { GET_Post } from "./actionTypes"
import axios from "axios"

export const getPost = () => (dispatch) => {
  axios.get("http://localhost:5001/api/post/getall")
    .then((res) => dispatch({ type: GET_Post, payload: res.data }))
    .catch((err) => console.log(err))
}

export const deletePost = (idPost) => (dispatch) => {
  axios.delete(`http://localhost:5001/api/post/delete/${idPost}`)
    .then(() => dispatch(getPost()))
    .catch((err) => console.log(err))
}

export const addPost = (newPost) => (dispatch) => {
  axios.post("http://localhost:5001/api/post/add", newPost)
    .then(() => dispatch(getPost()))
    .catch((err) => console.log(err))
}

export const editedPost = (idPost, editedPost) => (dispatch) => {
  axios.put(`http://localhost:5001/api/annonce/edit/${idPost}`, editedPost)
    .then(() => dispatch(getPost()))
    .catch((err) => console.log(err))
}
