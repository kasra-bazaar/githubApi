import useSWR from "swr";
import { repositorySchema, repositorySchemaTypeChecking } from "../utils/zod";
import ItemList from "./ItemList";
import { Key } from "react";

type repoData = Zod.infer<typeof repositorySchema>;
export default function List({ userId }: { userId: string | null }) {
  const { data, isLoading , error } = useSWR(
    userId ? `https://api.github.com/users/${userId}/repos` : null
  );
  const sekeletonArray = Array.from({ length: 5 }, (_, index) => index);
  console.log(data);
  if (data && data.length > 1) {
    if (repositorySchemaTypeChecking.safeParse(data).success === false) {
      return (
        <p className=" font-bold text-gray-800 text-3xl">
          WE HAVE SOME ERROR AT THIS TIME - SOMTHING WENT WRONG!
        </p>
      );
    }
  }

  if (data?.status === "404") {
    return (
      <p className=" font-bold text-gray-800 text-3xl">
        {" "}
        GITHUB DOES NOT HAVE THIS USERID !!
      </p>
    );
  }
  if(error) { 
    return <p className=" text-gray-800 font-bold text-3xl "> WE HAVE AN ERROR , WE WILL FIX IT SOON , STAY TUNED !!</p>
  }
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
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              sekeletonArray.map((_: unknown, index: Key) => (
                <tbody key={index}>
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
              data &&
              data?.map((item: repoData, index: Key) => (
                <ItemList
                  key={index}
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
