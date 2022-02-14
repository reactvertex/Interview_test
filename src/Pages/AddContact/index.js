import React, { useEffect, useRef, useState } from "react";
import {ContactPage} from "./styleComponents"

function AddContact() {
    const [contactTypes, setContactTypes] = useState("personal");
    const contactName = useRef("");
    const contactPhone = useRef("");
    const [isWhatsapp, setIsWhatsApp] = useState(true);

    const dropDownHandler = (event) => {
        console.log(event.target.value);
        setContactTypes(event.target.value);
    };

    const checkBoxHandler = () => {
        setIsWhatsApp((prev) => !prev);
    };

    const formHandler = (event) => {
        event.preventDefault();
        if (localStorage.getItem('contacts')) {
            let tempLocalStorage = localStorage.getItem('contacts');
            tempLocalStorage.push()
            localStorage.setItem("contacts", [
                {
                    name: contactName.current.value,
                    phone: contactName.current.value,
                    isWhatsapp: isWhatsapp,
                    contactTypes: contactTypes
                }
            ]);
        }
        else {
            localStorage.setItem("contacts", JSON.stringify([
                {
                    name: contactName.current.value,
                    phone: contactName.current.value,
                    isWhatsapp: isWhatsapp,
                    contactTypes: contactTypes
                }
            ]));
        }

    };

    return (
        <ContactPage>
            {/* <form onSubmit={formHandler}>
                <input placeholder="Name" required ref={contactName}></input>
                <input placeholder="Phone" type="phone" required ref={contactPhone}></input>
                Whatsapp:{" "}
                <input
                    type="checkbox"
                    checked={isWhatsapp}
                    onChange={checkBoxHandler}
                    name="whatsapp"
                ></input>
                <select onChange={dropDownHandler}>
                    <option value={"personal"}>Personal</option>
                    <option value={"office"}>Office</option>
                </select>
                <button type="submit">Submit</button>
            </form> */}
            <div className="row justify-content-center align-items-center form_wrapper">
                <div className="col-lg-4 p-3 rounded form">
                    <form onSubmit={formHandler} className="">
                        <div className="form-row" >
                            <div className="form-group col-md-12 my-4">
                                <label for="inputEmail4">Contact name</label>
                                <input placeholder="Name" className="form-control my-2" required ref={contactName}></input>
                            </div>
                            <div className="form-group col-md-12 my-4">
                                <label for="inputPassword4">Phone number</label>
                                <input placeholder="Phone" className="form-control my-2" type="phone" required ref={contactPhone}></input>
                            </div>
                        </div>
                            <div className="form-group col-md-6 my-4">
                                <label for="inputState">Type</label>
                                <select onChange={dropDownHandler} className="form-control my-2">
                                    <option value={"personal"}>Personal</option>
                                    <option value={"office"}>Office</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="form-check pl-0">
                                    <input
                                        type="checkbox"
                                        checked={isWhatsapp}
                                        onChange={checkBoxHandler}
                                        name="whatsapp"
                                        className=""
                                    ></input>
                                    <label className="form-check-label" for="gridCheck">
                                        Using same Whatsapp number
                                    </label>
                                </div>
                            </div>
                        <button type="submit" className="btn btn-block btn-primary w-100 my-3">Submit</button>
                    </form>
                </div>
            </div>
        </ContactPage>
    );
}

export default AddContact
