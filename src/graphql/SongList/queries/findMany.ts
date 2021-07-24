import { queryField, nonNull, list } from 'nexus'

export const SongListFindManyQuery = queryField('findManySongList', {
  type: nonNull(list(nonNull('SongList'))),
  args: {
    where: 'SongListWhereInput',
    orderBy: list('SongListOrderByInput'),
    cursor: 'SongListWhereUniqueInput',
    distinct: 'SongListScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songList.findMany({
      ...args,
      ...select,
    })
  },
})
