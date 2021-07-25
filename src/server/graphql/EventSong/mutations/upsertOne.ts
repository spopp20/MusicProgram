import { mutationField, nonNull } from 'nexus'

export const EventSongUpsertOneMutation = mutationField('upsertOneEventSong', {
  type: nonNull('EventSong'),
  args: {
    where: nonNull('EventSongWhereUniqueInput'),
    create: nonNull('EventSongCreateInput'),
    update: nonNull('EventSongUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.eventSong.upsert({
      ...args,
      ...select,
    })
  },
})
