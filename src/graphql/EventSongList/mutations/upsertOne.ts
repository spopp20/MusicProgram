import { mutationField, nonNull } from 'nexus'

export const EventSongListUpsertOneMutation = mutationField(
  'upsertOneEventSongList',
  {
    type: nonNull('EventSongList'),
    args: {
      where: nonNull('EventSongListWhereUniqueInput'),
      create: nonNull('EventSongListCreateInput'),
      update: nonNull('EventSongListUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.eventSongList.upsert({
        ...args,
        ...select,
      })
    },
  },
)
