import { queryField, list } from 'nexus'

export const SongAggregateQuery = queryField('aggregateSong', {
  type: 'AggregateSong',
  args: {
    where: 'SongWhereInput',
    orderBy: list('SongOrderByInput'),
    cursor: 'SongWhereUniqueInput',
    distinct: 'SongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.song.aggregate({ ...args, ...select }) as any
  },
})
