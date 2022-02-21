// Buscra os links salvos

export async function getLinksSaved(key){
    const myLinks = await localStorage.getItem(key);

    let linkSave = JSON.parse(myLinks) || [];

    return linkSave;
}




//salvar os links no localStorage




//deletar algum link já salvo