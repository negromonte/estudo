$(function(){
    $(document).ready(function(){

        $('#titulo1')
            .hide()
            .delay('1000')
            .fadeIn("slow");

        $('#titulo2')
            .hide()
            .delay('2000')
            .fadeIn("slow");

        $('#titulo3')
            .hide()
            .delay('4000')
            .fadeIn("slow");
        
    });
/* Tratamento do Erro de imagens (Eventos de Navegadores).
    $('img').error(function(){
        $('img').attr("src","Caminho da imagem do erro");
    });
*/
/* Tratamento do Erro de Imagens mostrando qual está errada!
    $('img').error(function(){
        var imagem = $(this).attr("src");
        alert('Imagem '+imagem+' Indisponivel!');
        $('img').attr("src","Caminho da imagem do erro");
    });
*/
/* Efeito de Rolagem(scroll) ocultar e visualizar imagem conforme abaixa ou sobe a janela
   $(window).scroll(function(){
        var topo = $(window).scrollTop();
        if(topo>400){
            $('img').fadeOut('1000');
        }else{
            $('img').fadeIn('1000');
        }
   });
   */
   /* Efeito de passar o mouse
        
    $('Nome da classe da Div').hover(function(){
        $(this).css("background","black");
        $('Nome da classe da Div').text("Desenvolvimento");
        $('Nome da classe da Div').text("Mobile");
    });
    */
});