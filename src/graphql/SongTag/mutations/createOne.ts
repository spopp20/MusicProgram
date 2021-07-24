import { mutationField, nonNull } from 'nexus'

export const SongTagCreateOneMutation = mutationField('createOneSongTag', {
  type: nonNull('SongTag'),
  args: {
    data: nonNull('SongTagCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.songTag.create({
      data,
      ...select,
    })
  },
})
