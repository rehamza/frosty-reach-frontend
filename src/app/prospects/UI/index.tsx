import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { prospectSchema } from "@/constant/FormValidation/prospect";
import { UserFormData } from "@/types/prospect.type";

type Props = {
  mode?: "create" | "edit";
  userId?: string;
  onSave?: (userId: string | undefined, data: UserFormData) => void;
  userData?: UserFormData;
};

const ProspectUI = (props: Props) => {
  const { mode, userId, onSave, userData } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: yupResolver(prospectSchema),
    defaultValues: userData || {},
  });

  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  const onSubmit = (data: UserFormData) => {
    onSave?.(userId, data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input {...register("phoneNumber")} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>
      <div>
        <label>Company</label>
        <input {...register("company")} />
        {errors.company && <p>{errors.company.message}</p>}
      </div>
      <div>
        <label>User Type</label>
        <Controller
          name="userType"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input
                  type="radio"
                  {...field}
                  checked={field.value === "admin"}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  {...field}
                  checked={field.value === "user"}
                />
                User
              </label>
            </div>
          )}
        />
        {errors.userType && <p>{errors.userType.message}</p>}
      </div>
      <div>
        <label>Occupation</label>
        <Controller
          name="occupation"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="">Select...</option>
              <option value="business">Business</option>
              <option value="engineer">Engineer</option>
              <option value="accountant">Accountant</option>
            </select>
          )}
        />
        {errors.occupation && <p>{errors.occupation.message}</p>}
      </div>
      <div>
        <label>Interests</label>
        <Controller
          name="interest"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input
                  type="checkbox"
                  //   value="read_book"
                  checked={field.value.includes("read_book")}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(
                      e.target.checked
                        ? [...field.value, value]
                        : field.value.filter((v: string) => v !== value)
                    );
                  }}
                />
                Read Book
              </label>
              <label>
                <input
                  type="checkbox"
                  value="sports"
                  checked={field.value.includes("sports")}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(
                      e.target.checked
                        ? [...field.value, value]
                        : field.value.filter((v: string) => v !== value)
                    );
                  }}
                />
                Sports
              </label>
              <label>
                <input
                  type="checkbox"
                  //   value="movies"
                  checked={field.value.includes("movies")}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(
                      e.target.checked
                        ? [...field.value, value]
                        : field.value.filter((v: string) => v !== value)
                    );
                  }}
                />
                Movies
              </label>
            </div>
          )}
        />
        {errors.interest && <p>{errors.interest.message}</p>}
      </div>
      <button type="submit">
        {mode === "create" ? "Add User" : "Update User"}
      </button>
    </form>
  );
};

export default ProspectUI;
