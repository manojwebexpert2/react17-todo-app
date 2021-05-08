import React, { useState } from 'react'
const AddTodoItem = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        //check values are not empty
        if (!title || !desc) {
            alert("values are blank");
        }
        else {
            props.addTodosingleitem(title, desc);
            alert("form submitted");
            setTitle("");
        setDesc("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>Add a New Todo Item</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }} className="form-control" id="title" placeholder="Enter title" />

                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" onChange={(e) => { setDesc(e.target.value) }} value={desc} className="form-control" id="desc" placeholder="Description" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add Todo Item</button>
            </form>
        </div>
    )
}
export default AddTodoItem
