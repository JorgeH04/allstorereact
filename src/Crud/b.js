import React, { useState, useEffect } from "react";


export const Update = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  let [posts, setPosts] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const res = await fetch(`http://localhost:3000/api/post/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: '',
          title: '',
          image: '',
          description: '',
          price: '',
          amount: '',
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`http://localhost:3000/api/post/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: '',
            title: '',
            image: '',
            description: '',
            price: '',
            amount: '',
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await fetchPosts();

    setName("");
    setTitle("");
    setImage("");
    setDescription("");
    setPrice("");
    setAmount("");


  };

 

  const fetchPosts = async () => {
    const res = await fetch(`http://localhost:3000/api/post`);
    const data = await res.json();
    setPosts(data);
  };

  
  const deletePost = async (_id) => {
 
    const res = await fetch(`http://localhost:3000/api/post/delete/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    await fetchPosts();
  }


  




  const editPost = async (_id) => {
    const res = await fetch(`http://localhost:3000/api/post/${_id}`);
    const data = await res.json();

    setEditing(true);
    setId(_id);

    // Reset
    setName(data.name);
    setTitle(data.title);
    setImage(data.image);
    setDescription(data.description);

    setPrice(data.price);
    setAmount(data.amount);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              placeholder="Name"
              ref={nameInput}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              placeholder="User's Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              placeholder="User's Password"
            />
          </div>
          <button className="btn btn-primary btn-block">
            {editing ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm btn-block"
                    onClick={(e) => editUser(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};






