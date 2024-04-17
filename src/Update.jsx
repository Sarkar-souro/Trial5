import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

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

        fetch("https://hammerhead-app-tzlph.ondigitalocean.app/customers/269" + "customers/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setCustomerDt(result);
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

        fetch("https://hammerhead-app-tzlph.ondigitalocean.app/customers/24579" + "customers/" + id, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                alert("Saved");
            })
            .catch((error) => console.error(error));
    }

    return (
        <div>
            Edit Driver
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="customerName"
                        value={customerDt.customerName}
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
                        id="outlined-basic"
                        label="Mobile"
                        variant="outlined"
                        name="driverMobile"
                        value={customerDt.customerMobile}
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
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name="customerEmail"
                        value={customerDterDt.driverEmail}
                        onChange={(e) =>
                            setcustomerDt((prev) => {
                                return {
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                };
                            })
                        }
                    />
                </Grid>
                
            </Grid>
            <Button onClick={() => updateCustomer()} variant="contained">
                Update
            </Button>
        </div>
    );
}