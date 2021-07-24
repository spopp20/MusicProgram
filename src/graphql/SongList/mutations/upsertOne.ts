import { mutationField, nonNull } from 'nexus'

export const SongListUpsertOneMutation = mutationField('upsertOneSongList', {
  type: nonNull('SongList'),
  args: {
    where: nonNull('SongListWhereUniqueInput'),
    create: nonNull('SongListCreateInput'),
    update: nonNull('SongListUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songList.upsert({
      ...args,
      ...select,
    })
  },
})
