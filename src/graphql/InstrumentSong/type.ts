import { objectType } from 'nexus'

export const InstrumentSong = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'InstrumentSong',
  definition(t) {
    t.int('id')
    t.nullable.string('notes')
    t.nullable.string('words')
    t.nullable.string('mimeType')
    t.nullable.string('file')
    t.nullable.field('instrument', {
      type: 'Instrument',
      resolve(root: any) {
        return root.instrument
      },
    })
    t.nullable.field('song', {
      type: 'Song',
      resolve(root: any) {
        return root.song
      },
    })
    t.nullable.int('songId')
    t.nullable.int('instrumentId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
