"use server";

export async function getEmployees() {
  try {
    const response = await fetch(
      `${process.env.API_URL}/employee?limit=10&offset=0`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          projectId: process.env.PROJECT_ID as string,
          environmentId: process.env.ENVIRONMENT_ID as string,
        },
        cache: "no-store",
      }
    );

    const { data } = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getEmployeeDetail(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/employee/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        projectId: process.env.PROJECT_ID as string,
        environmentId: process.env.ENVIRONMENT_ID as string,
      },
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function createEmployee(formData: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/employee`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        projectId: process.env.PROJECT_ID as string,
        environmentId: process.env.ENVIRONMENT_ID as string,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteEmployee(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/employee/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        projectId: process.env.PROJECT_ID as string,
        environmentId: process.env.ENVIRONMENT_ID as string,
      },
      body: JSON.stringify({}),
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
