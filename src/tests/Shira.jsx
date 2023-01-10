import React, { useState } from 'react'

function Shira() {
    const [form , setForm] = useState(false);
    const handleChange = (e) => {
        console.log(form);
        setForm({ ...form, [e.target.name]: e.target.value })
     }
    function submitForm(e) {
        e.preventDefault();
        const name = form.name
        const files = form.files
        const formData = new FormData();
        formData.append("name", name.value);
        for(let i =0; i < files.files.length; i++) {
                formData.append("files", files.files[i]);
        }
        console.log(formData);
        fetch("http://localhost:5000/api/files/createZIP", {
            method: 'POST',
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => console.log(res))
            // eslint-disable-next-line no-sequences
            .catch((err) => ("Error occured", err));
    }
  return (
    <div class="container">
        <h1>File Upload</h1>
        <form id='form' onSubmit={submitForm}>
            <div class="input-group">
                <label for='name'>Your name</label>
                <input name='name' id='name' placeholder="Enter your name" onChange={handleChange}/>
            </div>
            <div class="input-group">
                <label for='files'>Select files</label>
                <input name='files' type="file" multiple onChange={handleChange}/>
            </div>
            <button class="submit-btn" type='submit'>Upload</button>
        </form>
    </div>
  )
}

export default Shira