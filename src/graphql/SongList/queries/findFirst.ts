import { queryField, list } from 'nexus'

export const SongListFindFirstQuery = queryField('findFirstSongList', {
  type: 'SongList',
  args: {
    where: 'SongListWhereInput',
    orderBy: list('SongListOrderByInput'),
    cursor: 'SongListWhereUniqueInput',
    distinct: 'SongListScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songList.findFirst({
      ...args,
      ...select,
    })
  },
})
