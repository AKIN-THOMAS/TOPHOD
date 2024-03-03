import { NewRegister, RegistrationResponse } from "@/@types";
// import { useAuth } from "@/context/AuthContext";

const apiUrl = `https://top-server.bakare.tech//api/v1/user`;

export let token: string;

export const SignIn = async (username: string, password: string) => {
  // const { token, setToken } = useAuth();

  try {
    const credentials = window.btoa(`${username}:${password}`);
    const response = await fetch(`${apiUrl}/autenticate `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
    });

    const responseData = await response.json();
    token = responseData?.data?.token;
    localStorage.setItem('userToken', token)
    console.log(`Token from index: ${token}`);

    return { response, responseData };
  } catch (error) {}
};

export const UserRegistration = async (
  data: NewRegister
): Promise<RegistrationResponse> => {
  try {
    const response = await fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData: RegistrationResponse = await response.json();
    console.log(response);
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.error(`Error in registration: ${error}`);
    throw error; // Re-throw the error to be handled elsewhere if needed
  }
};

export const UserProfile = async () => {
  try {
    const token = localStorage.getItem('userToken')
    const response = await fetch(`${apiUrl}/profile `, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();
    console.log(responseData);

    return { response, responseData };
  } catch (error) {
    console.error(`Error getting profile: ${error}`);
    throw error;
  }
};

export const GetUserAtt = async () => {
  try {
    const token = localStorage.getItem('userToken')
    const response = await fetch(`${apiUrl}/user/attendance?page=0&size=50`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(`Error getting attendance: ${error}`);
    throw error;
  }
};
