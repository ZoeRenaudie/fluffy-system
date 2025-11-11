import { readdirSync, readFileSync } from 'fs';
import frontmatter from 'front-matter';

type Meta = {
    title: string,
    description: string,
    author: string,
    date: string,
    draft: boolean,
    tags: string[]
};

export function getAllArticles() {
    const basePath = './src/lib/markdown/articles/';
    const filenames = readdirSync(basePath);

    const articles = filenames.map(f => {
        const raw = readFileSync(basePath + f, 'utf-8');
        
        // Extraction du frontmatter uniquement
        const { attributes } = frontmatter(raw);

        // Retourne uniquement les métadonnées
        return attributes as Meta;
    });

    return articles;
    
}