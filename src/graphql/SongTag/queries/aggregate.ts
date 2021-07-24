import { queryField, list } from 'nexus'

export const SongTagAggregateQuery = queryField('aggregateSongTag', {
  type: 'AggregateSongTag',
  args: {
    where: 'SongTagWhereInput',
    orderBy: list('SongTagOrderByInput'),
    cursor: 'SongTagWhereUniqueInput',
    distinct: 'SongTagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songTag.aggregate({ ...args, ...select }) as any
  },
})
