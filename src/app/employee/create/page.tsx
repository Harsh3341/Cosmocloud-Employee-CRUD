import React from "react";
import { redirect } from "next/navigation";
import { createEmployee } from "@/actions";

const page = () => {
  const handleFormSubmit = async (formData: FormData) => {
    "use server";

    const data = {
      name: formData.get("name"),
      address: {
        line1: formData.get("line1"),
        city: formData.get("city"),
        zipCode: formData.get("zipCode"),
        country: formData.get("country"),
      },
      phone_num: formData.get("phoneNumber"),
      email: formData.get("email"),
    };

    const response = await createEmployee(data);

    if (response.id) {
      redirect("/");
    }
  };

  return (
    <div>
      <form action={handleFormSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Address</label>
          <div>
            <label>Line 1</label>
            <input name="line1" type="text" />
          </div>
          <div>
            <label>City</label>
            <input name="city" type="text" />
          </div>
          <div>
            <label>Zip Code</label>
            <input name="zipCode" type="number" />
          </div>
          <div>
            <label>Country</label>
            <input name="country" type="text" />
          </div>
        </div>
        <div>
          <label>Phone Number</label>
          <input name="phoneNumber" type="number" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
