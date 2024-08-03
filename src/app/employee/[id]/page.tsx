import React from "react";
import DeleteEmployee from "@/components/DeleteEmployee";
import { getEmployeeDetail } from "@/actions";

const page = async ({ params }: any) => {
  const employee = await getEmployeeDetail(params.id);

  return (
    <div>
      Employee Detail
      {employee && (
        <>
          <div>
            <h2>{employee.name}</h2>
            <p>{employee.email}</p>
            <p>{employee.phone_num}</p>
            <p>{employee.address.line1}</p>
            <p>{employee.address.city}</p>
            <p>{employee.address.zipCode}</p>
            <p>{employee.address.country}</p>
          </div>
          <DeleteEmployee params={params} />
        </>
      )}
    </div>
  );
};

export default page;
