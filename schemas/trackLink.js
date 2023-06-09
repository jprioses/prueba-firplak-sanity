const trackLink = {
    name: 'track_link',
    title: 'Relacion guia',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'descripcion',
            type: 'string',
        },
        {
            name: 'ref_track',
            title: 'REF guia',
            type: 'reference',
            to: [{type: 'track'}]
        },
        {
            name: 'id_track',
            title: 'ID guia',
            type: 'number',
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
    ]
}

export {trackLink}