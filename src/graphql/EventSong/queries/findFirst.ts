import { queryField, list } from 'nexus'

export const EventSongFindFirstQuery = queryField('findFirstEventSong', {
  type: 'EventSong',
  args: {
    where: 'EventSongWhereInput',
    orderBy: list('EventSongOrderByInput'),
    cursor: 'EventSongWhereUniqueInput',
    distinct: 'EventSongScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.eventSong.findFirst({
      ...args,
      ...select,
    })
  },
})
