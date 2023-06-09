const order = {
    name: 'order',
    title: 'Pedidos',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_order',
            title: 'ID pedido',
            type: 'number'
        },
        {
            name: 'id_client',
            title: 'ID cliente',
            type: 'number',
        },
        {
            name: 'ref_client',
            title: 'Ref cliente',
            type: 'reference',
            to: [{type: 'clients'}]
        },
    ]
}

export {order}