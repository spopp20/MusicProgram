import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Example User',
        email: 'example@example.com',
        hashedPassword: 'password'
    }
]

const eventData: Prisma.EventCreateInput[] = [
    {
      name: 'Event Sample A',
      description: 'An evening concert',
      venue: '101 Old Rig Lane'
    }
  ]


async function main() {
    console.log(`Start seeding ...`)
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }

    for (const u of eventData) {
        const user = await prisma.event.create({
          data: u,
        })
        console.log(`Created event with id: ${user.id}`)
    }
    
    console.log(`Seeding finished.`)
  }
  
main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })