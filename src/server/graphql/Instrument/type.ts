import { objectType } from 'nexus'

export const Instrument = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Instrument',
  definition(t) {
    t.int('id')
    t.string('name')
    t.int('active')
    t.nullable.string('description')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('songs', {
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
        return root.songs
      },
    })
    t.nullable.field('_count', {
      type: 'InstrumentCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
