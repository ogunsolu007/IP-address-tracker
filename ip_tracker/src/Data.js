import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";
function Data({ currentIP, error }) {

    if (error) {
        return (
            <div >
                <h4>Error</h4>
                <div>{error}</div>
            </div>
        )
    } else if (currentIP.ip) {
        return (
            <>
                <div>
                    <p>IP ADDRESS</p>
                    <h3>{currentIP.ip}</h3>
                </div>
                <div>
                    <p>LOCATION</p>
                    <h3>{currentIP.location.city},{currentIP.location.country},{currentIP.location.geonameId}</h3>
                </div>
                <div>
                    <p>TIMEZONE</p>
                    <h3>UTC {currentIP.location.timezone}</h3>
                </div>
                <div>
                    <p>ISP</p>
                    <h3>{currentIP.isp}</h3>
                </div>
            </>
        )
    } else {
        return (
            <div className="info-spin">
                <SyncLoader
                    size={11}
                    color={"#5a79e3"}
                    loading={true}
                />
            </div>

        )
    }

}

export default Data
