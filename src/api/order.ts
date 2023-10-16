import { OrderData } from "../types";
import { rtkApi } from "./rtkApi";

const sessionApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getSessionById: build.mutation<OrderData, OrderData>({
      query: (BuySeats) => ({
        url:   `seats/${id}?_expand=seat`,
        method:"PUT",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSessionByIdMutation } = sessionApi;
