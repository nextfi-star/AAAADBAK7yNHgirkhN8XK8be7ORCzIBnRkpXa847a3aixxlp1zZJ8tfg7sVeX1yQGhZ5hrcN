import { Server as HTTPServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ioMap = new WeakMap<HTTPServer, SocketIOServer>();

export async function GET(req: NextRequest) {
  const server = (req as any).socket?.server;

  if (!server) {
    return NextResponse.json({ error: 'Socket server not available' }, { status: 500 });
  }

  let io = ioMap.get(server);

  if (!io) {
    io = new SocketIOServer(server, {
      path: '/api/socket',
      cors: {
        origin: '*',
      },
    });

    ioMap.set(server, io);

    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);

      socket.on('message', (msg) => {
        console.log('Message received:', msg);
        socket.broadcast.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });

    console.log('Socket.io server started');
  }

  return NextResponse.json({ message: 'Socket server ready' });
}
