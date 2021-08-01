import { objectType } from 'nexus'

export const EventSong = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'EventSong',
  definition(t) {
    t.int('id')
    t.nullable.field('event', {
      type: 'Event',
      resolve(root: any) {
        return root.event
      },
    })
    t.nullable.field('song', {
      type: 'Song',
      resolve(root: any) {
        return root.song
      },
    })
    t.nullable.int('eventId')
    t.nullable.int('songId')
    t.int('seqNumber')
    t.int('published')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
