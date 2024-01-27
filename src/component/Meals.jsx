import useHTTP from "../hooks/useHTTP.js";
import Error from "./Error";
import MealItem from "./MealItem";
const requestConfig={}
const Meals = () => {
 const {data:mealsData,isloading,error}= useHTTP("https://thoughtful-blue-drill.cyclic.app//meals",requestConfig,[])
 if(isloading){
return  <p className="">Fetching meals...</p>
 }
if(error){
  return  <Error title="Failed to Fetch meals" message={error}/>
}
  return (
    <ul id="meals">
      {mealsData?.map((item) => (
        <MealItem meal={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Meals;
