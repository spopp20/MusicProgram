import { mutationField, nonNull } from 'nexus'

export const EventSongListDeleteOneMutation = mutationField(
  'deleteOneEventSongList',
  {
    type: 'EventSongList',
    args: {
      where: nonNull('EventSongListWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.eventSongList.delete({
        where,
        ...select,
      })
    },
  },
)
