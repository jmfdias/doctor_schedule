import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

const BUTTONS = 
`<div class="btn-group">
  <button class="btn-preview btn btn-info btn-sm"><i class="fa fa-eye"></i></button>
  <button class="btn-edit btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
  <button class='btn-delete btn btn-danger btn-sm'><i class="fa fa-trash"></i></button>
</div>`;

const loadDataTable = (idTable, urlAjax, fields) => {
  fields.push({ defaultContent: BUTTONS });
  $(idTable).DataTable({
    processing: true,
    serverSide: true,
    ajax: urlAjax,
    columns: fields,
    language: {
      "sEmptyTable": "Nenhum registro encontrado",
      "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
      "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
      "sInfoFiltered": "(Filtrados de _MAX_ registros)",
      "sInfoPostFix": "",
      "sInfoThousands": ".",
      "sLengthMenu": "_MENU_ resultados por página",
      "sLoadingRecords": "Carregando...",
      "sProcessing": "Processando...",
      "sZeroRecords": "Nenhum registro encontrado",
      "sSearch": "Pesquisar",
      "oPaginate": {
        "sNext": "Próximo",
        "sPrevious": "Anterior",
        "sFirst": "Primeiro",
        "sLast": "Último"
      },
      "oAria": {
        "sSortAscending": ": Ordenar colunas de forma ascendente",
        "sSortDescending": ": Ordenar colunas de forma descendente"
      }
    }
  });
}

const deleteItem = (event, urlBase, callback) => {
  let id = $(event.currentTarget).parents('tr').children('td:first-child').html();
  if (confirm('Deseja excluir este item?')) {
    axios.post(urlBase + id, {
      _method: 'delete',
    })
      .then(function(data) {
        callback();
      });
  }
}

const updateItem = (event, urlBase) => {
  let id = $(event.currentTarget).parents('tr').children('td:first-child').html();
  window.location = urlBase + id + '/edit';
}

const previewItem = (event, urlBase) => {
  let id = $(event.currentTarget).parents('tr').children('td:first-child').html();
  window.location = urlBase + id;
}

export { updateItem, loadDataTable, deleteItem, previewItem }

