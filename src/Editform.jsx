import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";


export default function AddCustomer() {
  const [customerDt, setCustomerDt] = useState({
    customerName: "",
    customerMobile: "",
    customerEmail: "",
  });

  function saveCustomer() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(customerDt);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`https://hammerhead-app-tzlph.ondigitalocean.app/customers`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Saved");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      AddCustomer
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id="name"
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
            id="mobile"
            label="Mobile"
            variant="outlined"
            name="customerMobile"
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
            id="email"
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
      <Button onClick={() => saveCustomer()} variant="contained">
        Save
      </Button>
    </div>
  );
}
