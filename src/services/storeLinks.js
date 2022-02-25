// Buscra os links salvos
export async function getLinksSaved(key){
    const myLinks = await localStorage.getItem(key);

    let linkSave = JSON.parse(myLinks) || [];

    return linkSave;
}
//salvar os links no localStorage
export async function saveLinkAtLocalStorage(key, newLink){
    let linkStored = await getLinksSaved(key);

    // se já houver um lin salvo, não poderá salvar o mesmo ou duplicar
    const hasLink = linkStored.some( link => link.id === newLink.id);
   
    if(hasLink){
        console.log('Esse link já existe na sua lista')
        return;
    }
    // adicionar esse novo link na lista
    linkStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linkStored));
    console.log('LINK SALVO COM SUCESSO');
}



//deletar algum link já salvo
export function deleteLinks(){
    
}