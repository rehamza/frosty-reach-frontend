import * as yup from "yup";

export const prospectSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  company: yup.string().required("Company is required"),
  userType: yup.mixed<"admin" | "user">().required("User Type is required"),
  occupation: yup.string().required("Occupation is required"),
  interest: yup
    .array()
    .min(1, "At least one interest must be selected")
    .required("Interest is required"),
});
