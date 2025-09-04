// studio/schemas/job.js
export default {
  name: 'job',
  title: 'Jobb',
  type: 'document',
  fields: [
    { name: 'title', title: 'Tittel', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'date', title: 'Dato', type: 'date', options: {
        dateFormat: 'DD.MM.YYYY',
        calendarTodayLabel: 'I dag',
    } },
    { name: 'summary', title: 'Kort beskrivelse', type: 'text' },
    {name: 'image', title: 'Bilde', type: 'image', options: { hotspot: true }}
  ],
  preview: {
    select: { title: 'title', media: 'image' }
  }
}
