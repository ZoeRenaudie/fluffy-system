import { getAllArticles } from "$lib/scripts/data"


export const load = () => {
    const articles = getAllArticles()

    return {
        articles
    }
}