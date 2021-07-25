import { queryField, nonNull } from 'nexus'

export const EventSongFindUniqueQuery = queryField('findUniqueEventSong', {
  type: 'EventSong',
  args: {
    where: nonNull('EventSongWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.eventSong.findUnique({
      where,
      ...select,
    })
  },
})
