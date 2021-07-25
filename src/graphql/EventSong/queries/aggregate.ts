import { queryField, list } from 'nexus'

export const EventSongAggregateQuery = queryField('aggregateEventSong', {
  type: 'AggregateEventSong',
  args: {
    where: 'EventSongWhereInput',
    orderBy: list('EventSongOrderByInput'),
    cursor: 'EventSongWhereUniqueInput',
    distinct: 'EventSongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.eventSong.aggregate({ ...args, ...select }) as any
  },
})
