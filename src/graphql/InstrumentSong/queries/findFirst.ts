import { queryField, list } from 'nexus'

export const InstrumentSongFindFirstQuery = queryField(
  'findFirstInstrumentSong',
  {
    type: 'InstrumentSong',
    args: {
      where: 'InstrumentSongWhereInput',
      orderBy: list('InstrumentSongOrderByInput'),
      cursor: 'InstrumentSongWhereUniqueInput',
      distinct: 'InstrumentSongScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.instrumentSong.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
