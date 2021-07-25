import { queryField, nonNull, list } from 'nexus'

export const InstrumentSongFindCountQuery = queryField(
  'findManyInstrumentSongCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'InstrumentSongWhereInput',
      orderBy: list('InstrumentSongOrderByInput'),
      cursor: 'InstrumentSongWhereUniqueInput',
      distinct: 'InstrumentSongScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.instrumentSong.count(args as any)
    },
  },
)
