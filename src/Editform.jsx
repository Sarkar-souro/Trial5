import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditForm  ()  {
    const data = {
        
        customerName: "",
        customerMobile: "",
        customerEmail: "",
    };

    const [inputdata, setInputdata] = useState(data);

    const handleInput = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(
                "https://hammerhead-app-tzlph.ondigitalocean.app/customers",
                inputdata
            )
            .then((resp) => {
                console.log(resp.inputdata);
            })
            .catch((err) => console.log(err));
    }
    let { id } = useParams();

    console.log("id===>" + id);

    return (
        <>
            <div className="app">
                <h2>Edit Customer</h2>
                <form>
                    <div>
                       
                        <label> Name:</label>
                        <input
                            type="text"
                            onChange={handleInput}
                            id="username"
                            name="customerName"
                            autoComplete="off"
                        />

                        <br></br>
                        <br></br>
                        <label> Mobile:</label>
                        <input
                            type="text"
                            onChange={handleInput}
                            id="mobileNo"
                            name="Mobile"
                            autoComplete="off"
                        />

                        <br></br>
                        <br></br>
                        <label htmlFor="emailId"> customerEmail</label>
                        <input
                            type="email"
                            onChange={handleInput}
                            id="emailId"
                            name="customerEmail"
                            autoComplete="off"
                        />
                        <button
                            onClick={handleSubmit}
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                                marginBottom: "15px",
                            }}
                            type="update"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default EditForm;