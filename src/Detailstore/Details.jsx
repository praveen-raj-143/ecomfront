// import React, { createContext, useState, useEffect } from 'react'

// export const store = createContext();

// function StoreData(props) {
//     const [detail, setDetail] = useState([])
//     useEffect(()=>{
//         fetch("http://localhost:4065/accessories")
//         .then(res=>res.json())
//         .then(data=>setDetail(data))
//       })
//   return (
//     <store.Provider value={[detail, setDetail]}>
//         {props.children}
//     </store.Provider>
//   )
// }

// export default StoreData;