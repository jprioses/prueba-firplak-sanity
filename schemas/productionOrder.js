const productionOrder = {
    name: 'production_order',
    title: 'Orden fabrica',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'descripcion ',
            type: 'string'
        },
        {
            name: 'id_order',
            title: 'ID orden ',
            type: 'number'
        },
        {
            name: 'ref_line',
            title: 'REF linea',
            type: 'reference',
            to: [{type: 'order_line'}]
        },
        {
            name: 'id_line',
            title: 'ID linea',
            type: 'number',
        },
        {
            name: 'store',
            title: 'Bodega',
            type: 'string',
        },
        {
            name: 'production_state',
            title: 'Estado Fabrica',
            type: 'string'
        },
    ]
}

export {productionOrder}