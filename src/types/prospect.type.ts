export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  userType: "admin" | "user";
  occupation: string;
  interest: string[];
}
