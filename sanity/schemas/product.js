export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name:'price',
      title:'Product Price',
      type:'number'
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'array',
      of:[{type:'block'}]
    },
  ],
}
