import "./CommentsFrom.css";

import { useState } from "react";
 


export default function CommentsFrom() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: "0",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: "0",
        })
    }


    return (
        <div className="Product">
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <br />
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username" />
                <br /> <br />
                <label htmlFor="remark">Remark</label>
                <br />
                <textarea value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange} id="remarks" name="remarks"></textarea>
                <br /> <br />
                <label htmlFor="rating">Rating</label>
                <br />
                <input placeholder="rating" type="number" min={0} max={10} value={formData.rating} onChange={handleInputChange} id="rating" name="rating" />
                <br /> <br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}

 