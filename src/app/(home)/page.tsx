import React from "react";
import { Employee } from "@/types";
import Link from "next/link";
import { getEmployees } from "@/actions";
import Loader from "@/components/Loader";

const page = async () => {
  const employees = await getEmployees();

  return (
    <>
      <h2>Employee List</h2>
      <div className="home-page">
        {employees && employees.length > 0 ? (
          employees.map((employee: Employee) => (
            <Link
              href={`/employee/${employee._id}`}
              key={employee._id}
              className="employee-card"
            >
              <p>{employee._id}</p>
              <h2>{employee.name}</h2>
            </Link>
          ))
        ) : (
          <h3> No Employees in the system</h3>
        )}
      </div>
    </>
  );
};
export default page;
