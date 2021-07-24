import { queryField, list } from 'nexus'

export const SongListAggregateQuery = queryField('aggregateSongList', {
  type: 'AggregateSongList',
  args: {
    where: 'SongListWhereInput',
    orderBy: list('SongListOrderByInput'),
    cursor: 'SongListWhereUniqueInput',
    distinct: 'SongListScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songList.aggregate({ ...args, ...select }) as any
  },
})
