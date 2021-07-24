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
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('tags', {
      type: 'SongTag',
      args: {
        where: 'SongTagWhereInput',
        orderBy: 'SongTagOrderByInput',
        cursor: 'SongTagWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SongTagScalarFieldEnum',
      },
      resolve(root: any) {
        return root.tags
      },
    })
    t.list.field('events', {
      type: 'EventSongList',
      args: {
        where: 'EventSongListWhereInput',
        orderBy: 'EventSongListOrderByInput',
        cursor: 'EventSongListWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'EventSongListScalarFieldEnum',
      },
      resolve(root: any) {
        return root.events
      },
    })
    t.list.field('instruments', {
      type: 'SheetMusic',
      args: {
        where: 'SheetMusicWhereInput',
        orderBy: 'SheetMusicOrderByInput',
        cursor: 'SheetMusicWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SheetMusicScalarFieldEnum',
      },
      resolve(root: any) {
        return root.instruments
      },
    })
    t.nullable.field('_count', {
      type: 'SongCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
