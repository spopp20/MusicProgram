import { queryField, list } from 'nexus'

export const InstrumentSongAggregateQuery = queryField(
  'aggregateInstrumentSong',
  {
    type: 'AggregateInstrumentSong',
    args: {
      where: 'InstrumentSongWhereInput',
      orderBy: list('InstrumentSongOrderByInput'),
      cursor: 'InstrumentSongWhereUniqueInput',
      distinct: 'InstrumentSongScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.instrumentSong.aggregate({ ...args, ...select }) as any
    },
  },
)
