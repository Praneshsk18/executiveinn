"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false),0);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-900 transition-opacity duration-300">
      <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
      <p className="ml-4 text-white text-lg">Loading...</p>
    </div>
  );
}
