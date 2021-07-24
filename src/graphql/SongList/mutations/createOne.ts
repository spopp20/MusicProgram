import { mutationField, nonNull } from 'nexus'

export const SongListCreateOneMutation = mutationField('createOneSongList', {
  type: nonNull('SongList'),
  args: {
    data: nonNull('SongListCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.songList.create({
      data,
      ...select,
    })
  },
})
