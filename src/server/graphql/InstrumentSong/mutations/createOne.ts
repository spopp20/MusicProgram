import { mutationField, nonNull } from 'nexus'

export const InstrumentSongCreateOneMutation = mutationField(
  'createOneInstrumentSong',
  {
    type: nonNull('InstrumentSong'),
    args: {
      data: nonNull('InstrumentSongCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.instrumentSong.create({
        data,
        ...select,
      })
    },
  },
)
