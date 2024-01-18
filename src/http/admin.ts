const apiUrl = `https://top-server.bakare.tech/api/v1/user`;

// import { token } from "@/http";

export let adminToken: string;

export const AdminSignIn = async (username: string, password: string) => {
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
    adminToken = responseData?.data?.token;
    // console.log(`Admin Token: ${adminToken}`);
    localStorage.setItem('adminToken', adminToken)

    return { response, responseData };
  } catch (error) {
    console.error(`Error loggin in: ${error}`);
    throw error;
  }
};
export const GetAllMembers = async (page: number, size: number) => {
  try {
    const token = localStorage.getItem('adminToken')
    const response = await fetch(`${apiUrl}/all?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(`adminToken: ${adminToken}`);

    const responseData = await response.json();
    console.log(response);
    console.log(responseData);
    return { response, responseData };
  } catch (error) {
    console.error(`Error getting members: ${error}`);
    throw error;
  }
};

export const GetFilteredMembers = async (params: {
  page: number;
  size: number;
  parts?: string | undefined;
  subUnit?: string | undefined;
  level?: number | undefined;
}) => {
  const { page, size, parts, subUnit, level } = params;
  const token = localStorage.getItem('adminToken')
  const response = await fetch(
    `${apiUrl}/all?page=${page}&size=${size}${parts ? `&parts=${parts}` : ""}${
      subUnit ? `&subunit=${subUnit}` : ""
    }${level ? `&level=${level}` : ""}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const responseData = await response.json();
  console.log(response);
  console.log(responseData);
  return { response, responseData };
};


// Executives
export const GetExecutives = async() => {
  try {
    const token = localStorage.getItem('adminToken')
    const response = await fetch(`${apiUrl}/executives`, {
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    })
    const responseData = await response.json();
    console.log(response);
    console.log(responseData);
    return { response, responseData };
  } catch (error) {
    console.error(`Error getting executives: ${error}`);
    throw error;
  }
}

// Applicants
export const GetApplicants = async (page: number, size: number) => {
  try {
    const token = localStorage.getItem('adminToken')
    const response = await fetch(`${apiUrl}/applicants?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(`adminToken: ${adminToken}`);

    const responseData = await response.json();
    console.log(response);
    console.log(responseData);
    return { response, responseData };
  } catch (error) {
    console.error(`Error getting members: ${error}`);
    throw error;
  }
};