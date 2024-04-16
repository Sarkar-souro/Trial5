import React, { useState } from 'react'


function Create () {
  
  const onSubmit = (event) => {
    event.preventDefault();

    let name = document.getElementById("name")
    let mobile=document.getElementById("mobile")
    let email = document.getElementById("email")
    
    if(name.value == "" || email.value == "") {
      alert("Please provide your name and email")
    }
    
    else{
      added(name.value,mobile.value, email.value)
      alert("Details provided successfully")
    }
    console.log (name.value)
    console.log(email.value)
    console.log(mobile.value)
    
    
  };
  function added (name, mobile, email) {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  
  "customerName": name,
  "customerMobile": 987454512,
  "customerEmail": email,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://hammerhead-app-tzlph.ondigitalocean.app/customers", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        id='name'
        type="text"
        name='name'
        
      />
      <label>Mobile No.</label>
      <input
        id="mobile"
        type="tel"
        name="mobile" />
      <label>E-mail ID</label>  
      <input
        id='email'
        type="email"
        name="email"
      
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;