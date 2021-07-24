import { objectType } from 'nexus'

export const EventSongList = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'EventSongList',
  definition(t) {
    t.int('id')
    t.nullable.field('events', {
      type: 'Event',
      resolve(root: any) {
        return root.events
      },
    })
    t.nullable.int('eventId')
    t.nullable.field('songs', {
      type: 'Song',
      resolve(root: any) {
        return root.songs
      },
    })
    t.nullable.int('songId')
    t.int('published')
    t.nullable.string('description')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
