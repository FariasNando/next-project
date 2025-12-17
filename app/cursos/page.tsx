import getCursos from "@/api/cursos";
import Link from "next/link";

const metadata = {
    title: "Cursos",
    description: "Lista de cursos disponíveis",
};

export { metadata };

export default async function PageCursos() {
    const cursos = await getCursos();
     
    return (
        <div className="flex ml-4 mt-4 bg-zinc-50 font-sans dark:bg-black flex-col">
            <h1 className="text-3xl font-bold">Cursos</h1>
            <ul className="mt-4 list-inside">
            {cursos.map((curso) => (
                    <li className="mb-2" key={curso.id}>
                        <Link className="text-blue-300 hover:underline" href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
                    </li>
            ))}            
            </ul>
        </div>
    );
}