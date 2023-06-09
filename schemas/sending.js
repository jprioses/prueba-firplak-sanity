const sending = {
    name: 'sending',
    title: 'Remision',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'descripcion ',
            type: 'string'
        },
        {
            name: 'id_sending',
            title: 'ID remision ',
            type: 'number'
        },
        {
            name: 'shipment_date',
            title: 'Fecha despacho',
            type: 'date',
        },
        {
            name: 'delivery_date',
            title: 'Fecha entrega',
            type: 'date',
        },
    ]
}

export {sending}