import React, { useEffect, useState } from 'react'

export default function Notes() {
    const [notes, setnotes] = useState([]);

    // searchparameter
    const [searchpara, setsearchpara] = useState("")

    const changeSearch = (e) => {
        setsearchpara(e.target.value);
    }

    useEffect(async () => {
        if (searchpara === "") {
            const res = await fetch('/api/fetch');
            const result = await res.json();
            if (result.success) {
                setnotes(result.notes);
            }
        }
        else {
            const res = await fetch(`/api/search?q=${searchpara}`);
            const result = await res.json();
            if (result.success) {
                setnotes(result.notes);
            }
        }
        console.log(notes);
    }, [searchpara])

    return (
        <div className='my-5'>

            <div className="input-group flex-nowrap container">
                <span className="input-group-text" id="addon-wrapping">Search</span>
                <input type="text" className="form-control" value={searchpara} onChange={changeSearch} placeholder="Search in Notes" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>

            <div className="row my-3 mx-3">
                {
                    notes.map(note => {
                        return (
                            <div className="col-md-3 my-3 " key={note.entityId}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <h5 className="card-title">{note.title}</h5>
                                        </div>
                                        <p className="card-text">{note.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
