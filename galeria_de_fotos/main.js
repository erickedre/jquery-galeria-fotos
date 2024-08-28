$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-img-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class= "overlay-img-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagme em tamanho real">
                Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-img-nova').val('')
        })
})
