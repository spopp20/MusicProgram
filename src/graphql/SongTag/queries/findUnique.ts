import { queryField, nonNull } from 'nexus'

export const SongTagFindUniqueQuery = queryField('findUniqueSongTag', {
  type: 'SongTag',
  args: {
    where: nonNull('SongTagWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.songTag.findUnique({
      where,
      ...select,
    })
  },
})
