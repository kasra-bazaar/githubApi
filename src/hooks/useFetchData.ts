import useSWR from "swr";
import { Id } from "../utils/types";

export default function useFetchData({ userId }: Id) {
  return useSWR(userId ? `https://api.github.com/users/${userId}/repos` : null);
}
