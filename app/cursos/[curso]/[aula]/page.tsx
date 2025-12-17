import { getAula } from "@/api/cursos";

const metadata = {
    title: "Detalhes da Aula",
    description: "Informações detalhadas sobre a aula selecionada",
};

export { metadata };

type Params = { params: { curso: string, aula: string } };

export default async function AulaPage({ params }: Params) {
    const { curso, aula } = await params;
    const aulaData = await getAula(curso, aula);

    return (
        <div className="flex mt-4 ml-4 bg-zinc-50 font-sans dark:bg-black flex-col">
            <h1 className="text-3xl font-bold mt-4">{aulaData.nome}</h1>
            <p className="mt-2 text-lg">{aulaData.descricao}</p>
            <p className="mt-4">Duração: {aulaData.tempo} minutos</p>
        </div>
    );
}