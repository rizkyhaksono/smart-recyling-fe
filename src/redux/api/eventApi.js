import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const eventsApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getEvents: builder.query({
        query: () => ({
          url: `/events`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
      postEvents: builder.mutation({
        query: ({ data }) => ({
          url: `/events`,
          method: "POST",
          body: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        }),
      }),
    };
  },
});

export const { useGetEventsQuery } = eventsApi;
