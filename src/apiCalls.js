// export const getActivityData = async (type, price) => {
//   const result = await fetch(`http://www.boredapi.com/api/activity/?type=${ type || "education" }&minprice=0&maxprice=${ price || 0.5 }`)
//   return await result.json();
// }

export const getActivityData = async (type, price) => {
  const result = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": `http://www.boredapi.com/api/activity/?type=${ type || "education" }&minprice=0&maxprice=${ price || 0.5 }`
    }
  })
  return await result.json()
}
