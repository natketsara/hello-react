const API_URL = "http://demo1946494.mockable.io/spaces";

export const fetchData = async () => {
  try {
    let response = await fetch(API_URL, {
      method: "GET"
    });

    let responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw error;
  }
};
