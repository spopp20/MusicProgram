import { mutationField, nonNull } from 'nexus'

export const SongTagUpsertOneMutation = mutationField('upsertOneSongTag', {
  type: nonNull('SongTag'),
  args: {
    where: nonNull('SongTagWhereUniqueInput'),
    create: nonNull('SongTagCreateInput'),
    update: nonNull('SongTagUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.songTag.upsert({
      ...args,
      ...select,
    })
  },
})
