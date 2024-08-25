import fs from 'fs';
import path from 'path';

export async function GET() {
  const dirRelativeToPublic = 'image/travel';

  const dir = path.resolve('./public', dirRelativeToPublic);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join('/', dirRelativeToPublic, name)
  );

  return Response.json(
    { images },
    {
      status: 200,
    }
  );
}
