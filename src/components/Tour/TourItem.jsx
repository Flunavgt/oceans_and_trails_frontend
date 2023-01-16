// import React from 'react'
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const TourItem = ({ tourId }) => {
//   let { itemId } = useParams();
//   const dispatch = useDispatch();
//   const tourshow = useSelector((state) =>
//     state.tours.tour.find((item) => item.id === tourId)
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://oceans-api.onrender.com/api/tours/${id}`
//         );
//         const tourshow = response.data;
//         dispatch({ type: "FETCH_ITEM_SUCCESS", payload: tourshow });
//       } catch (error) {
//         dispatch({ type: "FETCH_ITEM_ERROR", payload: error });
//       }
//     };
//     if (!tourshow) fetchData();
//   }, [tourId, tourshow, dispatch]);

//   return (
//     <div>
//       <h1>{tourshow.tourName}</h1>
//       <p>{tourshow.description}</p>
//     </div>
//   );
// };

// export const mapStateToProps = (state, props) => {
//   return {
//     tourshow: state.items.find((item) => item.id === props.itemId),
//   };
// };

// export default TourItem;
