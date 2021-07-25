import { mutationField, nonNull } from 'nexus'

export const InstrumentSongDeleteOneMutation = mutationField(
  'deleteOneInstrumentSong',
  {
    type: 'InstrumentSong',
    args: {
      where: nonNull('InstrumentSongWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.instrumentSong.delete({
        where,
        ...select,
      })
    },
  },
)
