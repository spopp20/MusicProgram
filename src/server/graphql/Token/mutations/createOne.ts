import { mutationField, nonNull } from 'nexus'

export const TokenCreateOneMutation = mutationField('createOneToken', {
  type: nonNull('Token'),
  args: {
    data: nonNull('TokenCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.token.create({
      data,
      ...select,
    })
  },
})
