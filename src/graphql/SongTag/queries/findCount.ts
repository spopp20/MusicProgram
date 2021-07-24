import { queryField, nonNull, list } from 'nexus'

export const SongTagFindCountQuery = queryField('findManySongTagCount', {
  type: nonNull('Int'),
  args: {
    where: 'SongTagWhereInput',
    orderBy: list('SongTagOrderByInput'),
    cursor: 'SongTagWhereUniqueInput',
    distinct: 'SongTagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.songTag.count(args as any)
  },
})
