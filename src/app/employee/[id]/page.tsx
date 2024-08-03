import React from "react";
import DeleteEmployee from "@/components/DeleteEmployee";
import { getEmployeeDetail } from "@/actions";

const page = async ({ params }: any) => {
  const employee = await getEmployeeDetail(params.id);

  return (
    <div className="employee-container">
      <h1>Employee Detail</h1>
      {employee && (
        <>
          <div className="employee-detail-card">
            <div>
              <h3>Name</h3>
              <p>{employee.name}</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>{employee.email}</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>{employee.phone_num}</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>{employee.address.line1}</p>
            </div>
            <div>
              <h3>City</h3>
              <p>{employee.address.city}</p>
            </div>
            <div>
              <h3>Zip Code</h3>
              <p>{employee.address.zipCode}</p>
            </div>
            <div>
              <h3>Country</h3>
              <p>{employee.address.country}</p>
            </div>
            <DeleteEmployee params={params} />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
