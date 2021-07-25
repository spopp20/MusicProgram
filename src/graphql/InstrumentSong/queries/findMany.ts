import { queryField, nonNull, list } from 'nexus'

export const InstrumentSongFindManyQuery = queryField(
  'findManyInstrumentSong',
  {
    type: nonNull(list(nonNull('InstrumentSong'))),
    args: {
      where: 'InstrumentSongWhereInput',
      orderBy: list('InstrumentSongOrderByInput'),
      cursor: 'InstrumentSongWhereUniqueInput',
      distinct: 'InstrumentSongScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.instrumentSong.findMany({
        ...args,
        ...select,
      })
    },
  },
)
