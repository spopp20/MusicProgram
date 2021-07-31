import { mutationField, nonNull } from 'nexus'

export const TokenUpsertOneMutation = mutationField('upsertOneToken', {
  type: nonNull('Token'),
  args: {
    where: nonNull('TokenWhereUniqueInput'),
    create: nonNull('TokenCreateInput'),
    update: nonNull('TokenUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.token.upsert({
      ...args,
      ...select,
    })
  },
})
