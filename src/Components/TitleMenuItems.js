import React from 'react'
import { img_link } from "../Config";

const TitleMenuItems = ({items}) => {
  console.log(items)
  
    return (
    <div>
        {items.map((item)=> <div>
            <div key={item.id} className="flex flex-col">
<li className="font-bold" >
  {item?.card?.info?.name}
</li>
<li className="">Rs.{item?.card?.info?.price / 100}</li>
<li className="text-sm font-medium">
  {item?.card?.info?.itemAttribute.vegClassifier}
</li>
<li className="text-sm text-gray-400">
  {item?.card?.info?.description}
</li>
</div>
<div className="mt-10">
<li>
  {item?.card?.info?.imageId ? (
    <img
      width="15%"
      className="rounded"
      src={`${img_link}${item?.card?.info?.imageId}`}
    />
  ) : (
    ""
  )}
</li>
<button
  onClick={() => handleAddItem(item?.card?.info)}
  className="p-1 text-green-700 font-medium text-sm ml-10 text-center bg-white shadow-lg rounded hover:bg-gray-200"
>
  ADD +
</button>
</div>
            </div> )}
    </div>
  )
}

export default TitleMenuItems

{/* <div className="flex flex-col">
{" "}
<li className="font-bold" key={item.id}>
  {item?.card?.info?.name}
</li>
<li className="">Rs.{item?.card?.info?.price / 100}</li>
<li className="text-sm font-medium">
  {item?.card?.info?.itemAttribute.vegClassifier}
</li>
<li className="text-sm text-gray-400">
  {item?.card?.info?.description}
</li>
</div>
<div className="mt-10">
<li>
  {item?.card?.info?.imageId ? (
    <img
      width="15%"
      className="rounded"
      src={`${img_link}${item?.card?.info?.imageId}`}
    />
  ) : (
    ""
  )}
</li>
<button
  onClick={() => handleAddItem(item?.card?.info)}
  className="p-1 text-green-700 font-medium text-sm ml-10 text-center bg-white shadow-lg rounded hover:bg-gray-200"
>
  ADD +
</button>
</div> */}