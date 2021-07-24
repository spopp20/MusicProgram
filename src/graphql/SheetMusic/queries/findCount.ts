import { queryField, nonNull, list } from 'nexus'

export const SheetMusicFindCountQuery = queryField('findManySheetMusicCount', {
  type: nonNull('Int'),
  args: {
    where: 'SheetMusicWhereInput',
    orderBy: list('SheetMusicOrderByInput'),
    cursor: 'SheetMusicWhereUniqueInput',
    distinct: 'SheetMusicScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.sheetMusic.count(args as any)
  },
})
