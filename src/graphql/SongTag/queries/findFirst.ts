import { queryField, list } from 'nexus'

export const SongTagFindFirstQuery = queryField('findFirstSongTag', {
  type: 'SongTag',
  args: {
    where: 'SongTagWhereInput',
    orderBy: list('SongTagOrderByInput'),
    cursor: 'SongTagWhereUniqueInput',
    distinct: 'SongTagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songTag.findFirst({
      ...args,
      ...select,
    })
  },
})
