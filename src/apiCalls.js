const environmentVariable = process.env.REACT_APP_NOT_SECRET_CODE;

export const getActivityData = async (type, price) => {
  const result = await fetch(`http://www.boredapi.com/api/activity/?type=${ type || "education" }&minprice=0&maxprice=${ price || 0.5 }`)
  return await result.json();
}
