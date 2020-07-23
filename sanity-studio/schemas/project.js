export default {
    name : 'project',
    title: 'project',
    type: 'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type:'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type:'slug',
            options:{
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Project screenshot',
            type:'image',
            options:{
                hotspot:true 
            }
        },
        {
            name: 'description',
            title: 'Description',
            type:'text',
        },
        {
            name: 'author',
            title: 'Author',
            type:'reference',
            to:{type:'author'}
        },
    ]
}