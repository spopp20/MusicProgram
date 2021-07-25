import { queryField, nonNull, list } from 'nexus'

export const EventSongFindCountQuery = queryField('findManyEventSongCount', {
  type: nonNull('Int'),
  args: {
    where: 'EventSongWhereInput',
    orderBy: list('EventSongOrderByInput'),
    cursor: 'EventSongWhereUniqueInput',
    distinct: 'EventSongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.eventSong.count(args as any)
  },
})
