try{
    var elementVisible =
    'body > div.master-wrapper-page.items-per-row-three > div.master-wrapper-content > div.master-column-wrapper > div > div > div.page-body.checkout-data > div > div.title > strong'

    var invisivel = document.querySelector(elementVisible).hidden
    if (invisivel == true){
        console.log('');
    }

    else if (invisivel == false){
        console.log('elemento na tela')
        // Snippet de tag.
    }

    }
catch (err){
}
