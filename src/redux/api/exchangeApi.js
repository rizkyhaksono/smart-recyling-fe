import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const exchangeApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getExchange: builder.query({
        query: () => ({
          url: `exchange`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
      getExchangeById: builder.query({
        query: (uuid) => ({
          url: `exchange/${uuid}`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
    };
  },
});

export const { useGetExchangeQuery, useGetExchangeByIdQuery } = exchangeApi;
