// export const getApi = async () => {
//   try {
//     const result = await fetch('https://fe-cors-proxy.herokuapp.com', {
//       headers: {
//         "Target-URL": `https://www.metaweather.com/api/location/${woeid}/`
//       }
//     })
//     if (!result.ok) {
//       throw new Error(`Problem received status code of ${result.status}`)
//     }
//     const response = await result.json()
//     return response
//   } catch(error) {
//       window.alert(`Server Error. Its not your fault the error is: ${error}`)
//     }
// }
