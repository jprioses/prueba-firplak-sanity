const sendingLink = {
    name: 'sending_link',
    title: 'Relacion remision',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'descripcion',
            type: 'string',
        },
        {
            name: 'ref_sending',
            title: 'REF remision',
            type: 'reference',
            to: [{type: 'sending'}]
        },
        {
            name: 'id_sending',
            title: 'ID remision',
            type: 'number',
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
    ]
}

export {sendingLink}