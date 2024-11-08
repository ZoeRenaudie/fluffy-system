import { readdirSync, readFileSync } from 'fs'
import frontmatter from 'front-matter'


type Meta =  {
    title: string,
    description: string,
    author: string,
    date: string,
    draft: boolean,
    tags: string[]
}

export function getAllArticles() {
    const basePath = './src/lib/markdown/articles/'
    const filenames = readdirSync(basePath)
    
    const articles = filenames.map(f => {
        const raw: string = readFileSync(basePath + f, 'utf-8')
        // Explorer markdown-it et ses plugins (notamment html)
        // Ici faut ajouter une ligne (ou appel de fonction) pour convertir le markdown en html 

        // La question : c'est comment ou qu'est-ce qu'on renvoit comme donnée (meta seulement ou meta + contenu)?
        return parseFrontMatter(raw) as Meta
    })

    return articles
}


export function getCV() {}


const parseFrontMatter = (content: string) => {
	return frontmatter(content).attributes;
};