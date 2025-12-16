import Link from "next/link";

export default function Menu() {
    return (
        <div className="p-8 bg-zinc-900 text-white">
            <ul className="flex space-x-4 text-zinc-600 dark:text-zinc-400">
                <li>
                    <Link href="/">Home</Link></li>
                <li>
                    <Link href="/cursos">Cursos</Link></li>
            </ul>
        </div>
    );
}