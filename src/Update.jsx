import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Update() {
  function click() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      customerName: "cloudyh",
      customerMobile: 987454512,
      customerEmail: null,
      customerNo: null,
      birthday: null,
      healthInsurance: null,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://hammerhead-app-tzlph.ondigitalocean.app/customers/249",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
    return (
      <Button variant="contained" endIcon={<SendIcon />} onClick={click}>
        UPDATE
      </Button>
    );
  
}
