import { mutationField, nonNull } from 'nexus'

export const SongListDeleteManyMutation = mutationField('deleteManySongList', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SongListWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.songList.deleteMany({ where } as any)
  },
})
