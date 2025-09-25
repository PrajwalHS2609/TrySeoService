export default {
  name: "countryPage",
  title: "Country Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      options: {
        list: [
          { title: "India", value: "IN" },
          { title: "France", value: "FR" },
          { title: "Germany", value: "DE" },
          { title: "United States", value: "US" },
          { title: "United Kingdom", value: "UK" },
          { title: "Canada", value: "CA" },
          { title: "Australia", value: "AU" },
          { title: "Japan", value: "JP" },
          { title: "UAE", value: "AE" },
        ],
      },
    },
    {
      name: "content",
      title: "Page Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
