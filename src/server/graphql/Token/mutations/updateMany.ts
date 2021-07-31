import { mutationField, nonNull } from 'nexus'

export const TokenUpdateManyMutation = mutationField('updateManyToken', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TokenWhereInput',
    data: nonNull('TokenUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.token.updateMany(args as any)
  },
})
