"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ForceRefresh(): any {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
}
