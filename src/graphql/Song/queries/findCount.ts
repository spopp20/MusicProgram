import { queryField, nonNull, list } from 'nexus'

export const SongFindCountQuery = queryField('findManySongCount', {
  type: nonNull('Int'),
  args: {
    where: 'SongWhereInput',
    orderBy: list('SongOrderByInput'),
    cursor: 'SongWhereUniqueInput',
    distinct: 'SongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.song.count(args as any)
  },
})
