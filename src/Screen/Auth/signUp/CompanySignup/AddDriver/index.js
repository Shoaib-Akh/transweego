import React, { useState } from "react";
import "../../../AuthCommon.scss";
import SimpleInput from "../../../../../Component/SimpleInput";
import { Images } from "../../../../../utils/images";



const AddDriver = () => {
    return (
        <div className="bg-color add-driver">
            <div className="mainBg-img">
                <div className="center-div" style={{ height: "auto" }}>
                    <div className="bg-company">
                        <form className="driver-div">

                            <div className="text-center mb-4">
                                <h2>Bitte registrieren</h2>
                            </div>
                            <div className="driver-clr">
                                <div className="d-flex align-items-center gap-2">
                                    <SimpleInput
                                        placeholder={"Nachname "}
                                    />
                                    <SimpleInput
                                        placeholder={"Vorname"}
                                    />
                                </div>
                                <SimpleInput
                                    placeholder={"E-Mail-adresse"}
                                />
                                <SimpleInput
                                    placeholder={"Telefonnummer"}
                                />
                                <div className="frame">
                                    <div className="upload-photo">
                                        <img src={Images.frame} height="52" width="52" alt="car" className="mx-1" />
                                    </div>
                                </div>
                                <div>
                                <img src={Images.plus} height="29" width="29" alt="car" className="mx-1" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddDriver;
