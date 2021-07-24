import { queryField, nonNull } from 'nexus'

export const SongFindUniqueQuery = queryField('findUniqueSong', {
  type: 'Song',
  args: {
    where: nonNull('SongWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.song.findUnique({
      where,
      ...select,
    })
  },
})
