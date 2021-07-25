import { mutationField, nonNull } from 'nexus'

export const InstrumentSongUpdateOneMutation = mutationField(
  'updateOneInstrumentSong',
  {
    type: nonNull('InstrumentSong'),
    args: {
      where: nonNull('InstrumentSongWhereUniqueInput'),
      data: nonNull('InstrumentSongUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.instrumentSong.update({
        where,
        data,
        ...select,
      })
    },
  },
)
