import { getCurso } from "@/api/cursos";
import Link from "next/link";

type Params = { params: { curso: string } };

const metadata = {
    title: "Detalhes do Curso",
    description: "Informações detalhadas sobre o curso selecionado",
};

export { metadata };

export default async function CursoPage({ params }: Params) {
    const { curso } = params;
    const cursoData = await getCurso(curso);
    return (
        <div className="flex mt-4 ml-4 bg-zinc-50 font-sans dark:bg-black flex-col">
            <h1 className="text-3xl font-bold mt-4">{cursoData.nome}</h1>
            <p className="mt-2 text-lg">{cursoData.descricao}</p>
            <p className="mt-2 text-lg">Total de aulas: {cursoData.total_aulas}</p>
            <p className="mt-2 text-lg">Total de horas: {cursoData.total_horas}</p>
            <h2 className="text-2xl font-semibold mt-8">Aulas:</h2>
            <ul className="mt-4">
                {cursoData.aulas?.map((aula) => (
                    <li key={aula.id} className="mb-2">
                        <Link
                            href={`/cursos/${cursoData.slug}/${aula.slug}`}
                            className="text-blue-300 hover:underline"
                        >
                            {aula.nome}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}