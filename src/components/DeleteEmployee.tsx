"use client";

import { deleteEmployee } from "@/actions";
import { useRouter } from "next/navigation";

const DeleteEmployee = ({ params }: any) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await deleteEmployee(params.id);

    if (res.message) {
      alert(res.message);
      router.push("/");
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteEmployee;
