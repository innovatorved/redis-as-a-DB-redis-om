import React from 'react'

export default function Addnote() {
    const execute = async(e) =>{
        e.preventDefault();
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());
        const res = await fetch('/api/createnote', {
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });
          const result = await res.json();
        // remove values to form
        if (result.success) {
            document.getElementById("exampleFormControlInput1").value="";
            document.getElementById("exampleFormControlTextarea1").value="";
            document.getElementById("exampleFormControlInput2").value="";
        }

    }
    return (
        <form className='container mt-5' onSubmit={execute}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="exampleFormControlInput1" min={4} placeholder="Title" required={true} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Note Description</label>
                <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" min={3}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Tag</label>
                <input type="text" name="tags" className="form-control" id="exampleFormControlInput2" placeholder="tags"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
