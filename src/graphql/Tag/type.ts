import { objectType } from 'nexus'

export const Tag = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Tag',
  definition(t) {
    t.int('id')
    t.string('name')
    t.list.field('songs', {
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
        return root.songs
      },
    })
    t.nullable.field('_count', {
      type: 'TagCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
