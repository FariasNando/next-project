export type Curso = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    total_aulas: number;
    total_horas: number;
    aulas?: Aula[];
};

export type Aula = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    tempo: number;
    curso_id: number;
    order: number;
};

export default async function getCursos() {
    const response = await fetch("https://api.origamid.online/cursos");
    if (!response.ok) {
        throw new Error(`Failed to fetch cursos: ${response.status} ${response.statusText}`);
    }
    return await response.json() as Curso[];
}

export async function getCurso(curso: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch curso ${curso}: ${response.status} ${response.statusText}`);
    }
    return await response.json() as Curso;
}

export async function getAula(curso: string, aula: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch aula ${aula} of curso ${curso}: ${response.status} ${response.statusText}`);
    }
    return await response.json() as Aula;
}
