import React, { useEffect, useState } from "react";
import "../AuthCommon.scss";
import logo from "../../../assets/images/mainLogo.png";
import Button from "../../../Component/Button";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../layout/AuthLayout";
import { FetchData, formatOptions } from "../../../utils/commonFunction";

const SignUp = () => {
  const navigate = useNavigate();

  const useFetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      FetchData(url, setData);
    }, [url]);

    return data;
  };

  const useFetchAndFormatOptions = (url, idKey, nameKey) => {
    const data = useFetchData(url);
    return data ? formatOptions(data.data, idKey, nameKey) : null;
  };

  // Fetch user types options
  const userTypesOption = useFetchAndFormatOptions('user-types', 'userTypeID', 'userTypeName');

  // Define color mapping
  const colorMapping = {
    Company: 'green',
    'Individual Transporter': 'orange',
    Individual: 'yellow',
  };

  // Define navigation paths with placeholders for id
  const navigationMapping = {
    Company: "/company-signup",
    'Individual Transporter': "/individual-transporter-signup",
    Individual: "/individual-signup",
  };

  return (
    <AuthLayout>
      <div className="center-div">
        <div className="login-div">
          <div className="text-center mb-4">
            <img src={logo} height={30} alt="car" />
          </div>
          {userTypesOption && userTypesOption.map((option) => (
            <Button
              key={option.id}
              onClick={() => navigate(`${navigationMapping[option.label]}?/id=${option.id}`)}
              label={option.label}
              className={`${colorMapping[option.label]} mb-1`}
            />
          ))}
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
