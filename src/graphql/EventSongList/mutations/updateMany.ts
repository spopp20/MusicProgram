import { mutationField, nonNull } from 'nexus'

export const EventSongListUpdateManyMutation = mutationField(
  'updateManyEventSongList',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'EventSongListWhereInput',
      data: nonNull('EventSongListUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.eventSongList.updateMany(args as any)
    },
  },
)
