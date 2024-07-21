import useSWR from "swr";
import { repositorySchema } from "../utils/zod";
import ItemList from "./ItemList";

type repoData = Zod.infer<typeof repositorySchema>;
export default function List({ userId }: { userId: string | null }) {
  const { data, isLoading } = useSWR(
    `https://api.github.com/users/${userId}/repos`
  );
  const sekeletonArray = Array.from({ length: 5 }, (_, index) => index);
  return (
    <>
      {!userId && (
        <p className=" text-gray-800 font-bold"> PLEASE ENTER AN ID </p>
      )}
      {userId && (
        <div className="overflow-x-auto flex justify-center w-full items-center">
          <table className="table w-full text-gray-800  ">
            <thead className=" text-gray-800 w-full">
              <tr>
                <th>Name</th>
                <th>language</th>
                <th>description</th>
              </tr>
            </thead>
            {isLoading &&
              sekeletonArray.map(() => (
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <div className=" bg-white/20 w-full animate-pulse rounded-lg p-5 my-2"></div>
                    </td>
                    <td>
                      <div className=" bg-white/20  w-full animate-pulse rounded-lg p-5 my-2"></div>
                    </td>
                    <td>
                      <div className=" bg-white/20 w-full animate-pulse rounded-lg p-5 my-2"></div>
                    </td>
                  </tr>
                </tbody>
              ))}
            {!isLoading &&
              data?.map((item: repoData) => (
                <ItemList
                  name={item.name}
                  lang={item.language}
                  des={item.description}
                />
              ))}
          </table>
        </div>
      )}
    </>
  );
}
