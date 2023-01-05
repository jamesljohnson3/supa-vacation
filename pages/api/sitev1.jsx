import { useUser, useClerk } from '@clerk/clerk-react';

export default async function handler(req, res) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { prisma } = useClerk();

  // Check if user is authenticated
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }

  // Create new home
  if (req.method === 'POST') {
    try {
      const { image, title, description, price, guests, beds, baths } =
        req.body;

      const user = await prisma.user.findUnique({
        where: { email: req.headers.authorization },
      });

      const home = await prisma.home.create({
        data: {
          image,
          title,
          description,
          price,
          guests,
          beds,
          baths,
          ownerId: user.id,
        },
      });
      res.status(200).json(home);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
