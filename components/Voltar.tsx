"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Voltar() {
  const router = useRouter();
  const pathname = usePathname();

  function handleVoltar() {
    if (!pathname || pathname === "/") return;
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return;
    const up = "/" + parts.slice(0, -1).join("/");
    router.push(up || "/");
  }

  if (pathname === "/") return null;

  return (
    <button
      type="button"
      onClick={handleVoltar}
      className="px-4 ml-4 mt-4 py-2 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-black dark:text-white font-medium mt-4 cursor-pointer"
    >
      Voltar
    </button>
  );
}
