import { queryField, list } from 'nexus'

export const SheetMusicAggregateQuery = queryField('aggregateSheetMusic', {
  type: 'AggregateSheetMusic',
  args: {
    where: 'SheetMusicWhereInput',
    orderBy: list('SheetMusicOrderByInput'),
    cursor: 'SheetMusicWhereUniqueInput',
    distinct: 'SheetMusicScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sheetMusic.aggregate({ ...args, ...select }) as any
  },
})
