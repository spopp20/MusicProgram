import { queryField, list } from 'nexus'

export const SongFindFirstQuery = queryField('findFirstSong', {
  type: 'Song',
  args: {
    where: 'SongWhereInput',
    orderBy: list('SongOrderByInput'),
    cursor: 'SongWhereUniqueInput',
    distinct: 'SongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.song.findFirst({
      ...args,
      ...select,
    })
  },
})
