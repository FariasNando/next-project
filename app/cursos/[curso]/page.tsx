import { getCurso } from "@/api/cursos";

type Params = { params: { curso: string } };

export default async function CursoPage({ params }: Params) {
    const { curso } = await params;
    const cursoData = await getCurso(curso);
    return (
        <div className="flex mt-4 ml-4 bg-zinc-50 font-sans dark:bg-black flex-col">
            <h1 className="text-3xl font-bold mt-4">{cursoData.descricao}</h1>
            <h2 className="text-2xl font-semibold mt-8">Aulas:</h2>
            <ul className="mt-4">
                {cursoData.aulas?.map((aula) => (
                    <li key={aula.id} className="mb-2">
                        <a
                            href={`/cursos/${cursoData.slug}/${aula.slug}`}
                            className="text-blue-300 hover:underline"
                        >
                            {aula.nome}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}