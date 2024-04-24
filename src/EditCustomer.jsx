import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import "./EditCustomer.css"

export default function EditCustomer() {
    const [customerDt, setCustomerDt] = useState({
        customerName: "",
        customerMobile: "",
        customerEmail: ""
    });

    const { id } = useParams();
    useEffect(() => {
        getCustomer();
    }, []);

    function getCustomer() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://hammerhead-app-tzlph.ondigitalocean.app/customers/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setCustomerDt(result);
                console.log(result)
            })
            .catch((error) => console.error(error));
    }
   
    function updateCustomer() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(customerDt);

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("https://hammerhead-app-tzlph.ondigitalocean.app/customers/"+ id, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                alert("Saved");
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="container">
        <div className="edit-customer-container" >
            Edit Details
            <Grid container spacing={2}>
                <Grid className="edit-customer-grid" item xs={8}>
                    <TextField
                        className="edit-customer-textfield"
                        id="customer-name"
                        label="Name"
                        variant="outlined"
                        value={customerDt.customerName}
                        name="customerName"
                        onChange={(e) =>
                            setCustomerDt((prev) => {
                                return {
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                };
                            })
                        }
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        className="edit-customer-textfield"
                        id="customer-mobile"
                        label="Mobile"
                        variant="outlined"
                        value={customerDt.customerMobile}                       
                        name="customerMobile"
                        onChange={(e) =>
                            setCustomerDt((prev) => {
                                return {
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                };
                            })
                        }
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        className="edit-customer-textfield"
                        id="customer-email"
                        label="Email"
                        variant="outlined"
                        name="customerEmail"
                        value={customerDt.customerEmail}
                        onChange={(e) =>
                            setCustomerDt((prev) => {
                                return {
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                };
                            })
                        }
                    />
                </Grid>
                
            </Grid>
            <Button className="edit-customer-button" onClick={() => updateCustomer()} variant="contained">
                Update
            </Button>
        </div>
        </div>
    );
}