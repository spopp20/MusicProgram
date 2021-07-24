import { mutationField, nonNull } from 'nexus'

export const SongListUpdateManyMutation = mutationField('updateManySongList', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SongListWhereInput',
    data: nonNull('SongListUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.songList.updateMany(args as any)
  },
})
