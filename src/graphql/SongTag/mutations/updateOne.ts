import { mutationField, nonNull } from 'nexus'

export const SongTagUpdateOneMutation = mutationField('updateOneSongTag', {
  type: nonNull('SongTag'),
  args: {
    where: nonNull('SongTagWhereUniqueInput'),
    data: nonNull('SongTagUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.songTag.update({
      where,
      data,
      ...select,
    })
  },
})
