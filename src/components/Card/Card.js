import React from 'react'
import "./Card.css"
import StorageIcon from '@material-ui/icons/Storage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "../../images/t-shirt.png"
import {useNavigate} from "react-router-dom";


function Card({name}) {
    const navigate = useNavigate(); 

    function navigate_to(docname){
        var fname=docname.split(".");
        navigate("/form/"+fname[0])

    }
    return (
        <div className="doc_card" onClick={()=>{navigate_to(name)}}>
              <img src={doc_image} alt="no image" className="doc_image" />
              <hr className="solid" />
              <div className="doc_card_content">
                <div className="heading">{name ? name : "Untitled Doc"}</div>
                <div
                  className="doc_content"
                  style={{ fontSize: "12px", color: "grey" }}
                >
                  <div className="content_left">
                    <StorageIcon
                      style={{
                        color: "white",
                        fontSize: "17px",
                        backgroundColor: "#734bbd",
                        padding: "3px",
                        marginRight: "3px",
                        borderRadius: "3px",
                      }}
                    />
                  </div>
                  <div className="last_open">Opened 11:57 AM</div>
                  <MoreVertIcon style={{ fontSize: "25px", color: "grey" }} />
                </div>
              </div>
            </div>
    )
}

export default Card
