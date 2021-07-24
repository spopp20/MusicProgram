import { queryField, nonNull, list } from 'nexus'

export const EventSongListFindCountQuery = queryField(
  'findManyEventSongListCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'EventSongListWhereInput',
      orderBy: list('EventSongListOrderByInput'),
      cursor: 'EventSongListWhereUniqueInput',
      distinct: 'EventSongListScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.eventSongList.count(args as any)
    },
  },
)
