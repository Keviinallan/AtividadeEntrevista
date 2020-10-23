
$(document).ready(function () {

    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable({
            title: 'Clientes',
            paging: true,
            pageSize: 5,
            sorting: true,
            defaultSorting: 'Nome ASC',
           
            actions: {
                listAction: urlClienteList,
            },
            
            fields: {
                CPF: {
                    title: 'CPF',
                    width: 'auto'
                },
                Nome: {
                    title: 'Nome',
                    width: 'auto'
                },
                Sobrenome: {
                    title: 'Sobrenome',
                    width: 'auto'
                },
                Telefone: {
                    title: 'Telefone',
                    width: 'auto'
                },
                Email: {
                    title: 'Email',
                    width: 'auto'
                },
                Alterar: {
                    title: '',
                    display: function (data) {
                        return '<div style="text-align: center"> <button onclick="window.location.href=\'' + urlAlteracao + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button></div>';
                    }
                }
            }
        });


    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable('load');
})


