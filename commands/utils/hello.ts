import { CommandProps } from '../../types/command';

export const command: CommandProps = {
  name: 'hello',
  execute: (message, args) => {
    message.channel.send(
      'Hello! This is a starter template for creating a BOT with Typescript!'
    );
  },
};
