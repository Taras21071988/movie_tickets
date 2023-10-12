import { OrderData } from "../types";
import { rtkApi } from "./rtkApi";

const sessionApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getSessionById: build.mutation<OrderData, OrderData>({
      query: (id) => ({
        url:   `seats/${id}?_expand=seat`,
        method:"PATCH",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSessionByIdMutation } = sessionApi;
