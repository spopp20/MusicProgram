import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'User1',
    email: 'user1@example.com',
    hashedPassword: 'password',
    role: 'USER'
  },{
    name: 'User2',
    email: 'user2@example.com',
    hashedPassword: 'password',
    role: 'USER'
  },{
    name: 'Editor',
    email: 'editor@example.com',
    hashedPassword: 'password',
    role: 'EDITOR'
  },{
    name: 'Leader',
    email: 'leader@example.com',
    hashedPassword: 'password',
    role: 'LEADER'
  },{
    name: 'Admin',
    email: 'admin@example.com',
    hashedPassword: 'password',
    role: 'ADMIN'
  }
]

const eventData: Prisma.EventCreateInput[] = [
    {
      name: 'Event A Morning',
      description: 'An morning event',
      venue: '101 Old Rig Lane',
      startDateTime: "2021-11-22T08:57:31.123Z"
    },{
      name: 'Event A Evening',
      description: 'An evening event',
      venue: '101 Old Rig Lane',
      startDateTime: "2021-11-22T19:30:31.123Z"
    },{
      name: 'Event B Evening',
      description: 'An evening event',
      venue: '101 Old Rig Lane',
      startDateTime: "2021-11-25T19:30:31.123Z"
    },{
      name: 'Event C Evening',
      description: 'An evening event',
      venue: '101 Old Rig Lane',
      startDateTime: "2021-11-22T19:30:31.123Z"
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