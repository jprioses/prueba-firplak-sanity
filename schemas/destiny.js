const destiny = {
    name: 'destiny',
    title: 'Destino',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_destiny',
            title: 'ID destino',
            type: 'number'
        },
        {
            name: 'ref_client',
            title: 'Ref cliente',
            type: 'reference',
            to: [{type: 'clients'}]
        },
        {
            name: 'id_client',
            title: 'ID cliente',
            type: 'number',
        },
        {
            name: 'direction',
            title: 'Direccion',
            type: 'string',
        },
        {
            name: 'city',
            title: 'Ciudad',
            type: 'string'
        },
    ]
}

export {destiny}