import { queryField, list } from 'nexus'

export const EventSongListAggregateQuery = queryField(
  'aggregateEventSongList',
  {
    type: 'AggregateEventSongList',
    args: {
      where: 'EventSongListWhereInput',
      orderBy: list('EventSongListOrderByInput'),
      cursor: 'EventSongListWhereUniqueInput',
      distinct: 'EventSongListScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.eventSongList.aggregate({ ...args, ...select }) as any
    },
  },
)
