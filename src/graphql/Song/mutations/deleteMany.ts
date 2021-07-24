import { mutationField, nonNull } from 'nexus'

export const SongDeleteManyMutation = mutationField('deleteManySong', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SongWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.song.deleteMany({ where } as any)
  },
})
