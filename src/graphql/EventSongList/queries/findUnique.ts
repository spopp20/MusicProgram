import { queryField, nonNull } from 'nexus'

export const EventSongListFindUniqueQuery = queryField(
  'findUniqueEventSongList',
  {
    type: 'EventSongList',
    args: {
      where: nonNull('EventSongListWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.eventSongList.findUnique({
        where,
        ...select,
      })
    },
  },
)
