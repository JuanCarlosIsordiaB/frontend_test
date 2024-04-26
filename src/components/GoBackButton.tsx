"use client";

import Link from "next/link";
import React from "react";

export const GoBackButton = () => {
  return (
    <Link href="/login" className="absolute top-0 right-0 mt-4 mr-4 font-bold hover:bg-emerald-500 bg-emerald-300 px-2 py-2 rounded-md transition-all">
      Go Back
    </Link>
  );
};

export default GoBackButton;
