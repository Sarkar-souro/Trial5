

function List() {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "customerName": "cloudyh",
  "customerMobile": 987454512,
  "customerEmail": null,
  "customerNo": null,
  "birthday": null,
  "healthInsurance": null
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://hammerhead-app-tzlph.ondigitalocean.app/customers/249", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}
export default List;