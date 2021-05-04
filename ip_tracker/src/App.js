import React, { useState, useEffect, useRef } from 'react';
import "./index.css";
import axios from "axios";
import arrow from "./images/icon-arrow.svg";
import Data from "./Data"
import MapComponent from "./Map.js"





function App() {
  const [currentIP, setCurrentIP] = useState({});
  const [error, setError] = useState(false);
  const inputref = useRef(null)


  /* function handling the form submit  */
  const handleSubmit = (e) => {
    e.preventDefault();
    const Reg = /([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+/    /* regular expression for the ip format */
    const type = Reg.test(inputref.current.value) ? "domain" : "ipAddress"
    setCurrentIP({})
    setError(false)
    axios.get(`https://geo.ipify.org/api/v1?apiKey=at_hG0MIWSKJZO2hQO6gtA1u6y5IKoH8&${type}=${inputref.current.value}`)
      .then(function (response) {
        setCurrentIP(response.data)
        setError(false)
        inputref.current.value = ""
      })
      .catch(function (error) {
        setError(error.response.data.message)
      })
  }

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v1?apiKey=at_hG0MIWSKJZO2hQO6gtA1u6y5IKoH8`)
      .then(function (response) {
        setCurrentIP(response.data)
      })
      .catch(function (error) {
        setError(error.response.data.messages)
      })
  }, [])


  return (
    <div className="container">
      <div className="header">
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputref}
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit">
            <img src={arrow} alt="" />
          </button>
        </form>


        <div className="infos">
          <Data currentIP={currentIP} error={error} />
        </div>

      </div>

      <div id="mapid">
        <MapComponent
          center={currentIP.ip && [currentIP.location.lat, currentIP.location.lng]}
          error={currentIP.ip === undefined || error}
        />
      </div>


    </div>
  );
}

export default App;
