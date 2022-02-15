import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ContactPage } from "./styleComponent";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assests/avtar.svg";
import FormNav from './FormNav';

function ContactForm({ editable, userDetails, id }) {
  const [contactDetails, setContactDetails] = useState({
    contactTypes: "office",
    name: "",
    phone: "",
    isWhatsapp: true,
  });
  const [image, setImage] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (userDetails) {
      setFileUrl(userDetails.imgUrl)
      setContactDetails({
        ...contactDetails,
        contactTypes: userDetails.contactTypes,
        name: userDetails.name,
        phone: userDetails.phone,
        isWhatsapp: userDetails.isWhatsapp,
      });
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.name == "isWhatsapp") {
      setContactDetails({
        ...contactDetails,
        [e.target.name]: !contactDetails.isWhatsapp,
      });
    } else {
      setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    let userAllDetails = contactDetails;
    userAllDetails.imgUrl = fileUrl
    if (editable) {
      let tempLocalStorage = JSON.parse(localStorage.getItem("contacts"));
      let filterData = tempLocalStorage.filter((val, index) => index !== id);
 
      filterData.push(userAllDetails);
      filterData.sort(function (a, b) {
        return a.name.toLowerCase() - b.name.toLowerCase();
      });
      localStorage.setItem("contacts", JSON.stringify(filterData));
    } else {
      if (localStorage.getItem("contacts")) {
        let tempLocalStorage = JSON.parse(localStorage.getItem("contacts"));
        tempLocalStorage.push(userAllDetails);
        tempLocalStorage.sort(function (a, b) {
          return a.name.toLowerCase() - b.name.toLowerCase();
        });
        localStorage.setItem("contacts", JSON.stringify(tempLocalStorage));
      } else {
        localStorage.setItem("contacts", JSON.stringify([userAllDetails]));
      }
    }

    navigate("/");
  };

  const uploadImage = () => {
    const storage = getStorage();
    const metadata = {
      contentType: "image/jpeg",
    };

    const fileName = Date.now();
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileUrl(downloadURL);
        });
      }
    );
  }

  return (
    <ContactPage>
      <FormNav />
      <div className="row p-0 m-0 justify-content-center align-items-center form_wrapper">
        <div className="col-lg-4 p-3 rounded form">
          <div className="d-flex justify-content-center">
            <div
              className="avatar d-flex justify-content-center align-items-center"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Click to upload profile pic"
            >
              <img
                src={fileUrl ? fileUrl : Avatar}
                width="50"
                height="50"
                alt="Avatar"
              />
              <input
                type="file"
                className="inputFile"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  uploadImage();
                }}
              ></input>
            </div>
          </div>
          <form onSubmit={formHandler} className="">
            <div className="form-row row">
              <div className="form-group col-md-12 mb-3">
                <label for="inputEmail4">Contact name</label>
                <input
                  placeholder="Name"
                  name="name"
                  className="form-control my-2"
                  required
                  value={contactDetails.name}
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Phone number</label>
                <input
                  placeholder="Phone"
                  name="phone"
                  maxlength="10"
                  pattern="[0-9]{1}[0-9]{9}"
                  className="form-control my-2"
                  type="tel"
                  required
                  value={contactDetails.phone}
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
              <div className="form-group col-md-6 ">
                <label for="inputState">Type</label>
                <select
                  name="contactTypes"
                  value={contactDetails.contactTypes}
                  onChange={(e) => handleChange(e)}
                  className="form-control my-2"
                >
                  <option value={"personal"}>Personal</option>
                  <option value={"office"}>Office</option>
                </select>
              </div>
              <div className="form-group col-md-12 mt-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={contactDetails.isWhatsapp}
                  onChange={(e) => handleChange(e)}
                  name="isWhatsapp"
                  className=""
                  value={contactDetails.isWhatsapp}
                ></input>
                <div className="px-2">
                  <label>Using same Whatsapp number</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-block w-100 my-3 actionBtn"
            >
              {editable ? "Update Contact" : "Create Contact"}
            </button>
          </form>
        </div>
      </div>
    </ContactPage>
  );
}

export default ContactForm;
