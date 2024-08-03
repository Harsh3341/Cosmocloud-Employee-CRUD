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
    <div className="form-container">
      <h2>Add Employee</h2>
      <form action={handleFormSubmit} className="form">
        <div>
          <label>Name</label>
          <input name="name" />
        </div>
        <div>
          <div>
            <label>Address</label>
            <input name="line1" />
          </div>
          <div>
            <label>City</label>
            <input name="city" />
          </div>
          <div>
            <label>Zip Code</label>
            <input name="zipCode" />
          </div>
          <div>
            <label>Country</label>
            <input name="country" />
          </div>
        </div>
        <div>
          <label>Phone Number</label>
          <input name="phoneNumber" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
