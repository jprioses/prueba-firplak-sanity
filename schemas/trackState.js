const trackState = {
    name: 'track_state',
    title: 'Estado',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_state',
            title: 'id_estado',
            type: 'number'
        },

        {
            name: 'ref_sending',
            title: 'REF remision',
            type: 'reference',
            to: [{type: 'sending'}]
        },
        {
            name: 'id_reference',
            title: 'ID guia/remision',
            type: 'number'
        },
        {
            name: 'reference_type',
            title: 'Tipo referencia',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Fecha Actualizacion',
            type: 'date'
        },
        {
            name: 'state',
            title: 'Estado',
            type: 'string',
            options: {
                list: ['En bodega', 'Despachado', 'Entregado', 'Novedad']        
            }
        },
        {
            name: 'comments',
            title: 'Observaciones',
            type: 'text'
        },


    ]
}

export {trackState}