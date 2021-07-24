import { mutationField, nonNull } from 'nexus'

export const EventSongListUpdateOneMutation = mutationField(
  'updateOneEventSongList',
  {
    type: nonNull('EventSongList'),
    args: {
      where: nonNull('EventSongListWhereUniqueInput'),
      data: nonNull('EventSongListUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.eventSongList.update({
        where,
        data,
        ...select,
      })
    },
  },
)
