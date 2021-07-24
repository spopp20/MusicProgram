import { mutationField, nonNull } from 'nexus'

export const EventSongListCreateOneMutation = mutationField(
  'createOneEventSongList',
  {
    type: nonNull('EventSongList'),
    args: {
      data: nonNull('EventSongListCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.eventSongList.create({
        data,
        ...select,
      })
    },
  },
)
