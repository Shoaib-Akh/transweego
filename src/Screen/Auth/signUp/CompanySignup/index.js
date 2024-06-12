import React, { useEffect, useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import MultiSelectDropdown from "../../../../Component/MultiSelectDropdown";
import { useDispatch, useSelector } from "react-redux";
import { CompanySignupApi } from "../../../../api/ComponySignUpSlice";
import { getServiceTypes } from "../../../../api/getServicesSlice";

const CompanySignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceTypeIds: []
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleServiceTypeChange = (selectedServiceTypes) => {
    setFormData({
      ...formData,
      serviceTypeIds: selectedServiceTypes
    });
    if (errors.serviceTypeIds) {
      setErrors({
        ...errors,
        serviceTypeIds: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.companyName) newErrors.companyName = 'Dieses Feld wird benötigt';
    if (!formData.contactPerson) newErrors.contactPerson = 'Dieses Feld wird benötigt';
    if (!formData.email) newErrors.email = 'Dieses Feld wird benötigt';
    if (!formData.phone) newErrors.phone = 'Dieses Feld wird benötigt';
    if (formData.serviceTypeIds.length === 0) newErrors.serviceTypeIds = 'Dieses Feld wird benötigt';

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      const data = {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        serviceTypeIds: formData.serviceTypeIds.join(',')
      };

      try {
        // Dispatch the API call
        const response = await dispatch(CompanySignupApi(data));
        
        if (response.data.requestStatus === 'fulfilled') {
          
          // You can ngitavigate to another page or show a success message here
          navigate('/'); // Beispiel für Navigation nach erfolgreicher Anmeldung
        } else {
          ;
          // Show an error message to the user
          setErrors({ apiError: 'Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.' });
        }
      } catch (error) {
   
        setErrors({ apiError: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' });
      }
    }
  };

  useEffect(() => {
    dispatch(getServiceTypes());
  }, []);

  const serviceTypes = useSelector((state) => state.serviceTypes.list);

  const options = serviceTypes.map((item) => ({
    id: item.serviceTypeId,
    label: item.serviceTypeName
  }));

  return (
    <div className="bg-color">
      <div className="mainBg-img">
        <Button
          onClick={() => navigate(-1)}
          style={{}}
          className="backbtn"
          icon
        />
        <div className="center-div">
          <div className="bg-company">
            <form className="login-div" onSubmit={handleSubmit}>
              <div className="text-center mb-4 heading">
                <h2>Bitte Registrieren</h2>
              </div>
              <div className="input-bg">
                <InputField
                  required
                  label="Firma/Unternehmen"
                  placeholder="Geben Sie den Firmennamen ein"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />
                <InputField
                  required
                  label="Ansprechpartner"
                  placeholder="Ansprechpartner eintragen"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  error={errors.contactPerson}
                />
                <InputField
                  type="email"
                  placeholder="Geben sie ihre E-Mail Adresse ein"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email"
                  required
                  validationMessages={{ email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' }}
                  error={errors.email}
                />
                 <MultiSelectDropdown
                  label={"Dienstleistungen*"}
                  placeholder={"Wählen Sie Dienste aus"}
                  options={options}
                  error={errors.serviceTypeIds}
                  onChange={handleServiceTypeChange}
                />
                <InputField
                  type="tel"
                  placeholder="Telefonnummer*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  label="Nummer eingeben"
                  required
                  validationMessages={{ phone: 'Bitte geben Sie eine gültige 10-stellige Telefonnummer ein' }}
                  error={errors.phone}
                />
               
                <Button
                  label={"Einreichen"}
                  type="submit"
                />
                {/* {errors.apiError && (
                  <div className="error-message">{errors.apiError}</div>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySignup;
