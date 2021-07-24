import { mutationField, nonNull } from 'nexus'

export const SongTagUpdateManyMutation = mutationField('updateManySongTag', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SongTagWhereInput',
    data: nonNull('SongTagUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.songTag.updateMany(args as any)
  },
})
