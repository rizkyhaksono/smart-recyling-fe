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
      changeRoleUser: builder.mutation({
        query: ({ data }) => ({
          url: `/user/change-role`,
          method: "POST",
          body: {
            uuid: data.uuid,
            newRole: data.newRole,
          },
        }),
      }),
      inputPoints: builder.mutation({
        query: ({ data }) => ({
          url: `/user/points`,
          method: "POST",
          body: {
            uuid: data.uuid,
            points: data.points,
          },
        }),
      }),
    };
  },
});

export const { useGetUserQuery, useGetAllUsersQuery, useChangeRoleUserMutation, useInputPointsMutation } = userApi;
