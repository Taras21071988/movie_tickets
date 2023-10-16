import { OrderData } from "../types";
import { rtkApi } from "./rtkApi";

const sessionApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateBySeatsById: build.mutation<OrderData, OrderData>({
      query: ({ id, buy_seats }) => ({
        method: "PUT",
        url: `seats/${id}`,
        body:{
          buy_seats
        }
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateBySeatsByIdMutation } = sessionApi;
