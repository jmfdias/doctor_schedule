import * as CDataTable from './components/dataTable';

const FIELDS = [
  { data: 'id', name: 'id' },
  { data: 'name', columns: 'name' },
  { data: 'cpf', columns: 'cpf' }
];
const ID_TABLE = '#patients-table';
const BASE_URL = '/patients/';

$(() => {
  CDataTable.loadDataTable(ID_TABLE, BASE_URL + 'data', FIELDS);
});

$(document).on('click', '.btn-delete', (event) => {
  CDataTable.deleteItem(event, BASE_URL, () => {
    $(ID_TABLE).DataTable().destroy();
    CDataTable.loadDataTable(ID_TABLE, BASE_URL + 'data', FIELDS);
  })
});

$(document).on('click', '.btn-edit', (event) => {
  CDataTable.updateItem(event, BASE_URL);
});

$(document).on('click', '.btn-preview', (event) => {
  CDataTable.previewItem(event, BASE_URL);
});