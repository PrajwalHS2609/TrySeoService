// schemas/countryPage.js
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'countryPage',
  title: 'Country Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          {title: 'India', value: 'in'},
          {title: 'France', value: 'fr'},
          {title: 'Germany', value: 'de'},
          {title: 'United States', value: 'us'},
          {title: 'United Kingdom', value: 'uk'},
          {title: 'Canada', value: 'ca'},
          {title: 'Australia', value: 'au'},
          {title: 'Japan', value: 'jp'},
          {title: 'UAE', value: 'ae'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
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
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  // Optional: automatically convert country to uppercase before saving
  preview: {
    select: {
      title: 'title',
      country: 'country',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.country?.toUpperCase() || '',
      }
    },
  },
})
