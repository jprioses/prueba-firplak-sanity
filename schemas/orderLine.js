const orderLine = {
    name: 'order_line',
    title: 'Linea pedido',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_line',
            title: 'ID linea ',
            type: 'number'
        },
        {
            name: 'ref_order',
            title: 'Ref pedido',
            type: 'reference',
            to: [{type: 'order'}],
            
        },
        {
            name: 'id_order',
            title: 'ID pedido',
            type: 'number',
        },
        {
            name: 'ref_product',
            title: 'REF producto',
            type: 'reference',
            to: [{type: 'products'}]
        },
        {
            name: 'id_product',
            title: 'ID producto',
            type: 'number',
        },
        {
            name: 'ref_destiny',
            title: 'REF destino',
            type: 'reference',
            to: [{type: 'destiny'}],
        },
        {
            name: 'id_destiny',
            title: 'ID destino',
            type: 'number',
        },
        {
            name: 'quantity',
            title: 'Cantidad',
            type: 'number'
        },
        {
            name: 'delivery_date',
            title: 'Fecha entrega',
            type: 'date'
        },
        
    ]
}

export {orderLine}