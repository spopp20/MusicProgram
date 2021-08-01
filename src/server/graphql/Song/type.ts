import { objectType } from 'nexus'

export const Song = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Song',
  definition(t) {
    t.int('id')
    t.string('title')
    t.int('active')
    t.nullable.string('alias')
    t.nullable.string('startKey')
    t.nullable.int('tempoCd')
    t.nullable.string('startWords')
    t.nullable.string('arrangement')
    t.nullable.string('tags')
    t.list.field('events', {
      type: 'EventSong',
      args: {
        where: 'EventSongWhereInput',
        orderBy: 'EventSongOrderByInput',
        cursor: 'EventSongWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'EventSongScalarFieldEnum',
      },
      resolve(root: any) {
        return root.events
      },
    })
    t.list.field('instruments', {
      type: 'InstrumentSong',
      args: {
        where: 'InstrumentSongWhereInput',
        orderBy: 'InstrumentSongOrderByInput',
        cursor: 'InstrumentSongWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'InstrumentSongScalarFieldEnum',
      },
      resolve(root: any) {
        return root.instruments
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', {
      type: 'SongCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
