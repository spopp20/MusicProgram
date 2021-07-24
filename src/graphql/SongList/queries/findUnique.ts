import { queryField, nonNull } from 'nexus'

export const SongListFindUniqueQuery = queryField('findUniqueSongList', {
  type: 'SongList',
  args: {
    where: nonNull('SongListWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.songList.findUnique({
      where,
      ...select,
    })
  },
})
