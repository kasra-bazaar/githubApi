

import{ Key } from 'react'
import { sekeletonArray } from '../../utils/skeleton'

export default function Loading() {
  return (
   
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
        ))
  )
}
