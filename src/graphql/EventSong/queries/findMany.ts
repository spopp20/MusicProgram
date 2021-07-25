import { queryField, nonNull, list } from 'nexus'

export const EventSongFindManyQuery = queryField('findManyEventSong', {
  type: nonNull(list(nonNull('EventSong'))),
  args: {
    where: 'EventSongWhereInput',
    orderBy: list('EventSongOrderByInput'),
    cursor: 'EventSongWhereUniqueInput',
    distinct: 'EventSongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.eventSong.findMany({
      ...args,
      ...select,
    })
  },
})
