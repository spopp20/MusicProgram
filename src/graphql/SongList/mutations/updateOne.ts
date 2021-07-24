import { mutationField, nonNull } from 'nexus'

export const SongListUpdateOneMutation = mutationField('updateOneSongList', {
  type: nonNull('SongList'),
  args: {
    where: nonNull('SongListWhereUniqueInput'),
    data: nonNull('SongListUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.songList.update({
      where,
      data,
      ...select,
    })
  },
})
