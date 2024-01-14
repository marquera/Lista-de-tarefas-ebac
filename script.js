$(document).ready(function () {
    $('#form-tarefa').submit(function (e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        if (nomeTarefa.trim() !== '') {
            const novaTarefa = $('<li>').text(nomeTarefa);
            const botaoExcluir = $('<button class="excluir">Excluir</button>');
            novaTarefa.append(botaoExcluir);
            $('#lista-tarefas').append(novaTarefa);
            $('#nome-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', '.excluir', function (e) {
        e.stopPropagation(); // Impede que o clique no botão propague para o li
        $(this).closest('li').remove();
    });

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('concluida');
    });
});