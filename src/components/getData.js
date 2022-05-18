const getRequest = async (url) => {

  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
}
export default getRequest;