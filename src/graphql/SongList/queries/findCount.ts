import { queryField, nonNull, list } from 'nexus'

export const SongListFindCountQuery = queryField('findManySongListCount', {
  type: nonNull('Int'),
  args: {
    where: 'SongListWhereInput',
    orderBy: list('SongListOrderByInput'),
    cursor: 'SongListWhereUniqueInput',
    distinct: 'SongListScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.songList.count(args as any)
  },
})
