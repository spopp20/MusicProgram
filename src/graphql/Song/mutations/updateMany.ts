import { mutationField, nonNull } from 'nexus'

export const SongUpdateManyMutation = mutationField('updateManySong', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SongWhereInput',
    data: nonNull('SongUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.song.updateMany(args as any)
  },
})
