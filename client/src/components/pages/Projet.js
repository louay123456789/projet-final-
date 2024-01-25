import React, { useEffect, useState } from 'react';
import { getPost, deletePost, editedPost, addPost } from '../../redux/ActionProject';
import { useDispatch, useSelector } from 'react-redux';
import {FormGroup} from "reactstrap"
import axios from "axios"

const ProjectPage = () => {

 
  const [evenement,setEvenement]=useState("")
  const [description,setDescription]=useState("")
  const [uploading,setUploading]=useState(false)
  const [image,setImage]=useState("")
  console.log(image,"imageeeeee")
  const [type,setType]=useState("image")
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const projects = useSelector((state) => state.project.projects.post);

  const handleEdit = (index) => {
    const updatedProject = projects[index];
    dispatch(editedPost(updatedProject._id, editedPost));
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleAdd = () => {
    const newProject={evenement,description,image,type}
    dispatch(addPost(newProject));
   
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("http://localhost:5001/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
console.log(projects,"projectsssss")
  return (
    <div className="project-container">
      <h2 className="project-heading">Projets</h2>

      {projects && projects.map((project, index) => (
        <section key={index} className="project-section">
          <h3 className="section-heading">{project.type === 'image' ? 'Images' : 'Vidéos'}</h3>
       
         
              <img src={project.image} alt="hdhdhdh" />
           
            
         
          <p className="project-description">{project.description}</p>
          <div className="project-buttons">
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(project._id)}>Delete</button>
          </div>
        </section>
      ))}

      <div className="new-project-form">
        <h3>Ajouter un nouveau projet</h3>
        <label>Type:</label>
        <select
          value={type}
          onChange={(e) => setType( e.target.value )}
        >
          <option value="image">Image</option>
          <option value="video">Vidéo</option>
        </select>
        <label>Image ou URL vidéo:</label>
      
        <label>Description:</label>
        <textarea
        value={description}
        onChange={(e) => setDescription( e.target.value )}
        ></textarea>
        <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"
                    
                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </FormGroup>

    
        <button onClick={handleAdd}>Ajouter</button>
      </div>
    </div>
  );
};

export default ProjectPage;
