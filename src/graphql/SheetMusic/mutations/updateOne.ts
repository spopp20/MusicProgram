import { mutationField, nonNull } from 'nexus'

export const SheetMusicUpdateOneMutation = mutationField(
  'updateOneSheetMusic',
  {
    type: nonNull('SheetMusic'),
    args: {
      where: nonNull('SheetMusicWhereUniqueInput'),
      data: nonNull('SheetMusicUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.sheetMusic.update({
        where,
        data,
        ...select,
      })
    },
  },
)
