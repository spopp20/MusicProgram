import { queryField, nonNull } from 'nexus'

export const InstrumentSongFindUniqueQuery = queryField(
  'findUniqueInstrumentSong',
  {
    type: 'InstrumentSong',
    args: {
      where: nonNull('InstrumentSongWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.instrumentSong.findUnique({
        where,
        ...select,
      })
    },
  },
)
