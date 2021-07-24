import { queryField, nonNull, list } from 'nexus'

export const EventSongListFindManyQuery = queryField('findManyEventSongList', {
  type: nonNull(list(nonNull('EventSongList'))),
  args: {
    where: 'EventSongListWhereInput',
    orderBy: list('EventSongListOrderByInput'),
    cursor: 'EventSongListWhereUniqueInput',
    distinct: 'EventSongListScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.eventSongList.findMany({
      ...args,
      ...select,
    })
  },
})
