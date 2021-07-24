import { objectType } from 'nexus'

export const SongList = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'SongList',
  definition(t) {
    t.int('id')
    t.nullable.field('events', {
      type: 'Event',
      resolve(root: any) {
        return root.events
      },
    })
    t.nullable.int('eventId')
    t.nullable.field('song', {
      type: 'Song',
      resolve(root: any) {
        return root.song
      },
    })
    t.nullable.int('songId')
    t.int('published')
    t.nullable.string('description')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
