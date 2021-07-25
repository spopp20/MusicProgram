import { mutationField, nonNull } from 'nexus'

export const EventSongDeleteManyMutation = mutationField(
  'deleteManyEventSong',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'EventSongWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.eventSong.deleteMany({ where } as any)
    },
  },
)
