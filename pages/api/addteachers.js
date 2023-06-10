import { MongoClient } from 'mongodb';

const mongoURI =
  'mongodb+srv://ashrofa72:Ashraf330663@mernapp.5wrilan.mongodb.net/?retryWrites=true&w=majority';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mobile, position } = req.body;

    try {
      const client = await MongoClient.connect(mongoURI);
      const db = client.db('test');
      const collection = db.collection('teachers');

      // Save the teacher data to the MongoDB collection
      const result = await collection.insertOne({
        name,
        mobile,
        position,
      });

      client.close();

      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
