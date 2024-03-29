import { objectType } from 'nexus'

export const Event = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Event',
  definition(t) {
    t.int('id')
    t.string('name')
    t.int('active')
    t.nullable.string('description')
    t.nullable.string('venue')
    t.nullable.string('location')
    t.nullable.string('notes')
    t.nullable.string('telephone')
    t.field('startDateTime', { type: 'DateTime' })
    t.nullable.field('endDateTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('songs', {
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
        return root.songs
      },
    })
    t.nullable.field('_count', {
      type: 'EventCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
