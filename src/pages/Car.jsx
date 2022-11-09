import React , {useEffect} from 'react'
import { useLocation , useParams} from 'react-router-dom'
/* ============== Components & Layouts ============== */

import {getEachCarDetail} from "../utils/getModelsFromBrand"
const Car = () => {
  const {carbrand, car} = useParams();

  useEffect(() => {
    console.log(getEachCarDetail(carbrand, car))
  }, [])

  return (
    <>
      <div className="grid grid-cols-3 gap-2 p-6 lg:max-w-[60em] mx-auto">
        <div className="col-span-3 h-56 bg-lighten-1 rounded"></div>
        <div className="aspect-square bg-lighten-1 rounded"></div>
        <div className="aspect-square bg-lighten-1 rounded"></div>
        <div className="aspect-square bg-lighten-1 rounded"></div>
      </div>
    </>
  )
}

export default Car