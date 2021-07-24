import { mutationField, nonNull } from 'nexus'

export const EventSongListDeleteManyMutation = mutationField(
  'deleteManyEventSongList',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'EventSongListWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.eventSongList.deleteMany({ where } as any)
    },
  },
)
