"use client";

// REACT
import { ReactNode } from "react";

// STYLES
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
}
