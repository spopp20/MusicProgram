import { queryField, list } from 'nexus'

export const EventSongListFindFirstQuery = queryField(
  'findFirstEventSongList',
  {
    type: 'EventSongList',
    args: {
      where: 'EventSongListWhereInput',
      orderBy: list('EventSongListOrderByInput'),
      cursor: 'EventSongListWhereUniqueInput',
      distinct: 'EventSongListScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.eventSongList.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
