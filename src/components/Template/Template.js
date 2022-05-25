import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldmoreIcon from "@material-ui/icons/UnfoldMore";

import blank from "../../images/blank.png";
import party from "../../images/party.png";
import contact from "../../images/contact.png";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Template.css";
export default function Template() {
  const navigate = useNavigate();
  function createform() {
    const id = uuid();
    navigate("/form/" + id);
    var questions_list = [
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ];

    axios.post(`http://localhost:9000/add_questions/${id}`, {
      document_name: "untitled_form",
      doc_desc: "Add Description",
      questions: questions_list,
    });
  }

  return (
    <div className="template_section">
      <div className="template_main">
        <div className="template_top">
          <div className="tempate_left">
            <span
              style={{ fontSize: "16px", color: "#202124", fontWeight: "500" }}
            >
              Start a new form
            </span>
          </div>
          <div className="template_right">
            <div className="gallery_button">
              Template gallery
              <UnfoldmoreIcon />
            </div>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="template_body">
          <div className="card" onClick={createform}>
            <img src={blank} alt="no image" className="card_image" />
            <p className="card_title">Blank</p>
          </div>
          <div className="card">
            <img src={party} alt="no image" className="card_image" />
            <p className="card_title">Party invite</p>
          </div>
          <div className="card">
            <img src={contact} alt="no image" className="card_image" />
            <p className="card_title">Contact Information</p>
          </div>
        </div>
      </div>
    </div>
  );
}
