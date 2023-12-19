
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getfood } from "../api/userApi";
import { setProduct } from "../store/foodSlice";
import PizzaCard from "./pizzaCard";

function PizzaList() {
  const data = useSelector((state)=>state.Food.foods)
  console.log(data);
  const dispatch = useDispatch();
  useEffect(()=>{
    getfood()
    .then((res)=>{
      dispatch(setProduct(res.rslt));
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div style={{padding:"2rem", display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
     {data.map((item,index)=>{
      return <PizzaCard food={item} key={index}/>
     })}
    </div>
  );
}

export default PizzaList;