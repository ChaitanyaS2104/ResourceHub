"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@app/components/Form";
const CreateResoourceBook = () => {
  const [setsubmitting, setSetsubmitting] = useState(false);

  return <Form />;
};

export default CreateResoourceBook;
