<script>
var prodid = document.querySelectorAll('#tm-content > article > div:nth-child(1) > div.uk-width-medium-3-10 > div.divisor-confiralink > p')[0].innerText.replace("Código do Produto : ","");
var totalvalue = Number(document.querySelectorAll('#tm-content > article > div:nth-child(1) > div.uk-width-medium-3-10 > p > strong')[0].innerText.replace("R$ ","").replace(",","."));

var promotional = Number(document.querySelectorAll("#tm-content > article > div:nth-child(1) > div.uk-width-medium-3-10 > p > span > strong")[0].innerText.replace("por R$ ","").replace(",","."));


var dataLayer = window.dataLayer || [];
dataLayer.push({
'event': 'RPH.DynamicRemarketing',
  'google_tag_params':{
    'ecomm_prodid': prodid, promotional,
    'ecomm_pagetype' : 'cart_test',
    'ecomm_totalvalue' : totalvalue
  }
});
</script>
