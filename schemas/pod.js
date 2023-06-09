const pod = {
    name: 'pod',
    title: 'POD',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_pod',
            title: 'id_pod',
            type: 'number'
        },
        {
            name: 'ref_order',
            title: 'REF guia/remision',
            type: 'reference',
            to: [{type: 'sending'},
                {type: 'track'}]
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
            name: 'comments',
            title: 'observaciones',
            type: 'string',
        },
        {
            name: 'photo_url',
            title: 'URL foto',
            type: 'string',
        }
        
        
       
    ]
}

export {pod}