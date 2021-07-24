import { mutationField, nonNull } from 'nexus'

export const SheetMusicCreateOneMutation = mutationField(
  'createOneSheetMusic',
  {
    type: nonNull('SheetMusic'),
    args: {
      data: nonNull('SheetMusicCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.sheetMusic.create({
        data,
        ...select,
      })
    },
  },
)
