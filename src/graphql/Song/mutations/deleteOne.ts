import { mutationField, nonNull } from 'nexus'

export const SongDeleteOneMutation = mutationField('deleteOneSong', {
  type: 'Song',
  args: {
    where: nonNull('SongWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.song.delete({
      where,
      ...select,
    })
  },
})
