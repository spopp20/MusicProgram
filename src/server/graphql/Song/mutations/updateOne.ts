import { mutationField, nonNull } from 'nexus'

export const SongUpdateOneMutation = mutationField('updateOneSong', {
  type: nonNull('Song'),
  args: {
    where: nonNull('SongWhereUniqueInput'),
    data: nonNull('SongUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.song.update({
      where,
      data,
      ...select,
    })
  },
})
