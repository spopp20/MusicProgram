import { mutationField, nonNull } from 'nexus'

export const EventSongUpdateManyMutation = mutationField(
  'updateManyEventSong',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'EventSongWhereInput',
      data: nonNull('EventSongUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.eventSong.updateMany(args as any)
    },
  },
)
