import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const reportApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getReports: builder.query({
        query: () => ({
          url: `/reports`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
    };
  },
});

export const { useGetReportsQuery } = reportApi;
