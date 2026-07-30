import React, { useState } from "react";



// Marketing page popup
function PopUp() {
    const [popup, setPop] = useState(false)
    const handleClickOpen = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false)
    }
    return (
        <div>
            <button className="theme-btn pb-10" onClick={handleClickOpen}>View Certificate</button>
            <div>
                {
                    popup ?
                        <div className="main">
                            <div className="popup">
                                <div className="popup-header">
                                    <h4 onClick={closePopup}>X</h4>
                                </div>

                                <div className="pb-20 pt-20 text-center">
                                    <img src="assets/images/iso/Iso_Image_safra.png" alt="safra-line" width={400}/>
                                </div>

                            </div>
                        </div> : ""
                }
            </div>
        </div>
    )
}
export default PopUp;