import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'countryPage',
  title: 'Country Page',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Important for SEO and accessibility',
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          {title: 'India', value: 'IN'},
          {title: 'France', value: 'FR'},
          {title: 'Germany', value: 'DE'},
          {title: 'United States', value: 'US'},
          {title: 'United Kingdom', value: 'UK'},
          {title: 'Canada', value: 'CA'},
          {title: 'Australia', value: 'AU'},
          {title: 'Japan', value: 'JP'},
          {title: 'UAE', value: 'AE'},
        ],
      },
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
