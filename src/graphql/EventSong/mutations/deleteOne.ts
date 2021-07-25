import { mutationField, nonNull } from 'nexus'

export const EventSongDeleteOneMutation = mutationField('deleteOneEventSong', {
  type: 'EventSong',
  args: {
    where: nonNull('EventSongWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.eventSong.delete({
      where,
      ...select,
    })
  },
})
