
Para pegar partes do texto dentro da string podemos usao o includes. 
   if(e && this.href.includes ('whatsapp.com')){

Para pegar o valor exado podemos usar o match
   if(e && this.href.match('api.whatsapp.com/send')){

Podemos tamber usar regerx com /texto/
      if(e && this.href.match(/whatsapp.com/)){


<script>
if (document.URL.includes("mensagem-enviada")){
console.log('foi');
}
</script>
