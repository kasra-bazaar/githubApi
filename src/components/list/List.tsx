import useFetchData from "../../hooks/useFetchData";
import { Id } from "../../utils/types";
import {
  repositorySchema,
  repositorySchemaTypeChecking,
} from "../../utils/zod";

import { Key } from "react";

import { Loading, Error, NotFound, TypeErr } from "./../handlerState";
import ItemList from "./ItemList";

type repoData = Zod.infer<typeof repositorySchema>;
export default function List({ userId }: Id) {
  const { data, isLoading, error } = useFetchData({ userId: userId });

  if (data && data.length > 1) {
    if (repositorySchemaTypeChecking.safeParse(data).success === false) {
      return <TypeErr />;
    }
  }

  if (data?.status === "404") {
    return <NotFound />;
  }
  if (error) {
    return <Error />;
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
            {isLoading && <Loading />}
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
