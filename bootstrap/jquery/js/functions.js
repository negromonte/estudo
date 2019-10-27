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

    var atual_fs, next_fs, prev_fs;
    var formulario = $('form[name=formulario]');
        
   function next(elem){
        atual_fs = $(elem).parent();
        next_fs = $(elem).parent().next();
        
        $('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo');
        atual_fs.hide(800);
        next_fs.show(800);
    }

    $('.Prev').click(function(){
        atual_fs = $(this).parent();
        prev_fs = $(this).parent().prev();
        
        $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
        atual_fs.hide(800);
        prev_fs.show(800);
    });

    $('input[name=next1').click(function(){
        var array = formulario.serializeArray();
        if(array[0].value == '' || array[1].value == '' || array[2].value == ''
        || array[3].value == ''){
            $('.resp').html('<div class="erros"><p>Preencha Todos Os Campos Pessoais.</p></div>');
        }else{
            $('.resp').html('');
            next($(this));
        }
    });

    $('input[name=next2]').click(function(){
        var array = formulario.serializeArray();
        if(array[4].value == '' || array[5].value == '' || array[6].value == ''){
            $('.resp').html('<div class="erros"><p>Preencha Todos Os Detalhes Da Conta.</p></div>');
        }else{
            $('.resp').html('');
            next($(this));
        }
    });

    $('input[type=submit]').click(function(Evento){

        Evento.preventDefault();
    });
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
   /* Efeito de passar o mouse (Evento de Mouse).
        
    $('Nome da classe da Div').hover(function(){
        $(this).css("background","black");
        $('Nome da classe da Div').text("Desenvolvimento");
        $('Nome da classe da Div').text("Mobile");
    });
    */
