import { mutationField, nonNull } from 'nexus'

export const SongUpsertOneMutation = mutationField('upsertOneSong', {
  type: nonNull('Song'),
  args: {
    where: nonNull('SongWhereUniqueInput'),
    create: nonNull('SongCreateInput'),
    update: nonNull('SongUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.song.upsert({
      ...args,
      ...select,
    })
  },
})
