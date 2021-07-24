import { mutationField, nonNull } from 'nexus'

export const SongTagDeleteOneMutation = mutationField('deleteOneSongTag', {
  type: 'SongTag',
  args: {
    where: nonNull('SongTagWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.songTag.delete({
      where,
      ...select,
    })
  },
})
