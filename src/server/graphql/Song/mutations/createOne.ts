import { mutationField, nonNull } from 'nexus'

export const SongCreateOneMutation = mutationField('createOneSong', {
  type: nonNull('Song'),
  args: {
    data: nonNull('SongCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.song.create({
      data,
      ...select,
    })
  },
})
