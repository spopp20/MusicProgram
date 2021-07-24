import { mutationField, nonNull } from 'nexus'

export const SongTagDeleteManyMutation = mutationField('deleteManySongTag', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SongTagWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.songTag.deleteMany({ where } as any)
  },
})
