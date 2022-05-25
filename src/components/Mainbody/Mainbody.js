import React, { useState, useEffect } from "react";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { IconButton } from "@material-ui/core";
import doc_image from "../../images/doc_image.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Mainbody.css";
import axios from "axios";
import Card from "../Card/Card";

function Mainbody() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function filenames() {
      var request = await axios.get("http://localhost:9000/get_all_files");
      let files = request.data;
      // filesn.forEach((file)=>{
      //     var id_=file.split(".")
      //     async function data(){
      //         var req = await axios.get(`http://localhost:9000/data/${id_[0]}`);
      //          console.log(req.data.document_name)
      //     }
      //     data()
      // })
      setFiles(files);
    }
    filenames();
  }, []);
  return (
    <div className="body">
      <div className="main_body">
        <div className="mainbody_top">
          <div
            className="mainbody_top_left"
            style={{ fontSize: "16px", fontWeight: "500" }}
          >
            Recent forms
          </div>
          <div className="mainbody_top_right">
            <div
              className="mainbody_top_center"
              style={{
                fontSize: "14px",
                marginRight: "125px",
                fontWeight: "500",
              }}
            >
              Owned by anyone <ArrowDropDownIcon />
            </div>
            <IconButton>
              <StorageIcon style={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton>
              <FolderOpenIcon style={{ fontSize: "16px", color: "black" }} />
            </IconButton>
          </div>
        </div>
        <div className="mainbody_docs">
          {files.map((ele) => (
            <Card name={ele}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
