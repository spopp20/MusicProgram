import { mutationField, nonNull } from 'nexus'

export const SongListDeleteOneMutation = mutationField('deleteOneSongList', {
  type: 'SongList',
  args: {
    where: nonNull('SongListWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.songList.delete({
      where,
      ...select,
    })
  },
})
