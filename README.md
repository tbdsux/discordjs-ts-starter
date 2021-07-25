<div align="center">
    <h1>discordjs-ts-starter</h1>
    <p>A simple Typescript starter for creating a Discord BOT.</p>
</div>

This is a simple starter for creating a discord bot with Typescript. It is based from the guide from https://discordjs.guide.

I wanted to have a better developer experience with the help of intellisense in creating my bot, and so I have this.

## Guide

1. Create a `.env` file in your root folder and set the following. (You can also rename `.env.template`)

   ```
   # `.env`
   TOKEN=put-your-discord-bot-token-here
   ```

2. Run in development. It will automatically restart on file changes.

   ```bash
   yarn dev
   ```

3. If you want to run in production, build it first to javascript then run it.
   ```bash
   yarn start
   ```
