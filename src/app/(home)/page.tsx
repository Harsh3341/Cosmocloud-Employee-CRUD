import React from "react";
import { Employee } from "@/types";
import Link from "next/link";
import { getEmployees } from "@/actions";

const page = async () => {
  const employees = await getEmployees();

  return (
    <div>
      <Link href="/employee/create">Add Employee</Link>
      {employees.map((employee: Employee) => (
        <Link href={`/employee/${employee._id}`} key={employee._id}>
          <h2>{employee.name}</h2>
          <p>{employee.email}</p>
        </Link>
      ))}
    </div>
  );
};

export default page;
