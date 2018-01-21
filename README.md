Web Messenger
===

**How to setup**

The setup is simple, use only Node.js to run index file: `node ./index.js` then you can access Web Messenger page on localhost:3000

**Issues**
- Web Messenger does not use session or cookie, so users need to enter a name everytime they visit.
- Web Messenger does not support other style, such as url link, image. All messages are plain text.
- Web Messenger does not prevent duplicate username. Someone may pretend to be you! Beware the scam!
- Web Messenger chat data is removed everytime its process restart because all data is saved in process memory.
- Web Messenger was not designed to be greatly scaled. Its performance and stability depend on a Server spec and its network. 