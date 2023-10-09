import { Session } from "../types";
import { rtkApi } from "./rtkApi";

const sessionApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getSessionById: build.query<Session, string>({
      query: (id) => `session/${id}?_embed=seats`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSessionByIdQuery } = sessionApi;
