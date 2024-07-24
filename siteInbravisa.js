<script>
window.dataLayer = window.dataLayer || [];

document.querySelector("#root > div > div > div.flex.flex-wrap.justify-center.mb-64 > div > div:nth-child(1) > div:nth-child(4) > div > a > button").addEventListener("click", function() {
    var evento = {
        'event': 'clique',
        'custom_title': 'centro_infusao:detalhes',
        'custom_section': 'inbravisa:home',
    };
    
    window.dataLayer.push(evento);

});
</script>

//-------------------------------------------------------------------------------------------------------------------------------------------
<script>
window.dataLayer = window.dataLayer || [];

document.querySelector("#root > div > div > div.flex.flex-wrap.justify-center.mb-64 > div > div:nth-child(2) > div:nth-child(4) > div > a > button").addEventListener("click", function() {
    var evento = {
        'event': 'clique',
        'custom_title': 'transplante_capilar:detalhes',
        'custom_section': 'inbravisa:home',
    };
    
    window.dataLayer.push(evento);

});
</script>

//-------------------------------------------------------------------------------------------------------------------------------------------

<script>
window.dataLayer = window.dataLayer || [];

function pushDataLayerEvent(title) {
    var evento = {
        'event': 'clique',
        'custom_title': title,
        'custom_section': 'inbravisa:home',
    };
    
    window.dataLayer.push(evento);
}

// Adiciona listeners aos botões "comprar"
document.querySelectorAll("#root > div > div > div.flex.flex-wrap.justify-center.mb-64 > div > div:nth-child(1) > div:nth-child(5) > a > button").forEach(function(button) {
    button.addEventListener("click", function() {
        pushDataLayerEvent('centro_infusao:comprar');
    });
});

// Adiciona listeners aos botões "detalhes"
document.querySelectorAll("#root > div > div > div.flex.flex-wrap.justify-center.mb-64 > div > div:nth-child(1) > div:nth-child(4) > div > a > button").forEach(function(button) {
    button.addEventListener("click", function() {
        pushDataLayerEvent('centro_infusao:detalhes');
    });
});
</script>
