import { queryField, nonNull, list } from 'nexus'

export const SongTagFindManyQuery = queryField('findManySongTag', {
  type: nonNull(list(nonNull('SongTag'))),
  args: {
    where: 'SongTagWhereInput',
    orderBy: list('SongTagOrderByInput'),
    cursor: 'SongTagWhereUniqueInput',
    distinct: 'SongTagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songTag.findMany({
      ...args,
      ...select,
    })
  },
})
