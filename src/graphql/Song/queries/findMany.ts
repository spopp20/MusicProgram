import { queryField, nonNull, list } from 'nexus'

export const SongFindManyQuery = queryField('findManySong', {
  type: nonNull(list(nonNull('Song'))),
  args: {
    where: 'SongWhereInput',
    orderBy: list('SongOrderByInput'),
    cursor: 'SongWhereUniqueInput',
    distinct: 'SongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.song.findMany({
      ...args,
      ...select,
    })
  },
})
