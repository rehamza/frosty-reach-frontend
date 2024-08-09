import { enviromentVariable } from "@/config/environment";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userReducer = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: enviromentVariable.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({}),
});

export const {} = userReducer;
