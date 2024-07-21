import useSWR from "swr";
import { repositorySchema } from "../utils/zod";

type repoData = Zod.infer<typeof repositorySchema>;
export default function List({ userId }: { userId: string | null }) {
  const { data } = useSWR(`https://api.github.com/users/${userId}/repos`);
  return (
    <>
      {!userId && <p className=" text-gray-800 font-bold"> PLEASE ENTER AN ID </p>}
      {userId && data && (
        <ul>{data?.map((item: repoData) => console.log(item))}</ul>
      )}
    </>
  );
}
