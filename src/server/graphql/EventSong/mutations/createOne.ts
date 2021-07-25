import { mutationField, nonNull } from 'nexus'

export const EventSongCreateOneMutation = mutationField('createOneEventSong', {
  type: nonNull('EventSong'),
  args: {
    data: nonNull('EventSongCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.eventSong.create({
      data,
      ...select,
    })
  },
})
