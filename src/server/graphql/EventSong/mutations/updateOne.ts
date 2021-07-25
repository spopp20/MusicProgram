import { mutationField, nonNull } from 'nexus'

export const EventSongUpdateOneMutation = mutationField('updateOneEventSong', {
  type: nonNull('EventSong'),
  args: {
    where: nonNull('EventSongWhereUniqueInput'),
    data: nonNull('EventSongUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.eventSong.update({
      where,
      data,
      ...select,
    })
  },
})
