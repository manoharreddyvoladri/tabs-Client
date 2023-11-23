// import useFetch from "../../hooks/useFetch";
// import "./featuredProperties.css";

// const FeaturedProperties = () => {
//   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
// console.log(data);
//   return (
//     <div className="fp">
//       {loading ? (
//         "Loading"
//       ) : (
//         // <>
//     {data.length>0 &&
//                         {data.map((item) => (

//                           <div className="fpItem" key={item._id}>
//                             <img
//                               src={item.photos[0]}
//                               alt=""
//                               className="fpImg"
//                             />
//                             <span className="fpName">{item.name}</span>
//                             <span className="fpCity">{item.city}</span>
//                             <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
//                             {item.rating && <div className="fpRating">
//                               <button>{item.rating}</button>
//                               <span>Excellent</span>
//                             </div>}
//                           </div>
//                         ))}
//       }
//         // </>
//       )}
//     </div>
//   );
// };

// export default FeaturedProperties;


import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  console.log(data);

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        // Check if data is an array before using map
        Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))
        ) : (
          // Handle the case when data is not an array or is an empty array
          "No featured properties available"
        )
      )}
    </div>
  );
};

export default FeaturedProperties;
