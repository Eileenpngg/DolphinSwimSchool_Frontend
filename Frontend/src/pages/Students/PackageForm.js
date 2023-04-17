import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context";
const PackageForm = () => {
  const userCtx = useContext(UserContext);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [purchaseStatus, setPurchaseStatus]=useState()
  const navigate= useNavigate()
  const handleClick = (e) => {
    setSelectedAmount(e.target.value);
  };

  const handlePurchaseButton=()=>{
    handlePurchase({})
    navigate("/")
  }

  const handlePurchase = async ({
    url = "http://127.0.0.1:5001/api/packages/update",
    id= userCtx.userDetails.id, 
    amount= selectedAmount ,
  }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id,amount}),
    });
    const jResponse = await response.json();
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setPurchaseStatus(`${jResponse.message}`)
      console.log(jResponse.message)
    }
    return jResponse;
  };
  return (
    <>
      <section style={{ marginTop: "10vh" }}>
        <h1 className="display-5 text-center" style={{ color: "#FFFFFF" }}>
          Packages
        </h1>

        <div className="row m-4">
          <div className="col-3"></div>
          <div className="col-6 d-flex justify-content-center flex-column align-item-center h-100">
            <input
              type="radio"
              class="btn-check"
              name="options"
              id="option1"
              value="4"
              onClick={handleClick}
            />
            <label class="btn btn-secondary" for="option1">
              1 month package<p>4 sessions - 45 mins per session</p>
            </label>
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row m-4">
          <div className="col-3"></div>
          <div className="col-6 d-flex justify-content-center flex-column align-item-center h-100">
            <input
              type="radio"
              class="btn-check"
              name="options"
              id="option2"
              value="12"
              onClick={handleClick}
            />
            <label class="btn btn-secondary" for="option2">
              3 months package<p>12 sessions - 45 mins per session</p>
            </label>
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row m-4">
          <div className="col-3"></div>
          <div className="col-6 d-flex justify-content-center flex-column align-item-center h-100">
            <input
              type="radio"
              class="btn-check"
              name="options"
              id="option3"
              value="24"
              onClick={handleClick}
            />
            <label class="btn btn-secondary" for="option3">
              6 months package<p>24 sessions - 45 mins per session</p>
            </label>
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row m-4 justify-content-center">
          <div className="col-3"></div>
          <div className="col-6 d-flex flex-row h-100">
            <button
              className="btn btn-secondary w-25"
              type="submit"
              onClick={handlePurchaseButton}
            >
              Purchase
            </button>
          </div>
          <div className="col-3"></div>
        </div>
      </section>
    </>
  );
};
export default PackageForm;
