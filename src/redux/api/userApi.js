import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const userApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getUser: builder.query({
        query: () => ({
          url: `/user`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
      getAllUsers: builder.query({
        query: () => ({
          url: `/users`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
    };
  },
});

export const { useGetUserQuery, useGetAllUsersQuery } = userApi;
